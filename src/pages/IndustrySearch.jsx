import * as React from "react";
import left from "../assets/left.png";
import right from "../assets/right.png";
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
];

function IndustrySearch() {
  return (
    <div className="tw-flex tw-flex-col tw-pb-6 tw-bg-white">
      <header className="tw-sticky tw-top-0 tw-z-50 tw-flex tw-justify-between tw-px-6 tw-pb-1 tw-w-full tw-shadow-md tw-bg-white tw-leading-[150%] max-md:tw-flex-wrap max-md:tw-px-5 max-md:tw-max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6143f63e07273e4a40a19a5968d6e6bb0f2b61fa7e56b4fb178c022d7d0098c?apiKey=54911849f61d4333a39b368307a01ae9&"
          alt="Logo"
          className="tw-shrink-0 tw-aspect-[1.22] tw-w-[82px]"
        />
        <div className="tw-flex tw-justify-center tw-gap-3 tw-mt-2 tw-bg-white tw-rounded-lg tw-border-2 tw-border-solid tw-border-neutral-400 tw-text-zinc-500 max-md:tw-flex-wrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9c5eaf8585d86224ed95710a502f37da9895fe40b334d2c7341c683594b3dc9?apiKey=54911849f61d4333a39b368307a01ae9&"
            alt=""
            className="tw-shrink-0 tw-w-6 tw-aspect-square"
          />
          <input
            type="text"
            className="tw-flex-1 tw-bg-transparent tw-border-none focus:tw-outline-none tw-w-[500px]"
            placeholder="What are you looking for..."
            aria-label="Search"
          />
        </div>
        <div className="tw-flex tw-gap-7 tw-items-center tw-text-xl tw-font-medium tw-text-black tw-whitespace-nowrap">
          <div className="tw-flex tw-gap-1 tw-self-stretch tw-my-auto tw-font-semibold tw-text-right">
            <div className="tw-my-auto tw-text-sm ">Eng</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbba916e2f59d5c43d520df3d8386331a77deb79ceafe4c614fc27bf7cc9d6cd?apiKey=54911849f61d4333a39b368307a01ae9&"
              alt="Language Selector"
              className="tw-shrink-0 tw-aspect-[1.08] tw-w-[25px]"
            />
          </div>
          <a
            href="/signup"
            className="tw-justify-center tw-px-6 tw-py-2 tw-border-2 tw-text-base tw-border-solid tw-border-green-500  tw-rounded-lg tw-shadow-sm max-md:tw-px-5"
          >
            Signup
          </a>
          <a
            href="/login"
            className="tw-justify-center tw-px-6 tw-py-2.5 tw-text-base tw-text-white tw-bg-green-500 tw-rounded-lg tw-shadow-sm max-md:tw-ypx-5"
          >
            Login
          </a>
        </div>
      </header>
      <div className="flex overflow-hidden relative flex-col items-start px-11 pt-16 pb-5 w-full font-semibold text-white min-h-[327px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b3e94c2c1ddaf73337bac3d2a745e156c6bfc05da9fe686d2cf07c0ad2f26dbf?apiKey=54911849f61d4333a39b368307a01ae9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3e94c2c1ddaf73337bac3d2a745e156c6bfc05da9fe686d2cf07c0ad2f26dbf?apiKey=54911849f61d4333a39b368307a01ae9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3e94c2c1ddaf73337bac3d2a745e156c6bfc05da9fe686d2cf07c0ad2f26dbf?apiKey=54911849f61d4333a39b368307a01ae9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3e94c2c1ddaf73337bac3d2a745e156c6bfc05da9fe686d2cf07c0ad2f26dbf?apiKey=54911849f61d4333a39b368307a01ae9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3e94c2c1ddaf73337bac3d2a745e156c6bfc05da9fe686d2cf07c0ad2f26dbf?apiKey=54911849f61d4333a39b368307a01ae9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3e94c2c1ddaf73337bac3d2a745e156c6bfc05da9fe686d2cf07c0ad2f26dbf?apiKey=54911849f61d4333a39b368307a01ae9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3e94c2c1ddaf73337bac3d2a745e156c6bfc05da9fe686d2cf07c0ad2f26dbf?apiKey=54911849f61d4333a39b368307a01ae9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3e94c2c1ddaf73337bac3d2a745e156c6bfc05da9fe686d2cf07c0ad2f26dbf?apiKey=54911849f61d4333a39b368307a01ae9&"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative text-8xl leading-4 max-md:max-w-full max-md:text-4xl">
          Agriculture
        </div>
        <div className="relative mt-16 text-4xl w-[600px] leading-[50px] max-md:mt-10 max-md:max-w-full">
          Agriculture is the backbone of Africa's economy and development
        </div>
      </div>
      <div className="flex flex-col px-9 mt-3 w-full max-md:px-5 max-md:max-w-full">
        <section className="flex gap-5 justify-center">
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
        </section>
        <div className="mt-[200px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col  max-md:mt-6 bg-slate-500 max-h-[100vh] overflow-auto">
                <div className="flex justify-center items-center px-16 py-5 text-xl font-medium leading-8 text-center text-black whitespace-nowrap max-md:px-5">
                  Filters
                </div>
                <div className="flex flex-col px-3 pt-8 pb-4 mt-5 w-full text-md font-medium leading-8 bg-white rounded-3xl border border-black border-solid text-black text-opacity-80 max-md:pr-5">
                  <div className="self-center text-center text-black">
                    COUNTRIES
                  </div>
                  <div className="flex gap-3 px-3 py-1 mt-6 text-base bg-white rounded-lg border-4 border-solid border-neutral-400 text-zinc-500">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b01934475d6111e695085a15445860e6de3f40f4a181b2c37f3da1163ff42eb6?apiKey=54911849f61d4333a39b368307a01ae9&"
                      className="shrink-0 w-6 aspect-square"
                      alt="Search icon"
                    />
                    <div className="flex-1 text-ellipsis">Search country</div>
                  </div>
                  {["Nigeria", "Kenya", "Morocco", "Mali"].map((country) => (
                    <div
                      key={country}
                      className="flex gap-5 py-1 whitespace-nowrap"
                    >
                      <div className="shrink-0 h-6 bg-white border-2 border-solid border-black border-opacity-60 w-[22px]" />
                      <div className="flex-auto">{country}</div>
                    </div>
                  ))}
                  <div className="self-center mt-3 text-base text-center text-teal-600">
                    View more
                  </div>
                </div>
                <div className="flex flex-col pt-8 pr-7 pb-4 pl-1.5 mt-5 w-full text-md font-medium leading-8 bg-white rounded-3xl border border-black border-solid text-black text-opacity-80 max-md:pr-5">
                  <div className="self-center text-center text-black">
                    SUB CATEGORIES
                  </div>
                  <div className="flex gap-3 px-3 py-1 mt-6 text-base bg-white rounded-lg border-4 border-solid border-neutral-400 text-zinc-500">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b8412cbd7fd77ac442e292bb711d82cf22618b8daf8513deace9b6c3e0b2dbe?apiKey=54911849f61d4333a39b368307a01ae9&"
                      className="shrink-0 w-6 aspect-square"
                      alt="Search icon"
                    />
                    <div className="flex-1 text-ellipsis">Search category</div>
                  </div>
                  {[
                    "Crop Production",
                    "Fisheries",
                    "Forestry",
                    "Livestock",
                    "Services",
                  ].map((category) => (
                    <div key={category} className="flex gap-5 py-1">
                      <div className="shrink-0 h-6 bg-white border-2 border-solid border-black border-opacity-60 w-[22px]" />
                      <div className="flex-auto">{category}</div>
                    </div>
                  ))}
                  <div className="self-center mt-3 text-base text-center text-teal-600">
                    View more
                  </div>
                </div>
                <div className="flex flex-col items-start pt-8 pr-3 pb-2.5 pl-3 mt-5 w-full text-md font-medium leading-8 bg-white rounded-3xl border border-black border-solid text-black text-opacity-80 max-md:pr-5">
                  <div className="self-center text-center text-black">
                    COMPANY SIZE
                  </div>
                  {["Small", "Medium", "Large"].map((size) => (
                    <div
                      key={size}
                      className="flex gap-2 py-1 mt-6 whitespace-nowrap items-center"
                    >
                      <div className="shrink-0 h-5 bg-white border-2 border-solid border-black border-opacity-60 w-5" />
                      <div className="flex-auto my-auto">{size}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-start py-8 pr-8 pl-3 mt-5 w-full text-md font-medium leading-8 bg-white rounded-3xl border border-black border-solid text-black text-opacity-80 max-md:pr-5">
                  <div className="self-center text-center text-black">
                    NUMBER OF EMPLOYEES
                  </div>
                  <div className="flex flex-wrap gap-5 justify-center">
                    {[
                      "0~50",
                      "50~100",
                      "100~250",
                      "250~500",
                      "500~1000",
                      "1000~2000",
                      "2000+",
                    ].map((range) => (
                      <div
                        key={range}
                        className="flex gap-2 py-1 mt-6 whitespace-nowrap"
                      >
                        <div className="shrink-0 h-6 bg-white border-2 border-solid border-black border-opacity-60 w-[22px]" />
                        <div className="flex-auto my-auto">{range}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col py-7 pr-8 pl-3 mt-5 w-full bg-white rounded-3xl border border-black border-solid max-md:pr-5">
                  <div className="self-center text-md font-medium leading-8 text-center text-black">
                    YEAR ESTABLISHED
                  </div>
                  <div className="flex gap-5 justify-between mt-8">
                    <div className="flex flex-col">
                      <div className="self-center text-base font-medium leading-6 text-black">
                        From:
                      </div>
                      <div className="flex gap-5 justify-between mt-4">
                        <div className="shrink-0 my-auto w-6 h-6 bg-white border-2 border-solid border-black border-opacity-60" />
                        <div className="flex gap-5 justify-between px-2 py-1 bg-white border border-black border-solid">
                          <div className="my-auto text-base leading-6 text-ellipsis text-zinc-500">
                            1999
                          </div>
                          <div className="flex flex-col items-center">
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/46c368a686fc51a141907d34326134fe2bca759616d186d0c25c62330611fe89?apiKey=54911849f61d4333a39b368307a01ae9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c368a686fc51a141907d34326134fe2bca759616d186d0c25c62330611fe89?apiKey=54911849f61d4333a39b368307a01ae9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c368a686fc51a141907d34326134fe2bca759616d186d0c25c62330611fe89?apiKey=54911849f61d4333a39b368307a01ae9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c368a686fc51a141907d34326134fe2bca759616d186d0c25c62330611fe89?apiKey=54911849f61d4333a39b368307a01ae9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c368a686fc51a141907d34326134fe2bca759616d186d0c25c62330611fe89?apiKey=54911849f61d4333a39b368307a01ae9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c368a686fc51a141907d34326134fe2bca759616d186d0c25c62330611fe89?apiKey=54911849f61d4333a39b368307a01ae9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c368a686fc51a141907d34326134fe2bca759616d186d0c25c62330611fe89?apiKey=54911849f61d4333a39b368307a01ae9&width=2000 2000w"
                              sizes="(max-width: 2000px) 100vw, 2000px"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/46c368a686fc51a141907d34326134fe2bca759616d186d0c25c62330611fe89?apiKey=54911849f61d4333a39b368307a01ae9&width=2000"
                              className="w-3 aspect-[1/2]"
                              alt="Dropdown arrow"
                            />
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/46c368a686fc51a141907d34326134fe2bca759616d186d0c25c62330611fe89?apiKey=54911849f61d4333a39b368307a01ae9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c368a686fc51a141907d34326134fe2bca759616d186d0c25c62330611fe89?apiKey=54911849f61d4333a39b368307a01ae9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c368a686fc51a141907d34326134fe2bca759616d186d0c25c62330611fe89?apiKey=54911849f61d4333a39b368307a01ae9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c368a686fc51a141907d34326134fe2bca759616d186d0c25c62330611fe89?apiKey=54911849f61d4333a39b368307a01ae9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c368a686fc51a141907d34326134fe2bca759616d186d0c25c62330611fe89?apiKey=54911849f61d4333a39b368307a01ae9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c368a686fc51a141907d34326134fe2bca759616d186d0c25c62330611fe89?apiKey=54911849f61d4333a39b368307a01ae9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c368a686fc51a141907d34326134fe2bca759616d186d0c25c62330611fe89?apiKey=54911849f61d4333a39b368307a01ae9&width=2000 2000w"
                              sizes="(max-width: 2000px) 100vw, 2000px"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/46c368a686fc51a141907d34326134fe2bca759616d186d0c25c62330611fe89?apiKey=54911849f61d4333a39b368307a01ae9&width=2000"
                              className="w-3 -scale-y-100 aspect-[1/2]"
                              alt="Dropdown arrow"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="self-center text-base font-medium leading-6 text-black">
                        To:
                      </div>
                      <div className="flex gap-5 justify-between mt-4">
                        <div className="shrink-0 my-auto w-6 h-6 bg-white border-2 border-solid border-black border-opacity-60" />
                        <div className="flex gap-5 justify-between px-2 py-1 bg-white border border-black border-solid">
                          <div className="my-auto text-base leading-6 text-ellipsis text-zinc-500">
                            2023
                          </div>
                          <div className="flex flex-col items-center">
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/46c368a686fc51a141907d34326134fe2bca759616d186d0c25c62330611fe89?apiKey=54911849f61d4333a39b368307a01ae9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c368a686fc51a141907d34326134fe2bca759616d186d0c25c62330611fe89?apiKey=54911849f61d4333a39b368307a01ae9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c368a686fc51a141907d34326134fe2bca759616d186d0c25c62330611fe89?apiKey=54911849f61d4333a39b368307a01ae9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c368a686fc51a141907d34326134fe2bca759616d186d0c25c62330611fe89?apiKey=54911849f61d4333a39b368307a01ae9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c368a686fc51a141907d34326134fe2bca759616d186d0c25c62330611fe89?apiKey=54911849f61d4333a39b368307a01ae9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c368a686fc51a141907d34326134fe2bca759616d186d0c25c62330611fe89?apiKey=54911849f61d4333a39b368307a01ae9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c368a686fc51a141907d34326134fe2bca759616d186d0c25c62330611fe89?apiKey=54911849f61d4333a39b368307a01ae9&width=2000 2000w"
                              sizes="(max-width: 2000px) 100vw, 2000px"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/46c368a686fc51a141907d34326134fe2bca759616d186d0c25c62330611fe89?apiKey=54911849f61d4333a39b368307a01ae9&width=2000"
                              className="w-3 aspect-[1/2]"
                              alt="Dropdown arrow"
                            />
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/46c368a686fc51a141907d34326134fe2bca759616d186d0c25c62330611fe89?apiKey=54911849f61d4333a39b368307a01ae9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c368a686fc51a141907d34326134fe2bca759616d186d0c25c62330611fe89?apiKey=54911849f61d4333a39b368307a01ae9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c368a686fc51a141907d34326134fe2bca759616d186d0c25c62330611fe89?apiKey=54911849f61d4333a39b368307a01ae9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c368a686fc51a141907d34326134fe2bca759616d186d0c25c62330611fe89?apiKey=54911849f61d4333a39b368307a01ae9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c368a686fc51a141907d34326134fe2bca759616d186d0c25c62330611fe89?apiKey=54911849f61d4333a39b368307a01ae9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c368a686fc51a141907d34326134fe2bca759616d186d0c25c62330611fe89?apiKey=54911849f61d4333a39b368307a01ae9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c368a686fc51a141907d34326134fe2bca759616d186d0c25c62330611fe89?apiKey=54911849f61d4333a39b368307a01ae9&width=2000 2000w"
                              sizes="(max-width: 2000px) 100vw, 2000px"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/46c368a686fc51a141907d34326134fe2bca759616d186d0c25c62330611fe89?apiKey=54911849f61d4333a39b368307a01ae9&width=2000"
                              className="w-3 -scale-y-100 aspect-[1/2]"
                              alt="Dropdown arrow"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[72%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-6 max-md:max-w-full">
                <div className="rounded-2xl border border-solid border-black border-opacity-40 max-md:pr-5 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[77%] max-md:ml-0 max-md:w-full">
                      <div className="grow max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8c9f299a63cde203d6b9a285929c0f4384320fe222801066f250d20016d094ea?apiKey=54911849f61d4333a39b368307a01ae9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c9f299a63cde203d6b9a285929c0f4384320fe222801066f250d20016d094ea?apiKey=54911849f61d4333a39b368307a01ae9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c9f299a63cde203d6b9a285929c0f4384320fe222801066f250d20016d094ea?apiKey=54911849f61d4333a39b368307a01ae9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c9f299a63cde203d6b9a285929c0f4384320fe222801066f250d20016d094ea?apiKey=54911849f61d4333a39b368307a01ae9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c9f299a63cde203d6b9a285929c0f4384320fe222801066f250d20016d094ea?apiKey=54911849f61d4333a39b368307a01ae9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c9f299a63cde203d6b9a285929c0f4384320fe222801066f250d20016d094ea?apiKey=54911849f61d4333a39b368307a01ae9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c9f299a63cde203d6b9a285929c0f4384320fe222801066f250d20016d094ea?apiKey=54911849f61d4333a39b368307a01ae9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c9f299a63cde203d6b9a285929c0f4384320fe222801066f250d20016d094ea?apiKey=54911849f61d4333a39b368307a01ae9&"
                              className="grow w-full aspect-[1.2] max-md:mt-7"
                            />
                          </div>
                          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col mt-8 tracking-tight max-md:mt-10">
                              <div className="text-lg font-bold text-neutral-900">
                                Company Name
                              </div>
                              <div className="mt-8 text-sm leading-6 text-black">
                                This is a Company description box to describe
                                the company. This is a Company description box
                                to describe the company. This is a Company
                                description box to describe the company.{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col mt-5 text-sm font-medium max-md:mt-10">
                        <div className="leading-5 text-right text-black">
                          Country
                          <br />
                          Company Address 123
                          <br />
                          Other important information
                          <br />
                          Other important information
                          <br />
                          Other important information
                        </div>
                        <div className="justify-center self-end px-4 py-1.5 mt-16 text-white bg-green-500 rounded-xl leading-[150%] max-md:mt-10">
                          View profile
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-7 rounded-2xl border-4 border-solid border-cyan-500 border-opacity-70 max-md:pr-5 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[76%] max-md:ml-0 max-md:w-full">
                      <div className="grow max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex overflow-hidden relative flex-col grow items-start pb-20 rounded-xl aspect-[1.21] max-md:mt-7">
                              <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6b24748535444a9a903c06ccbd948c0c3f41fa84f99d887f5135efca25e6acc5?apiKey=54911849f61d4333a39b368307a01ae9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b24748535444a9a903c06ccbd948c0c3f41fa84f99d887f5135efca25e6acc5?apiKey=54911849f61d4333a39b368307a01ae9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b24748535444a9a903c06ccbd948c0c3f41fa84f99d887f5135efca25e6acc5?apiKey=54911849f61d4333a39b368307a01ae9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b24748535444a9a903c06ccbd948c0c3f41fa84f99d887f5135efca25e6acc5?apiKey=54911849f61d4333a39b368307a01ae9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b24748535444a9a903c06ccbd948c0c3f41fa84f99d887f5135efca25e6acc5?apiKey=54911849f61d4333a39b368307a01ae9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b24748535444a9a903c06ccbd948c0c3f41fa84f99d887f5135efca25e6acc5?apiKey=54911849f61d4333a39b368307a01ae9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b24748535444a9a903c06ccbd948c0c3f41fa84f99d887f5135efca25e6acc5?apiKey=54911849f61d4333a39b368307a01ae9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b24748535444a9a903c06ccbd948c0c3f41fa84f99d887f5135efca25e6acc5?apiKey=54911849f61d4333a39b368307a01ae9&"
                                className="object-cover absolute inset-0 size-full"
                              />
                              <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/043cc89ca40731ad2c9f5ab0665dd253068d7513fbd425a6e207dfc30e06a091?apiKey=54911849f61d4333a39b368307a01ae9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/043cc89ca40731ad2c9f5ab0665dd253068d7513fbd425a6e207dfc30e06a091?apiKey=54911849f61d4333a39b368307a01ae9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/043cc89ca40731ad2c9f5ab0665dd253068d7513fbd425a6e207dfc30e06a091?apiKey=54911849f61d4333a39b368307a01ae9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/043cc89ca40731ad2c9f5ab0665dd253068d7513fbd425a6e207dfc30e06a091?apiKey=54911849f61d4333a39b368307a01ae9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/043cc89ca40731ad2c9f5ab0665dd253068d7513fbd425a6e207dfc30e06a091?apiKey=54911849f61d4333a39b368307a01ae9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/043cc89ca40731ad2c9f5ab0665dd253068d7513fbd425a6e207dfc30e06a091?apiKey=54911849f61d4333a39b368307a01ae9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/043cc89ca40731ad2c9f5ab0665dd253068d7513fbd425a6e207dfc30e06a091?apiKey=54911849f61d4333a39b368307a01ae9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/043cc89ca40731ad2c9f5ab0665dd253068d7513fbd425a6e207dfc30e06a091?apiKey=54911849f61d4333a39b368307a01ae9&"
                                className="w-14 aspect-square"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col mt-5 tracking-tight max-md:mt-10">
                              <div className="text-lg font-bold leading-6 text-neutral-900">
                                Project Name
                                <br />
                                Company Name
                              </div>
                              <div className="mt-5 text-sm leading-6 text-black">
                                This is a Project description box to describe
                                the Project. This is also a Company description
                                box to describe the company.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col mt-5 text-sm font-medium max-md:mt-10">
                        <div className="leading-5 text-right text-black">
                          Country
                          <br />
                          Company Address 123
                          <br />
                          Other important information
                          <br />
                          Other important information
                          <br />
                          Other important information
                        </div>
                        <div className="flex flex-col justify-center self-end px-4 py-1.5 mt-16 max-w-full text-white bg-green-500 rounded-xl leading-[150%] w-[120px] max-md:mt-10">
                          <div className="justify-center bg-green-500">
                            View project
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-7 rounded-2xl border border-solid border-black border-opacity-40 max-md:pr-5 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[77%] max-md:ml-0 max-md:w-full">
                      <div className="grow max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8c9f299a63cde203d6b9a285929c0f4384320fe222801066f250d20016d094ea?apiKey=54911849f61d4333a39b368307a01ae9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c9f299a63cde203d6b9a285929c0f4384320fe222801066f250d20016d094ea?apiKey=54911849f61d4333a39b368307a01ae9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c9f299a63cde203d6b9a285929c0f4384320fe222801066f250d20016d094ea?apiKey=54911849f61d4333a39b368307a01ae9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c9f299a63cde203d6b9a285929c0f4384320fe222801066f250d20016d094ea?apiKey=54911849f61d4333a39b368307a01ae9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c9f299a63cde203d6b9a285929c0f4384320fe222801066f250d20016d094ea?apiKey=54911849f61d4333a39b368307a01ae9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c9f299a63cde203d6b9a285929c0f4384320fe222801066f250d20016d094ea?apiKey=54911849f61d4333a39b368307a01ae9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c9f299a63cde203d6b9a285929c0f4384320fe222801066f250d20016d094ea?apiKey=54911849f61d4333a39b368307a01ae9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c9f299a63cde203d6b9a285929c0f4384320fe222801066f250d20016d094ea?apiKey=54911849f61d4333a39b368307a01ae9&"
                              className="grow w-full aspect-[1.2] max-md:mt-7"
                            />
                          </div>
                          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col mt-8 tracking-tight max-md:mt-10">
                              <div className="text-lg font-bold text-neutral-900">
                                Company Name
                              </div>
                              <div className="mt-8 text-sm leading-6 text-black">
                                This is a Company description box to describe
                                the company. This is a Company description box
                                to describe the company. This is a Company
                                description box to describe the company.{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col mt-5 text-sm font-medium max-md:mt-10">
                        <div className="leading-5 text-right text-black">
                          Country
                          <br />
                          Company Address 123
                          <br />
                          Other important information
                          <br />
                          Other important information
                          <br />
                          Other important information
                        </div>
                        <div className="justify-center self-end px-4 py-1.5 mt-16 text-white bg-green-500 rounded-xl leading-[150%] max-md:mt-10">
                          View profile
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

      <FloatingButton />
    </div>
  );
}

export default IndustrySearch;
