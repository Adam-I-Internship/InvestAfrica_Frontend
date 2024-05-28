import React, { useEffect } from "react";
import top from "../assets/top.svg";

function FloatingButton() {
  const [visible, setVisible] = React.useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-5 px-5 bg-green-500 text-white rounded-full shadow-lg transition-opacity ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <img src={top} alt="top" />
    </button>
  );
}
export default FloatingButton;
