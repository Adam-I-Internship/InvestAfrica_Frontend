import React from "react";

const IndustryCard = ({ imageSrc, title, description }) => {
  return (
    <article className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col grow pb-8 font-medium text-black rounded-3xl border-2 border-solid border-black border-opacity-60 max-md:mt-10">
        <img
          loading="lazy"
          src={imageSrc}
          alt={title}
          className="w-full aspect-[2.04]"
        />
        <h3 className="mt-7 ml-3 text-3xl leading-10">{title}</h3>
        <p className="mt-7 mr-7 ml-3 text-xl leading-8 max-md:mr-2.5">
          {description}
        </p>
      </div>
    </article>
  );
};

export default IndustryCard;
