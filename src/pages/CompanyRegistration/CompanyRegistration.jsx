import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip'; // Make sure to import Tooltip component
import { validateCompanyData } from '../../utils/validateCompany';
import styles from './CompanyRegistration.module.css';
import Alert from '../../components/Alert/Alert';
import Button from '../../components/Button/Button';
import FadeTransition from '../../components/FadeTransition/FadeTransition';
import InputBox from '../../components/InputBox/InputBox'; // Make sure to import InputBox component
import Navigation from "../../homepage/navigation";

function CompanyRegistration() {
  const REGISTRATION_URL = `${import.meta.env.VITE_APP_BACKEND_URL}/companyregister`;

  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState('Register');
  const [formData, setFormData] = useState({
    role: 'Company',
    companyName: '',
    businessType: '',
    numberOfEmployees: '',
    yearOfEstablishment: '',
    country: '',
    city: '',
    postCode: '',
    industry: '',
    accountPassword: '',
    confirmPassword: '',
    phoneNumber: '',
    email: '',
  });

  const [errors, setErrors] = useState({});
  const [isTouched, setIsTouched] = useState({
    confirmPassword: false,
    numberOfEmployees: false,
    yearOfEstablishment: false,
  });

  const alertDuration = 5000;
  const [alert, setAlert] = useState({ message: '', state: '', active: false });

  const toggleAlert = () => {
    setAlert(prevAlert => ({
      ...prevAlert,
      active: !prevAlert.active,
    }));
  };

  useEffect(() => {
    const validationErrors = validateCompanyData({
      ...formData,
      numberOfEmployees: Number(formData.numberOfEmployees),
      yearOfEstablishment: Number(formData.yearOfEstablishment),
    });
    setErrors(validationErrors || {});
  }, [formData]);

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));

    // Prevent password, n.Employees or year.Establishment errors until interacted
    if (name === 'confirmPassword') {
      setIsTouched(prevTouched => ({ ...prevTouched, confirmPassword: true }));
    }
    if (name === 'numberOfEmployees') {
      setIsTouched(prevTouched => ({ ...prevTouched, numberOfEmployees: true }));
    }
    if (name === 'yearOfEstablishment') {
      setIsTouched(prevTouched => ({ ...prevTouched, yearOfEstablishment: true }));
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const data = {
      ...formData,
      numberOfEmployees: Number(formData.numberOfEmployees),
      yearOfEstablishment: Number(formData.yearOfEstablishment),
    };
    setButtonText('...');

    try {
      const response = await fetch(REGISTRATION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      let alertMessage = '';
      let alertState = '';

      if (response.ok) {
        alertMessage = 'Signup successful. Redirecting...';
        alertState = 'success';
        setTimeout(() => {
          navigate('/');
        }, alertDuration + 1000);
      } else {
        alertMessage = 'Signup failed, please retry.';
        alertState = 'error';
      }

      setAlert({ message: alertMessage, state: alertState, active: true });

      setButtonText('Register');
      setTimeout(toggleAlert, alertDuration);
    } catch (error) {
      setAlert({ message: error.toString(), state: 'error', active: true });
      setButtonText('Register');
      setTimeout(toggleAlert, alertDuration);
    }
  };

  return (
    <div>
      <Navigation/>
      <div className={styles.wrapper}>
        <div className={styles.blur_wrapper}>
          <FadeTransition variants="wait">
            <form className={styles.register_form} onSubmit={handleSubmit}>
              <h2>Register</h2>
              <div className={styles.register_input}>
                <div className={styles.radio_group}>
                  <label className={styles.radio}>
                    <Link to="/register" className={styles.link}>
                      <input
                        type="radio"
                        name="role"
                        value="User"
                        checked={formData.role === 'User'}
                        onChange={handleChange}
                      />
                      <span>User</span>
                    </Link>
                  </label>
                  <label className={styles.radio}>
                    <Link to="/companyregister" className={styles.link}>
                      <input
                        type="radio"
                        name="role"
                        value="Company"
                        checked={formData.role === 'Company'}
                        onChange={handleChange}
                      />
                      <span>Company</span>
                    </Link>
                  </label>
                </div>
                <InputBox
                  id="country"
                  label="Country"
                  required
                  name="country"
                  onChange={handleChange}
                  value={formData.country}
                  size="large"
                  message={errors.country}
                />
                <div className={styles.input_group}>
                  <InputBox
                    id="city"
                    label="City"
                    required
                    name="city"
                    type="text"
                    onChange={handleChange}
                    value={formData.city}
                    size="small"
                    message={errors.city}
                  />
                  <InputBox
                    id="postCode"
                    label="Post Code"
                    name="postCode"
                    type="text"
                    onChange={handleChange}
                    value={formData.postCode}
                    size="small"
                    message={errors.postCode}
                  />
                </div>
                <InputBox
                  id="companyName"
                  label="Company Name"
                  required
                  name="companyName"
                  type="text"
                  onChange={handleChange}
                  value={formData.companyName}
                  size="large"
                  message={errors.companyName}
                />
                <InputBox
                  id="businessType"
                  label="Industry"
                  required
                  name="industry"
                  type="text"
                  onChange={handleChange}
                  value={formData.industry}
                  size="large"
                  message={errors.businessType}
                />
                <InputBox
                  id="businessType"
                  label="Business Type"
                  required
                  name="businessType"
                  type="text"
                  onChange={handleChange}
                  value={formData.businessType}
                  size="large"
                  message={errors.businessType}
                />
                <div className={styles.input_group}>
                  <InputBox
                    id="numberOfEmployees"
                    label="Number Of Employees"
                    required
                    name="numberOfEmployees"
                    type="number"
                    min="1"
                    onChange={handleChange}
                    value={formData.numberOfEmployees}
                    size="small"
                    message={isTouched.numberOfEmployees ? errors.numberOfEmployees : ''}
                  />
                  <InputBox
                    id="yearOfEstablishment"
                    label="Year of Establishment"
                    required
                    name="yearOfEstablishment"
                    type="number"
                    min="1"
                    max={new Date().getFullYear()}
                    onChange={handleChange}
                    value={formData.yearOfEstablishment}
                    size="small"
                    message={isTouched.yearOfEstablishment ? errors.yearOfEstablishment : ''}
                  />
                </div>
                <InputBox
                  id="email"
                  label="Email"
                  required
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={formData.email}
                  size="large"
                  message={errors.email}
                />
                <InputBox
                  id="phoneNumber"
                  label="Phone Number"
                  required
                  name="phoneNumber"
                  type="tel"
                  onChange={handleChange}
                  value={formData.phoneNumber}
                  size="large"
                  message={errors.phoneNumber}
                />
                <InputBox
                  id="accountPassword"
                  label="Account Password"
                  required
                  name="accountPassword"
                  type="password"
                  tooltip="password-tooltip"
                  onChange={handleChange}
                  value={formData.accountPassword}
                  size="large"
                  message={errors.accountPassword}
                />
                <InputBox
                  id="confirmPassword"
                  label="Confirm Password"
                  required
                  name="confirmPassword"
                  type="password"
                  tooltip="password-tooltip"
                  onChange={handleChange}
                  value={formData.confirmPassword}
                  size="large"
                  message={isTouched.confirmPassword ? errors.confirmPassword : ''}
                />
                <Tooltip
                  id="password-tooltip"
                  style={{
                    backgroundColor: 'black',
                    color: '#fff',
                    padding: '1rem 1.5rem 1.5rem',
                    borderRadius: '16px',
                  }}
                  opacity={1}
                  role="tooltip"
                >
                  <div className={styles.tooltip_wrapper}>
                    <p className={styles.tooltip_title}>Password Requirements:</p>
                    <ul className={styles.tooltip_list_wrapper}>
                      <li>8-128 characters with a mix of letters and numbers</li>
                      <li>Must include both upper and lower case letters</li>
                    </ul>
                  </div>
                </Tooltip>
              </div>
              <div className={styles.login_link}>
                Have an account?{' '}
                <Link to="/login" className={styles.link}>
                  Login
                </Link>
              </div>
              <Button isSubmit isAction text={buttonText} />
            </form>
            <div className={styles.aboutus}>
              © {new Date().getFullYear()} - Invest Africa :: Powered by Adam-i Japan
            </div>
          </FadeTransition>
        </div>
      </div>
      <Alert message={alert.message} state={alert.state} isActive={alert.active} />
    </div>
  );
}

export default CompanyRegistration;
