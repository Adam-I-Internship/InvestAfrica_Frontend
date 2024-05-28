import * as React from "react";
import left from "../assets/left.png";
import right from "../assets/right.png";
import Niger from "../assets/flag1.png";
import investtom from "../assets/investtom.png";
import IndustryCard from "../components/IndustryCard";
import FloatingButton from "../components/FloatingBtn";

function ReusableIndustryCard({ src1, src2, label }) {
  return (
    <div className="flex flex-col px-4 pb-2">
      <div className="flex overflow-hidden relative flex-col justify-center items-start self-center py-7 rounded-full aspect-square w-[120px] max-md:pr-5">
        <img
          loading="lazy"
          src={src1}
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src={src2}
          alt={label}
          className="aspect-square w-[65px]"
        />
      </div>
      <div className="mt-3 text-xl leading-4 text-center text-black">
        {label}
      </div>
    </div>
  );
}

function ReusableCountryCard({ src, label }) {
  return (
    <div className="flex flex-col pr-4 pb-2 whitespace-nowrap">
      <img
        loading="lazy"
        src={src}
        alt={label}
        className="aspect-[1.3] w-[154px]"
      />
      <div className="self-center mt-3.5">{label}</div>
    </div>
  );
}

function Industrypage() {
  const industries = [
    {
      src1: "https://cdn.builder.io/api/v1/image/assets/TEMP/0a63870c4e611eabf9d0b34222d90c5028efb2b40efb4415bc3dd04e678bd39e?apiKey=54911849f61d4333a39b368307a01ae9&",
      src2: "https://cdn.builder.io/api/v1/image/assets/TEMP/c9ab368202aee08b0f61b475868ff444ae60a49c02f44a45adf2b5ea336286d1?apiKey=54911849f61d4333a39b368307a01ae9&",
      label: "Agriculture",
    },
    {
      src1: "https://cdn.builder.io/api/v1/image/assets/TEMP/3c437ce4a2d770a6e964c9e454d090c5649aa78175f4575dd0fdc0a0f231a1fe?apiKey=54911849f61d4333a39b368307a01ae9&",
      src2: "https://cdn.builder.io/api/v1/image/assets/TEMP/3c437ce4a2d770a6e964c9e454d090c5649aa78175f4575dd0fdc0a0f231a1fe?apiKey=54911849f61d4333a39b368307a01ae9&",
      label: "Mining",
    },
    {
      src1: "https://cdn.builder.io/api/v1/image/assets/TEMP/43159630457206951bc62eb5890d09719e21e3e94b8b72ad9fe86eac5e7442ae?apiKey=54911849f61d4333a39b368307a01ae9&",
      src2: "https://cdn.builder.io/api/v1/image/assets/TEMP/43159630457206951bc62eb5890d09719e21e3e94b8b72ad9fe86eac5e7442ae?apiKey=54911849f61d4333a39b368307a01ae9&",
      label: "Oil & Gas",
    },
    {
      src1: "https://cdn.builder.io/api/v1/image/assets/TEMP/99538b0548f4bafb30f5ef875a31cd7044e526ac49d7434f78b786d59d4447f1?apiKey=54911849f61d4333a39b368307a01ae9&",
      src2: "https://cdn.builder.io/api/v1/image/assets/TEMP/99538b0548f4bafb30f5ef875a31cd7044e526ac49d7434f78b786d59d4447f1?apiKey=54911849f61d4333a39b368307a01ae9&",
      label: "Manufacturing",
    },
    {
      src1: "https://cdn.builder.io/api/v1/image/assets/TEMP/8591e4498d5a7d9b38b06579443c1a8678b7dba1429bdc6236703e9a4f657bec?apiKey=54911849f61d4333a39b368307a01ae9&",
      src2: "https://cdn.builder.io/api/v1/image/assets/TEMP/8591e4498d5a7d9b38b06579443c1a8678b7dba1429bdc6236703e9a4f657bec?apiKey=54911849f61d4333a39b368307a01ae9&",
      label: "Banking & Finance",
    },
    {
      src1: "https://cdn.builder.io/api/v1/image/assets/TEMP/1e70177336cfd20b68f7c2ac558c639ca68423c3b0b70f939195ea73397b3bd1?apiKey=54911849f61d4333a39b368307a01ae9&",
      src2: "https://cdn.builder.io/api/v1/image/assets/TEMP/1e70177336cfd20b68f7c2ac558c639ca68423c3b0b70f939195ea73397b3bd1?apiKey=54911849f61d4333a39b368307a01ae9&",
      label: "Tourism",
    },
    {
      src1: "https://cdn.builder.io/api/v1/image/assets/TEMP/57bb28e61f3d8ddd9b266c6354eabf5b12d87222f62905eea7e3af6b78b560a9?apiKey=54911849f61d4333a39b368307a01ae9&",
      src2: "https://cdn.builder.io/api/v1/image/assets/TEMP/0223cc4aa0f8df7ee1b5d6d1a44beb51d18807306d6f1738a7d3a2e132573972?apiKey=54911849f61d4333a39b368307a01ae9&",
      label: "Retail",
    },
  ];

  const countries = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c48e91d8ac1d12780c921d5599ecb01b3fe4d1094fd0c73325f72249c90112e0?apiKey=54911849f61d4333a39b368307a01ae9&",
      label: "Nigeria",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a8710a09c898f503cfe19991f74b6015aa6c904a58de721b1fa592392cc1d5ff?apiKey=54911849f61d4333a39b368307a01ae9&",
      label: "Morocco",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ec8da5e2fcde319ede511bf9ac1ea704de2d6fd880a34c8621822f51898ef50?apiKey=54911849f61d4333a39b368307a01ae9&",
      label: "Kenya",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5aa5283a2721549232b4a695f09b4cba942fc82352b5565dab368fb02b9baa22?apiKey=54911849f61d4333a39b368307a01ae9&",
      label: "Zimbabwe",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/18901b81e8690b50400563123ef445e350b09c4787754dae46c437e7f474ef5f?apiKey=54911849f61d4333a39b368307a01ae9&",
      label: "Libya",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1441c823f9e9bd10354ed8c26d76fe6f8236247572cd414c80f3a78c24c0cd63?apiKey=54911849f61d4333a39b368307a01ae9&",
      label: "Sudan",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/71ceb1a6c30570abfc8e2939d04d5f7fd7d9aff204de3a0f34f5db676711d86d?apiKey=54911849f61d4333a39b368307a01ae9&",
      label: "Niger",
    },
  ];

  return (
    <div className="flex flex-col bg-white">
      <header className="sticky top-0 z-50 flex justify-between px-6 pb-1 w-full shadow-md bg-white leading-[150%] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6143f63e07273e4a40a19a5968d6e6bb0f2b61fa7e56b4fb178c022d7d0098c?apiKey=54911849f61d4333a39b368307a01ae9&"
          alt="Logo"
          className="shrink-0 aspect-[1.22] w-[82px]"
        />
        <div className="flex justify-center gap-3 mt-2 bg-white rounded-lg border-2 border-solid border-neutral-400 text-zinc-500 max-md:flex-wrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9c5eaf8585d86224ed95710a502f37da9895fe40b334d2c7341c683594b3dc9?apiKey=54911849f61d4333a39b368307a01ae9&"
            alt=""
            className="shrink-0 w-6 aspect-square"
          />
          <input
            type="text"
            className="flex-1 bg-transparent border-none focus:outline-none w-[500px]"
            placeholder="What are you looking for..."
            aria-label="Search"
          />
        </div>
        <div className="flex gap-7 items-center text-xl font-medium text-black whitespace-nowrap">
          <div className="flex gap-1 self-stretch my-auto font-semibold text-right">
            <div className="my-auto text-sm ">Eng</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbba916e2f59d5c43d520df3d8386331a77deb79ceafe4c614fc27bf7cc9d6cd?apiKey=54911849f61d4333a39b368307a01ae9&"
              alt="Language Selector"
              className="shrink-0 aspect-[1.08] w-[25px]"
            />
          </div>
          <a
            href="/signup"
            className="justify-center px-6 py-2 border-2 text-base border-green-500 rounded-lg shadow-sm max-md:px-5"
          >
            Signup
          </a>
          <a
            href="/login"
            className="justify-center px-6 py-2.5 text-base text-white bg-green-500 rounded-lg shadow-sm max-md:px-5"
          >
            Login
          </a>
        </div>
      </header>

      <section className="flex overflow-hidden justify-center items-center relative flex-col w-full min-h-[386px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/668b357c9b5050b5ceb925aaa8b617f602c87f4737ea38857f81fade7342a244?apiKey=54911849f61d4333a39b368307a01ae9&"
          alt="Industries Background"
          className="object-cover absolute inset-0 size-full"
        />
        <h1 className="relative self-center text-8xl font-semibold  text-center text-white max-md:max-w-full max-md:text-4xl">
          INDUSTRIES
        </h1>
      </section>

      <section className="flex flex-col p-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <section>
          <div className="flex relative z-10 flex-col px-4 pt-5 pb-3 mt-8 -mb-24 bg-white rounded-3xl shadow-2xl max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
            <h2 className="text-3xl leading-4 text-black max-md:max-w-full">
              Top Industries
            </h2>
            <div className="flex items-center">
              <img src={left} alt="left" className=" w-14 h-14" />
              <div className="flex flex-wrap gap-5 justify-center content-center px-1 mt-4">
                {industries.map((industry) => (
                  <ReusableIndustryCard
                    key={industry.label}
                    src1={industry.src1}
                    src2={industry.src2}
                    label={industry.label}
                  />
                ))}
              </div>
              <img src={right} alt="right" className=" w-14 h-14" />
            </div>
          </div>
          <div className="flex relative z-10 flex-col px-4 pt-5 pb-3 mt-[130px] -mb-24 bg-white rounded-3xl shadow-2xl max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
            <h2 className="text-3xl leading-4 text-black max-md:max-w-full">
              Top Countries
            </h2>
            <div className="flex items-center">
              <img src={left} alt="left" className=" w-14 h-14" />
              <div className="flex flex-wrap gap-5 justify-center content-center px-1 mt-4">
                {countries.map((country) => (
                  <ReusableIndustryCard
                    key={country.label}
                    src1={country.src}
                    src2={country.src}
                    label={country.label}
                  />
                ))}
              </div>
              <img src={right} alt="right" className=" w-14 h-14" />
            </div>
          </div>
        </section>
      </section>
      <section className="flex mt-[100px] py-20 p-[150px] overflow-hidden justify-center items-center relative flex-col w-full min-h-[386px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src={investtom}
          alt="Invest Background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative">
          <div className=" self-center  text-6xl font-bold text-center text-white leading-[96px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            Investing in Tomorrow
          </div>
          <p className=" self-center mt-28 mb-20 text-4xl font-semibold text-white leading-[60px] max-md:mt-10 max-md:max-w-full">
            The future of Africa's industries looks promising, with ongoing
            investments in infrastructure, technology, and education. These
            investments are expected to drive further growth and development,
            positioning Africa as a significant player in the global economy.
          </p>
        </div>
      </section>
      <section className="flex justify-center items-center">
        <div className="flex flex-wrap gap-5 mt-10 justify-center">
          <IndustryCard
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ecb8e4e67805607d949ff3ef260d11296069a24742b8ca025ab21dacaf4a997f?apiKey=54911849f61d4333a39b368307a01ae9&"
            title="Construction"
            description="Africa's construction sector is rapidly expanding, fueling infrastructure development."
          />
          <IndustryCard
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ecb8e4e67805607d949ff3ef260d11296069a24742b8ca025ab21dacaf4a997f?apiKey=54911849f61d4333a39b368307a01ae9&"
            title="Construction"
            description="Africa's construction sector is rapidly expanding, fueling infrastructure development."
          />
          <IndustryCard
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ecb8e4e67805607d949ff3ef260d11296069a24742b8ca025ab21dacaf4a997f?apiKey=54911849f61d4333a39b368307a01ae9&"
            title="Construction"
            description="Africa's construction sector is rapidly expanding, fueling infrastructure development."
          />
          <IndustryCard
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ecb8e4e67805607d949ff3ef260d11296069a24742b8ca025ab21dacaf4a997f?apiKey=54911849f61d4333a39b368307a01ae9&"
            title="Construction"
            description="Africa's construction sector is rapidly expanding, fueling infrastructure development."
          />
          <IndustryCard
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ecb8e4e67805607d949ff3ef260d11296069a24742b8ca025ab21dacaf4a997f?apiKey=54911849f61d4333a39b368307a01ae9&"
            title="Construction"
            description="Africa's construction sector is rapidly expanding, fueling infrastructure development."
          />
          <IndustryCard
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ecb8e4e67805607d949ff3ef260d11296069a24742b8ca025ab21dacaf4a997f?apiKey=54911849f61d4333a39b368307a01ae9&"
            title="Construction"
            description="Africa's construction sector is rapidly expanding, fueling infrastructure development."
          />
          <IndustryCard
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ecb8e4e67805607d949ff3ef260d11296069a24742b8ca025ab21dacaf4a997f?apiKey=54911849f61d4333a39b368307a01ae9&"
            title="Construction"
            description="Africa's construction sector is rapidly expanding, fueling infrastructure development."
          />
          <IndustryCard
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ecb8e4e67805607d949ff3ef260d11296069a24742b8ca025ab21dacaf4a997f?apiKey=54911849f61d4333a39b368307a01ae9&"
            title="Construction"
            description="Africa's construction sector is rapidly expanding, fueling infrastructure development."
          />
          <IndustryCard
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ecb8e4e67805607d949ff3ef260d11296069a24742b8ca025ab21dacaf4a997f?apiKey=54911849f61d4333a39b368307a01ae9&"
            title="Construction"
            description="Africa's construction sector is rapidly expanding, fueling infrastructure development."
          />
        </div>
      </section>

      <FloatingButton />

      <footer className="flex justify-center items-center w-full h-24 bg-black text-white">
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-5">
            <a href="/about" className="text-lg">
              About Us
            </a>
            <a href="/contact" className="text-lg">
              Contact Us
            </a>
            <a href="/faq" className="text-lg">
              FAQ
            </a>
          </div>
          <div className="mt-2 text-sm">
            &copy; 2021 Invest Africa. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Industrypage;
