import React from "react";

const CountryPage = () => {
  return (
    <div>
      <div className="flex flex-col bg-white">
        <div className="flex gap-5 justify-between items-start pt-2 pr-5 pl-2.5 w-full whitespace-nowrap bg-white max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5 items-start text-base max-md:flex-wrap">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6771175c38fc9684fa95f1761b194e5f3aed4609158f1983f24d867b73e722f1?apiKey=4690be9b285d4165a02febd67a321e8b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6771175c38fc9684fa95f1761b194e5f3aed4609158f1983f24d867b73e722f1?apiKey=4690be9b285d4165a02febd67a321e8b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6771175c38fc9684fa95f1761b194e5f3aed4609158f1983f24d867b73e722f1?apiKey=4690be9b285d4165a02febd67a321e8b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6771175c38fc9684fa95f1761b194e5f3aed4609158f1983f24d867b73e722f1?apiKey=4690be9b285d4165a02febd67a321e8b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6771175c38fc9684fa95f1761b194e5f3aed4609158f1983f24d867b73e722f1?apiKey=4690be9b285d4165a02febd67a321e8b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6771175c38fc9684fa95f1761b194e5f3aed4609158f1983f24d867b73e722f1?apiKey=4690be9b285d4165a02febd67a321e8b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6771175c38fc9684fa95f1761b194e5f3aed4609158f1983f24d867b73e722f1?apiKey=4690be9b285d4165a02febd67a321e8b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6771175c38fc9684fa95f1761b194e5f3aed4609158f1983f24d867b73e722f1?apiKey=4690be9b285d4165a02febd67a321e8b&"
              className="shrink-0 aspect-[1.37] w-[82px]"
            />
            <div className="flex flex-auto gap-3 py-2 pr-3.5 pl-3 mt-1.5 bg-white rounded-lg border border-solid border-neutral-200 max-md:flex-wrap">
              <div className="flex gap-3 my-auto leading-6 text-center text-black">
                <div>COUNTRIES</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/245de0f0c45e9a16d332378bca3d5ff08d50f4cf294ae90ec616490145201c21?apiKey=4690be9b285d4165a02febd67a321e8b&"
                  className="shrink-0 my-auto w-6 aspect-square"
                />
              </div>
              <div className="flex flex-auto gap-3 items-center leading-[150%] max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c193da1201903f8e04b5129e99905ac2c6b3d2a5a84921094bcaf7282591cfc?apiKey=4690be9b285d4165a02febd67a321e8b&"
                  className="shrink-0 self-stretch my-auto w-6 aspect-square"
                />
                <div className="flex-1 self-stretch my-auto text-ellipsis text-zinc-500 max-md:max-w-full">
                  Search
                </div>
                <div className="justify-center self-stretch px-6 py-3.5 font-medium text-white bg-green-700 rounded-3xl shadow-sm max-md:px-5">
                  SEARCH
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-center text-xl font-medium leading-8 text-black">
            <div className="flex gap-0 self-stretch my-auto font-semibold text-right">
              <div className="my-auto">Eng</div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e8f345507d592cc5fa8eb29ab8f4ca6ed3e8123ee16d6b325ff462b61762ec0b?apiKey=4690be9b285d4165a02febd67a321e8b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8f345507d592cc5fa8eb29ab8f4ca6ed3e8123ee16d6b325ff462b61762ec0b?apiKey=4690be9b285d4165a02febd67a321e8b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8f345507d592cc5fa8eb29ab8f4ca6ed3e8123ee16d6b325ff462b61762ec0b?apiKey=4690be9b285d4165a02febd67a321e8b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8f345507d592cc5fa8eb29ab8f4ca6ed3e8123ee16d6b325ff462b61762ec0b?apiKey=4690be9b285d4165a02febd67a321e8b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8f345507d592cc5fa8eb29ab8f4ca6ed3e8123ee16d6b325ff462b61762ec0b?apiKey=4690be9b285d4165a02febd67a321e8b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8f345507d592cc5fa8eb29ab8f4ca6ed3e8123ee16d6b325ff462b61762ec0b?apiKey=4690be9b285d4165a02febd67a321e8b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8f345507d592cc5fa8eb29ab8f4ca6ed3e8123ee16d6b325ff462b61762ec0b?apiKey=4690be9b285d4165a02febd67a321e8b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8f345507d592cc5fa8eb29ab8f4ca6ed3e8123ee16d6b325ff462b61762ec0b?apiKey=4690be9b285d4165a02febd67a321e8b&"
                className="shrink-0 aspect-[1.08] w-[45px]"
              />
            </div>
            <div className="self-stretch my-auto">Signup</div>
            <div className="justify-center self-stretch px-6 py-3.5 text-base text-white bg-green-500 rounded-lg shadow-sm max-md:px-5">
              LOGIN
            </div>
          </div>
        </div>
        <div className="flex gap-2.5 self-end mr-6 text-xl font-medium leading-8 text-black whitespace-nowrap max-md:mr-2.5">
          <div>Countries</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/245de0f0c45e9a16d332378bca3d5ff08d50f4cf294ae90ec616490145201c21?apiKey=4690be9b285d4165a02febd67a321e8b&"
            className="shrink-0 my-auto w-6 aspect-square"
          />
          <div>Industries</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/245de0f0c45e9a16d332378bca3d5ff08d50f4cf294ae90ec616490145201c21?apiKey=4690be9b285d4165a02febd67a321e8b&"
            className="shrink-0 my-auto w-6 aspect-square"
          />
          <div>About</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/245de0f0c45e9a16d332378bca3d5ff08d50f4cf294ae90ec616490145201c21?apiKey=4690be9b285d4165a02febd67a321e8b&"
            className="shrink-0 my-auto w-6 aspect-square"
          />
        </div>
        <div className="flex overflow-hidden relative flex-col items-start px-11 py-7 w-full font-semibold text-white min-h-[327px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/911416bef80496837e9b25d6b511d9564088b752204ce5cb74afe464933aeb33?apiKey=4690be9b285d4165a02febd67a321e8b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/911416bef80496837e9b25d6b511d9564088b752204ce5cb74afe464933aeb33?apiKey=4690be9b285d4165a02febd67a321e8b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/911416bef80496837e9b25d6b511d9564088b752204ce5cb74afe464933aeb33?apiKey=4690be9b285d4165a02febd67a321e8b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/911416bef80496837e9b25d6b511d9564088b752204ce5cb74afe464933aeb33?apiKey=4690be9b285d4165a02febd67a321e8b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/911416bef80496837e9b25d6b511d9564088b752204ce5cb74afe464933aeb33?apiKey=4690be9b285d4165a02febd67a321e8b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/911416bef80496837e9b25d6b511d9564088b752204ce5cb74afe464933aeb33?apiKey=4690be9b285d4165a02febd67a321e8b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/911416bef80496837e9b25d6b511d9564088b752204ce5cb74afe464933aeb33?apiKey=4690be9b285d4165a02febd67a321e8b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/911416bef80496837e9b25d6b511d9564088b752204ce5cb74afe464933aeb33?apiKey=4690be9b285d4165a02febd67a321e8b&"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="relative text-8xl leading-4 max-md:max-w-full max-md:text-4xl">
            Nigeria
          </div>
          <div className="relative mt-16 text-4xl leading-[50px] max-md:mt-10 max-md:max-w-full">
            Unlocking Opportunities in Africa’s Largest Economy
          </div>
        </div>
        <div className="flex flex-col pl-4 w-full max-md:max-w-full">
          <div className="justify-between border-b border-solid border-stone-200 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="grow justify-center items-center self-stretch px-16 pt-4 pb-3.5 text-2xl font-bold tracking-wide leading-5 text-center whitespace-nowrap border-gray-200 border-solid border-b-[3px] text-neutral-900 max-md:px-5 max-md:max-w-full">
                  Overview
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="grow justify-center items-center self-stretch px-16 pt-4 pb-3.5 text-2xl font-bold tracking-wide leading-5 text-center whitespace-nowrap border-gray-200 border-solid border-b-[3px] text-stone-500 max-md:px-5 max-md:max-w-full">
                  Economy
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="grow justify-center items-center self-stretch px-16 pt-4 pb-3.5 text-2xl font-bold tracking-wide leading-5 text-center whitespace-nowrap border-gray-200 border-solid border-b-[3px] text-stone-500 max-md:px-5 max-md:max-w-full">
                  Connectivity
                </div>
              </div>
            </div>
          </div>
          <div className="self-center w-full max-w-[1389px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col mt-9 text-center max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 justify-between items-start max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                    <div className="flex flex-col items-center">
                      <div className="text-2xl font-semibold leading-5 text-stone-500">
                        Land Area
                      </div>
                      <div className="shrink-0 mt-1 h-0.5 border-2 border-solid bg-stone-500 bg-opacity-60 border-stone-500 border-opacity-60 w-[118px]" />
                      <div className="self-stretch mt-11 text-xl leading-5 text-black max-md:mt-10">
                        Nigeria offers a substantial land area of 923,769 square
                        kilometers.
                      </div>
                    </div>
                    <div className="shrink-0 self-end mt-9 w-0.5 border-2 border-solid bg-stone-500 bg-opacity-40 border-stone-500 border-opacity-40 h-[116px]" />
                    <div className="flex flex-col">
                      <div className="self-center text-2xl font-semibold leading-5 text-stone-500">
                        Population
                      </div>
                      <div className="mt-9 text-xl leading-5 text-black">
                        As of 2023, Nigeria’s population of 230.8 million
                        promises a vast consumer base.
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between mt-16 max-md:flex-wrap max-md:mt-10">
                    <div className="flex flex-col items-center">
                      <div className="shrink-0 h-0.5 border-2 border-solid bg-stone-500 bg-opacity-40 border-stone-500 border-opacity-40 w-[116px]" />
                      <div className="mt-14 text-2xl font-semibold leading-5 text-stone-500 max-md:mt-10">
                        GDP
                      </div>
                      <div className="shrink-0 mt-1 h-0.5 border-2 border-solid bg-stone-500 bg-opacity-60 border-stone-500 border-opacity-60 w-[54px]" />
                      <div className="self-stretch mt-8 text-xl leading-5 text-black">
                        Nigeria’s GDP stood at $400 Billion USD in 2022,
                        indicating a significant economic foorprint.
                      </div>
                    </div>
                    <div className="shrink-0 self-end mt-20 w-0.5 border-2 border-solid bg-stone-500 bg-opacity-40 border-stone-500 border-opacity-40 h-[123px] max-md:mt-10" />
                    <div className="flex flex-col items-center self-start">
                      <div className="shrink-0 h-0.5 border-2 border-solid bg-stone-500 bg-opacity-40 border-stone-500 border-opacity-40 w-[116px]" />
                      <div className="mt-14 text-2xl font-semibold leading-5 text-stone-500 max-md:mt-10">
                        Labor Force
                      </div>
                      <div className="shrink-0 mt-1 h-0.5 border-2 border-solid bg-stone-500 bg-opacity-60 border-stone-500 border-opacity-60 w-[140px]" />
                      <div className="self-stretch mt-11 text-xl leading-5 text-black max-md:mt-10">
                        With a labor force of 126 million in 2022, Nigeria
                        boasts a substantial workforce.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c2b812f81f22d8fe2a5c02c762269f6391313cf6a891d6acde5e45cc62968981?apiKey=4690be9b285d4165a02febd67a321e8b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2b812f81f22d8fe2a5c02c762269f6391313cf6a891d6acde5e45cc62968981?apiKey=4690be9b285d4165a02febd67a321e8b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2b812f81f22d8fe2a5c02c762269f6391313cf6a891d6acde5e45cc62968981?apiKey=4690be9b285d4165a02febd67a321e8b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2b812f81f22d8fe2a5c02c762269f6391313cf6a891d6acde5e45cc62968981?apiKey=4690be9b285d4165a02febd67a321e8b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2b812f81f22d8fe2a5c02c762269f6391313cf6a891d6acde5e45cc62968981?apiKey=4690be9b285d4165a02febd67a321e8b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2b812f81f22d8fe2a5c02c762269f6391313cf6a891d6acde5e45cc62968981?apiKey=4690be9b285d4165a02febd67a321e8b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2b812f81f22d8fe2a5c02c762269f6391313cf6a891d6acde5e45cc62968981?apiKey=4690be9b285d4165a02febd67a321e8b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2b812f81f22d8fe2a5c02c762269f6391313cf6a891d6acde5e45cc62968981?apiKey=4690be9b285d4165a02febd67a321e8b&"
                  className="grow w-full aspect-[1.2] max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-16 pt-8 pb-20 w-full font-medium max-md:px-5 max-md:max-w-full">
          <div className="self-start ml-3.5 text-5xl leading-5 text-center text-green-700 max-md:max-w-full max-md:text-4xl">
            LEADING SECTORS
          </div>
          <div className="flex gap-3 py-2 pl-2 mt-14 text-black rounded-3xl bg-stone-300 max-md:flex-wrap max-md:mt-10">
            <div className="flex flex-col pb-6 bg-white rounded-3xl">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dbc497b4672e8e28b9c2b2cb3870a6c95134431ac7c2dbb795e80ceca36f82b5?apiKey=4690be9b285d4165a02febd67a321e8b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbc497b4672e8e28b9c2b2cb3870a6c95134431ac7c2dbb795e80ceca36f82b5?apiKey=4690be9b285d4165a02febd67a321e8b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbc497b4672e8e28b9c2b2cb3870a6c95134431ac7c2dbb795e80ceca36f82b5?apiKey=4690be9b285d4165a02febd67a321e8b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbc497b4672e8e28b9c2b2cb3870a6c95134431ac7c2dbb795e80ceca36f82b5?apiKey=4690be9b285d4165a02febd67a321e8b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbc497b4672e8e28b9c2b2cb3870a6c95134431ac7c2dbb795e80ceca36f82b5?apiKey=4690be9b285d4165a02febd67a321e8b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbc497b4672e8e28b9c2b2cb3870a6c95134431ac7c2dbb795e80ceca36f82b5?apiKey=4690be9b285d4165a02febd67a321e8b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbc497b4672e8e28b9c2b2cb3870a6c95134431ac7c2dbb795e80ceca36f82b5?apiKey=4690be9b285d4165a02febd67a321e8b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbc497b4672e8e28b9c2b2cb3870a6c95134431ac7c2dbb795e80ceca36f82b5?apiKey=4690be9b285d4165a02febd67a321e8b&"
                className="w-full aspect-[2]"
              />
              <div className="mt-3 text-xl leading-5">Agriculture</div>
              <div className="mt-4 text-sm leading-5">
                Agriculture in Africa is the backbone of its economy, employing
                about 60% of the labor force and contributing significantly to
                GDP.
              </div>
            </div>
            <div className="flex flex-col py-1 bg-white rounded-3xl">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f5ca334e9e8bcc53303e50a3dabddd5f922be45c6c2655fb6ae40d8eaf76228b?apiKey=4690be9b285d4165a02febd67a321e8b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5ca334e9e8bcc53303e50a3dabddd5f922be45c6c2655fb6ae40d8eaf76228b?apiKey=4690be9b285d4165a02febd67a321e8b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5ca334e9e8bcc53303e50a3dabddd5f922be45c6c2655fb6ae40d8eaf76228b?apiKey=4690be9b285d4165a02febd67a321e8b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5ca334e9e8bcc53303e50a3dabddd5f922be45c6c2655fb6ae40d8eaf76228b?apiKey=4690be9b285d4165a02febd67a321e8b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5ca334e9e8bcc53303e50a3dabddd5f922be45c6c2655fb6ae40d8eaf76228b?apiKey=4690be9b285d4165a02febd67a321e8b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5ca334e9e8bcc53303e50a3dabddd5f922be45c6c2655fb6ae40d8eaf76228b?apiKey=4690be9b285d4165a02febd67a321e8b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5ca334e9e8bcc53303e50a3dabddd5f922be45c6c2655fb6ae40d8eaf76228b?apiKey=4690be9b285d4165a02febd67a321e8b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5ca334e9e8bcc53303e50a3dabddd5f922be45c6c2655fb6ae40d8eaf76228b?apiKey=4690be9b285d4165a02febd67a321e8b&"
                className="w-full aspect-[2]"
              />
              <div className="mt-3 text-xl leading-5">Manufacture</div>
              <div className="mt-5 text-sm leading-5">
                African manufacturing drives job growth and diversification in
                textiles, food processing, automotive, and electronics with
                infrastructure and tech investments.
              </div>
            </div>
            <div className="flex flex-col pb-6 bg-white rounded-3xl">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/524e6a482e99bddd8abcd375ba43a5a0f5db8b7fd5def1f446db39252046b4d7?apiKey=4690be9b285d4165a02febd67a321e8b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/524e6a482e99bddd8abcd375ba43a5a0f5db8b7fd5def1f446db39252046b4d7?apiKey=4690be9b285d4165a02febd67a321e8b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/524e6a482e99bddd8abcd375ba43a5a0f5db8b7fd5def1f446db39252046b4d7?apiKey=4690be9b285d4165a02febd67a321e8b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/524e6a482e99bddd8abcd375ba43a5a0f5db8b7fd5def1f446db39252046b4d7?apiKey=4690be9b285d4165a02febd67a321e8b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/524e6a482e99bddd8abcd375ba43a5a0f5db8b7fd5def1f446db39252046b4d7?apiKey=4690be9b285d4165a02febd67a321e8b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/524e6a482e99bddd8abcd375ba43a5a0f5db8b7fd5def1f446db39252046b4d7?apiKey=4690be9b285d4165a02febd67a321e8b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/524e6a482e99bddd8abcd375ba43a5a0f5db8b7fd5def1f446db39252046b4d7?apiKey=4690be9b285d4165a02febd67a321e8b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/524e6a482e99bddd8abcd375ba43a5a0f5db8b7fd5def1f446db39252046b4d7?apiKey=4690be9b285d4165a02febd67a321e8b&"
                className="w-full aspect-[2]"
              />
              <div className="mt-3 text-xl leading-5">Services</div>
              <div className="mt-5 text-sm leading-5">
                Services thrive in finance, telecommunication, tourism, tech,
                supported by infrastructure, offering vast opportunities for
                growth.
              </div>
            </div>
            <div className="flex flex-col py-px bg-white rounded-3xl">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0b9fd50fec33cb03bf5f9b6fba889c8f2b23e45ea354f25a667334a0cb54f9ec?apiKey=4690be9b285d4165a02febd67a321e8b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b9fd50fec33cb03bf5f9b6fba889c8f2b23e45ea354f25a667334a0cb54f9ec?apiKey=4690be9b285d4165a02febd67a321e8b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b9fd50fec33cb03bf5f9b6fba889c8f2b23e45ea354f25a667334a0cb54f9ec?apiKey=4690be9b285d4165a02febd67a321e8b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b9fd50fec33cb03bf5f9b6fba889c8f2b23e45ea354f25a667334a0cb54f9ec?apiKey=4690be9b285d4165a02febd67a321e8b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b9fd50fec33cb03bf5f9b6fba889c8f2b23e45ea354f25a667334a0cb54f9ec?apiKey=4690be9b285d4165a02febd67a321e8b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b9fd50fec33cb03bf5f9b6fba889c8f2b23e45ea354f25a667334a0cb54f9ec?apiKey=4690be9b285d4165a02febd67a321e8b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b9fd50fec33cb03bf5f9b6fba889c8f2b23e45ea354f25a667334a0cb54f9ec?apiKey=4690be9b285d4165a02febd67a321e8b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b9fd50fec33cb03bf5f9b6fba889c8f2b23e45ea354f25a667334a0cb54f9ec?apiKey=4690be9b285d4165a02febd67a321e8b&"
                className="w-full aspect-[2]"
              />
              <div className="mt-3 text-xl leading-5">Retail</div>
              <div className="mt-5 text-sm leading-5">
                African retail sector expands, offering growth in consumer
                goods, e-commerce, and brick-and-mortar stores, supported by
                infrastructure and digital advancements.
              </div>
            </div>
            <div className="flex flex-col pb-2.5 text-sm leading-5 bg-white rounded-3xl">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c53ca066f5ddadd9e79d8b386f3ddd9e09ffd7efe18a998658382e39790a741a?apiKey=4690be9b285d4165a02febd67a321e8b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c53ca066f5ddadd9e79d8b386f3ddd9e09ffd7efe18a998658382e39790a741a?apiKey=4690be9b285d4165a02febd67a321e8b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c53ca066f5ddadd9e79d8b386f3ddd9e09ffd7efe18a998658382e39790a741a?apiKey=4690be9b285d4165a02febd67a321e8b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c53ca066f5ddadd9e79d8b386f3ddd9e09ffd7efe18a998658382e39790a741a?apiKey=4690be9b285d4165a02febd67a321e8b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c53ca066f5ddadd9e79d8b386f3ddd9e09ffd7efe18a998658382e39790a741a?apiKey=4690be9b285d4165a02febd67a321e8b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c53ca066f5ddadd9e79d8b386f3ddd9e09ffd7efe18a998658382e39790a741a?apiKey=4690be9b285d4165a02febd67a321e8b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c53ca066f5ddadd9e79d8b386f3ddd9e09ffd7efe18a998658382e39790a741a?apiKey=4690be9b285d4165a02febd67a321e8b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c53ca066f5ddadd9e79d8b386f3ddd9e09ffd7efe18a998658382e39790a741a?apiKey=4690be9b285d4165a02febd67a321e8b&"
                className="self-center aspect-[0.57] w-[100px]"
              />
              <div className="self-start mt-2.5 ml-2.5">
                Africa's ICT sector grows rapidly, enhancing connectivity,
                digital services, and economic opportunities through robust
                infrastructure and tech innovations.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-9 mt-8 w-full max-md:px-5 max-md:max-w-full">
          <div className="self-start ml-14 text-5xl font-medium leading-5 text-center text-green-700 max-md:ml-2.5 max-md:text-4xl">
            WHY NIGERIA?
          </div>
          <div className="px-4 py-2.5 mt-8 max-md:pr-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow pb-14 font-medium text-center text-black max-md:mt-10">
                  <div className="justify-center px-12 py-20 mr-6 ml-7 text-2xl leading-8 rounded-full border-2 border-solid border-yellow-600 border-opacity-60 stroke-[2px] max-md:px-5 max-md:mx-2.5">
                    LARGE CONSUMER MARKET
                  </div>
                  <div className="mt-14 text-xl leading-7 max-md:mt-10">
                    Largest population in Africa. The burgeoning middle class is
                    driving demands for a wide array of products and services.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-4 pb-16 font-medium text-center text-black max-md:mt-10">
                  <div className="justify-center px-12 pt-24 pb-24 text-2xl leading-8 rounded-full border-2 border-solid border-yellow-600 border-opacity-60 stroke-[2px] max-md:px-5">
                    ECONOMIC SIZE
                  </div>
                  <div className="mt-16 text-xl leading-7 max-md:mt-10">
                    Largest economy in Africa, Nigeria offers a substantial
                    market for businesses looking to expand.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-3.5 pb-14 font-medium text-center text-black max-md:mt-10">
                  <div className="justify-center px-11 pt-24 pb-24 text-2xl leading-8 rounded-full border-2 border-solid border-yellow-600 border-opacity-60 stroke-[2px] max-md:px-5">
                    NATURAL RESOURCES
                  </div>
                  <div className="mt-14 text-xl leading-7 max-md:mt-10">
                    The country’s economy thrives on oil and gas, but holds
                    untapped potential in agriculture, minerals, and renewable
                    energy.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-2.5 pb-14 font-medium text-center text-black max-md:mt-10">
                  <div className="justify-center px-12 pt-24 pb-24 mx-4 text-2xl leading-8 rounded-full border-2 border-solid border-yellow-600 border-opacity-60 stroke-[2px] max-md:px-5 max-md:mx-2.5">
                    STRATEGIC LOCATION
                  </div>
                  <div className="mt-14 text-xl leading-7 max-md:mt-10">
                    Situated in the West African coast, Nigeria can serve as an
                    entry point to the African continent and a hub for regional
                    trade.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/419a0f6b355df7f796e171fdc8da7a795490f148d6d6fc7dcb67ddf18a7ced83?apiKey=4690be9b285d4165a02febd67a321e8b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/419a0f6b355df7f796e171fdc8da7a795490f148d6d6fc7dcb67ddf18a7ced83?apiKey=4690be9b285d4165a02febd67a321e8b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/419a0f6b355df7f796e171fdc8da7a795490f148d6d6fc7dcb67ddf18a7ced83?apiKey=4690be9b285d4165a02febd67a321e8b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/419a0f6b355df7f796e171fdc8da7a795490f148d6d6fc7dcb67ddf18a7ced83?apiKey=4690be9b285d4165a02febd67a321e8b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/419a0f6b355df7f796e171fdc8da7a795490f148d6d6fc7dcb67ddf18a7ced83?apiKey=4690be9b285d4165a02febd67a321e8b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/419a0f6b355df7f796e171fdc8da7a795490f148d6d6fc7dcb67ddf18a7ced83?apiKey=4690be9b285d4165a02febd67a321e8b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/419a0f6b355df7f796e171fdc8da7a795490f148d6d6fc7dcb67ddf18a7ced83?apiKey=4690be9b285d4165a02febd67a321e8b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/419a0f6b355df7f796e171fdc8da7a795490f148d6d6fc7dcb67ddf18a7ced83?apiKey=4690be9b285d4165a02febd67a321e8b&"
          className="w-full aspect-[2.78] max-md:max-w-full"
        />
        <div className="flex flex-col items-center px-16 pt-20 pb-12 w-full text-4xl font-medium leading-5 text-center whitespace-nowrap text-stone-500 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col mt-2.5 max-w-full w-[204px]">
            <div>ECONOMY</div>
            <div className="shrink-0 self-center mt-10 border-solid bg-stone-500 border-[3px] border-stone-500 h-[3px] w-[161px]" />
          </div>
        </div>
        <div className="flex flex-col px-16 mt-5 w-full max-md:px-5 max-md:max-w-full">
          <div className="self-start ml-14 text-5xl font-medium leading-5 text-center text-green-700 max-md:ml-2.5 max-md:text-4xl">
            Insights
          </div>
          <div className="flex gap-3 py-2 pl-2 mt-12 rounded-3xl bg-stone-300 max-md:flex-wrap max-md:mt-10">
            <div className="flex flex-col justify-center items-center text-3xl font-bold leading-5 text-center text-white whitespace-nowrap bg-white rounded-3xl aspect-square">
              <div className="flex overflow-hidden relative flex-col pt-20 w-full aspect-square">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/29b9da46d407dbf84213ca256d43245546e943169f15304101736e6f8dec5685?apiKey=4690be9b285d4165a02febd67a321e8b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/29b9da46d407dbf84213ca256d43245546e943169f15304101736e6f8dec5685?apiKey=4690be9b285d4165a02febd67a321e8b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/29b9da46d407dbf84213ca256d43245546e943169f15304101736e6f8dec5685?apiKey=4690be9b285d4165a02febd67a321e8b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/29b9da46d407dbf84213ca256d43245546e943169f15304101736e6f8dec5685?apiKey=4690be9b285d4165a02febd67a321e8b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/29b9da46d407dbf84213ca256d43245546e943169f15304101736e6f8dec5685?apiKey=4690be9b285d4165a02febd67a321e8b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/29b9da46d407dbf84213ca256d43245546e943169f15304101736e6f8dec5685?apiKey=4690be9b285d4165a02febd67a321e8b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/29b9da46d407dbf84213ca256d43245546e943169f15304101736e6f8dec5685?apiKey=4690be9b285d4165a02febd67a321e8b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/29b9da46d407dbf84213ca256d43245546e943169f15304101736e6f8dec5685?apiKey=4690be9b285d4165a02febd67a321e8b&"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative justify-center items-center px-16 py-6 mt-36 bg-black bg-opacity-60 max-md:px-5 max-md:mt-10">
                  GDP
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-3xl font-bold leading-5 text-center text-white bg-white rounded-3xl aspect-square">
              <div className="flex overflow-hidden relative flex-col pt-20 w-full aspect-square">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/da219b15628e961ea03bd5b37233055ac92afed8bda8409789459059c7044ab7?apiKey=4690be9b285d4165a02febd67a321e8b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/da219b15628e961ea03bd5b37233055ac92afed8bda8409789459059c7044ab7?apiKey=4690be9b285d4165a02febd67a321e8b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/da219b15628e961ea03bd5b37233055ac92afed8bda8409789459059c7044ab7?apiKey=4690be9b285d4165a02febd67a321e8b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/da219b15628e961ea03bd5b37233055ac92afed8bda8409789459059c7044ab7?apiKey=4690be9b285d4165a02febd67a321e8b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/da219b15628e961ea03bd5b37233055ac92afed8bda8409789459059c7044ab7?apiKey=4690be9b285d4165a02febd67a321e8b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/da219b15628e961ea03bd5b37233055ac92afed8bda8409789459059c7044ab7?apiKey=4690be9b285d4165a02febd67a321e8b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/da219b15628e961ea03bd5b37233055ac92afed8bda8409789459059c7044ab7?apiKey=4690be9b285d4165a02febd67a321e8b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/da219b15628e961ea03bd5b37233055ac92afed8bda8409789459059c7044ab7?apiKey=4690be9b285d4165a02febd67a321e8b&"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative justify-center px-12 py-6 mt-36 bg-black bg-opacity-60 max-md:px-5 max-md:mt-10">
                  GDP Growth
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-3xl font-bold leading-5 text-center text-white bg-white rounded-3xl aspect-square">
              <div className="flex overflow-hidden relative flex-col pt-20 w-full aspect-square">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7d7376119ed45d74765dadb2d85e0a6983ad88cbbb331d309fe041fb97a97c30?apiKey=4690be9b285d4165a02febd67a321e8b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d7376119ed45d74765dadb2d85e0a6983ad88cbbb331d309fe041fb97a97c30?apiKey=4690be9b285d4165a02febd67a321e8b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d7376119ed45d74765dadb2d85e0a6983ad88cbbb331d309fe041fb97a97c30?apiKey=4690be9b285d4165a02febd67a321e8b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d7376119ed45d74765dadb2d85e0a6983ad88cbbb331d309fe041fb97a97c30?apiKey=4690be9b285d4165a02febd67a321e8b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d7376119ed45d74765dadb2d85e0a6983ad88cbbb331d309fe041fb97a97c30?apiKey=4690be9b285d4165a02febd67a321e8b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d7376119ed45d74765dadb2d85e0a6983ad88cbbb331d309fe041fb97a97c30?apiKey=4690be9b285d4165a02febd67a321e8b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d7376119ed45d74765dadb2d85e0a6983ad88cbbb331d309fe041fb97a97c30?apiKey=4690be9b285d4165a02febd67a321e8b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d7376119ed45d74765dadb2d85e0a6983ad88cbbb331d309fe041fb97a97c30?apiKey=4690be9b285d4165a02febd67a321e8b&"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative justify-center px-7 py-5 mt-36 bg-black bg-opacity-60 max-md:px-5 max-md:mt-10">
                  GDP Per Capita
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-3xl font-bold leading-5 text-center text-white bg-white rounded-3xl aspect-square">
              <div className="flex overflow-hidden relative flex-col pt-20 w-full aspect-square">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b4cb692b1e4bc19f70806f2b65fe081f241be73b86fa981d1c6d86d933b8ce66?apiKey=4690be9b285d4165a02febd67a321e8b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4cb692b1e4bc19f70806f2b65fe081f241be73b86fa981d1c6d86d933b8ce66?apiKey=4690be9b285d4165a02febd67a321e8b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4cb692b1e4bc19f70806f2b65fe081f241be73b86fa981d1c6d86d933b8ce66?apiKey=4690be9b285d4165a02febd67a321e8b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4cb692b1e4bc19f70806f2b65fe081f241be73b86fa981d1c6d86d933b8ce66?apiKey=4690be9b285d4165a02febd67a321e8b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4cb692b1e4bc19f70806f2b65fe081f241be73b86fa981d1c6d86d933b8ce66?apiKey=4690be9b285d4165a02febd67a321e8b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4cb692b1e4bc19f70806f2b65fe081f241be73b86fa981d1c6d86d933b8ce66?apiKey=4690be9b285d4165a02febd67a321e8b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4cb692b1e4bc19f70806f2b65fe081f241be73b86fa981d1c6d86d933b8ce66?apiKey=4690be9b285d4165a02febd67a321e8b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4cb692b1e4bc19f70806f2b65fe081f241be73b86fa981d1c6d86d933b8ce66?apiKey=4690be9b285d4165a02febd67a321e8b&"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative justify-center px-10 py-6 mt-36 bg-black bg-opacity-60 max-md:px-5 max-md:mt-10">
                  FDI Net Inflow
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center bg-white rounded-3xl">
              <div className="flex overflow-hidden relative flex-col pt-20 aspect-[0.34] w-[100px]">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b7afb185b8c23b59aad4eda3fb966625fae21629c6e046495933671f37fdda4a?apiKey=4690be9b285d4165a02febd67a321e8b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7afb185b8c23b59aad4eda3fb966625fae21629c6e046495933671f37fdda4a?apiKey=4690be9b285d4165a02febd67a321e8b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7afb185b8c23b59aad4eda3fb966625fae21629c6e046495933671f37fdda4a?apiKey=4690be9b285d4165a02febd67a321e8b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7afb185b8c23b59aad4eda3fb966625fae21629c6e046495933671f37fdda4a?apiKey=4690be9b285d4165a02febd67a321e8b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7afb185b8c23b59aad4eda3fb966625fae21629c6e046495933671f37fdda4a?apiKey=4690be9b285d4165a02febd67a321e8b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7afb185b8c23b59aad4eda3fb966625fae21629c6e046495933671f37fdda4a?apiKey=4690be9b285d4165a02febd67a321e8b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7afb185b8c23b59aad4eda3fb966625fae21629c6e046495933671f37fdda4a?apiKey=4690be9b285d4165a02febd67a321e8b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7afb185b8c23b59aad4eda3fb966625fae21629c6e046495933671f37fdda4a?apiKey=4690be9b285d4165a02febd67a321e8b&"
                  className="object-cover absolute inset-0 size-full"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0223cc4aa0f8df7ee1b5d6d1a44beb51d18807306d6f1738a7d3a2e132573972?apiKey=4690be9b285d4165a02febd67a321e8b&"
                  className="self-end mt-8 aspect-square w-[65px]"
                />
                <div className="relative shrink-0 mt-11 bg-black bg-opacity-60 h-[70px] max-md:mt-10" />
              </div>
            </div>
          </div>
          <div className="self-start mt-20 ml-7 text-5xl font-medium leading-10 text-center text-green-700 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            Distribution of GDP Across Economic Sectors
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cce1f2f33965397e3cc6dc274756f2a5794948f6f36e1cef083ddb4c1d4a6328?apiKey=4690be9b285d4165a02febd67a321e8b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cce1f2f33965397e3cc6dc274756f2a5794948f6f36e1cef083ddb4c1d4a6328?apiKey=4690be9b285d4165a02febd67a321e8b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cce1f2f33965397e3cc6dc274756f2a5794948f6f36e1cef083ddb4c1d4a6328?apiKey=4690be9b285d4165a02febd67a321e8b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cce1f2f33965397e3cc6dc274756f2a5794948f6f36e1cef083ddb4c1d4a6328?apiKey=4690be9b285d4165a02febd67a321e8b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cce1f2f33965397e3cc6dc274756f2a5794948f6f36e1cef083ddb4c1d4a6328?apiKey=4690be9b285d4165a02febd67a321e8b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cce1f2f33965397e3cc6dc274756f2a5794948f6f36e1cef083ddb4c1d4a6328?apiKey=4690be9b285d4165a02febd67a321e8b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cce1f2f33965397e3cc6dc274756f2a5794948f6f36e1cef083ddb4c1d4a6328?apiKey=4690be9b285d4165a02febd67a321e8b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cce1f2f33965397e3cc6dc274756f2a5794948f6f36e1cef083ddb4c1d4a6328?apiKey=4690be9b285d4165a02febd67a321e8b&"
            className="self-center mt-7 w-full aspect-[1.89] max-w-[1160px] max-md:max-w-full"
          />
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ebee8bf95851d2de281e777bad2bd6aeaf7d90bd22ffc33b343363b9d97aa9b2?apiKey=4690be9b285d4165a02febd67a321e8b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ebee8bf95851d2de281e777bad2bd6aeaf7d90bd22ffc33b343363b9d97aa9b2?apiKey=4690be9b285d4165a02febd67a321e8b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ebee8bf95851d2de281e777bad2bd6aeaf7d90bd22ffc33b343363b9d97aa9b2?apiKey=4690be9b285d4165a02febd67a321e8b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ebee8bf95851d2de281e777bad2bd6aeaf7d90bd22ffc33b343363b9d97aa9b2?apiKey=4690be9b285d4165a02febd67a321e8b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ebee8bf95851d2de281e777bad2bd6aeaf7d90bd22ffc33b343363b9d97aa9b2?apiKey=4690be9b285d4165a02febd67a321e8b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ebee8bf95851d2de281e777bad2bd6aeaf7d90bd22ffc33b343363b9d97aa9b2?apiKey=4690be9b285d4165a02febd67a321e8b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ebee8bf95851d2de281e777bad2bd6aeaf7d90bd22ffc33b343363b9d97aa9b2?apiKey=4690be9b285d4165a02febd67a321e8b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ebee8bf95851d2de281e777bad2bd6aeaf7d90bd22ffc33b343363b9d97aa9b2?apiKey=4690be9b285d4165a02febd67a321e8b&"
          className="mt-3 w-full aspect-[1.79] max-md:max-w-full"
        />
        <div className="self-start mt-14 ml-28 text-5xl font-medium leading-5 text-center text-green-700 max-md:mt-10 max-md:ml-2.5 max-md:text-4xl">
          Major Imports
        </div>
        <div className="flex z-10 gap-0 justify-between self-center px-4 py-2.5 mt-14 font-medium text-center text-black max-md:flex-wrap max-md:pr-5 max-md:mt-10">
          <div className="flex flex-col px-7 pb-9 max-md:px-5">
            <div className="justify-center px-12 pt-24 pb-24 text-4xl leading-8 rounded-full border-2 border-solid border-yellow-600 border-opacity-60 stroke-[2px] max-md:px-5">
              $ 11.3 B
            </div>
            <div className="self-center mt-8 text-xl leading-7">
              Refined Petroleum
            </div>
          </div>
          <div className="flex flex-col px-7 pb-9 max-md:px-5">
            <div className="justify-center px-10 pt-24 pb-24 text-4xl leading-8 rounded-full border-2 border-solid border-yellow-600 border-opacity-60 stroke-[2px] max-md:px-5">
              $ 3.32 B
            </div>
            <div className="self-center mt-8 text-xl leading-7">Wheat</div>
          </div>
          <div className="flex flex-col px-7 pb-9 max-md:px-5">
            <div className="justify-center px-10 pt-24 pb-24 text-4xl leading-8 rounded-full border-2 border-solid border-yellow-600 border-opacity-60 stroke-[2px] max-md:px-5">
              $ 2.42 B
            </div>
            <div className="self-center mt-8 text-xl leading-7">Cars</div>
          </div>
          <div className="flex flex-col px-7 pb-8 max-md:px-5">
            <div className="justify-center px-10 pt-24 pb-24 text-4xl leading-8 rounded-full border-2 border-solid border-yellow-600 border-opacity-60 stroke-[2px] max-md:px-5">
              $ 972 M
            </div>
            <div className="mt-8 text-xl leading-7">Packaged medicaments</div>
          </div>
          <div className="flex flex-col px-6 pb-8 max-md:px-5">
            <div className="justify-center px-10 pt-24 pb-24 text-4xl leading-8 rounded-full border-2 border-solid border-yellow-600 border-opacity-60 stroke-[2px] max-md:px-5">
              $ 934 M
            </div>
            <div className="mt-8 text-xl leading-7">
              Broadcasting instuments
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/036995fd56e71b7213bea9005e7d2b25e70dedb847c883f4479e2b7bc2b04043?apiKey=4690be9b285d4165a02febd67a321e8b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/036995fd56e71b7213bea9005e7d2b25e70dedb847c883f4479e2b7bc2b04043?apiKey=4690be9b285d4165a02febd67a321e8b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/036995fd56e71b7213bea9005e7d2b25e70dedb847c883f4479e2b7bc2b04043?apiKey=4690be9b285d4165a02febd67a321e8b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/036995fd56e71b7213bea9005e7d2b25e70dedb847c883f4479e2b7bc2b04043?apiKey=4690be9b285d4165a02febd67a321e8b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/036995fd56e71b7213bea9005e7d2b25e70dedb847c883f4479e2b7bc2b04043?apiKey=4690be9b285d4165a02febd67a321e8b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/036995fd56e71b7213bea9005e7d2b25e70dedb847c883f4479e2b7bc2b04043?apiKey=4690be9b285d4165a02febd67a321e8b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/036995fd56e71b7213bea9005e7d2b25e70dedb847c883f4479e2b7bc2b04043?apiKey=4690be9b285d4165a02febd67a321e8b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/036995fd56e71b7213bea9005e7d2b25e70dedb847c883f4479e2b7bc2b04043?apiKey=4690be9b285d4165a02febd67a321e8b&"
          className="self-center mt-0 max-w-full aspect-[1.67] w-[969px]"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f48c56706ae3dbeb6e4834c73435df3c061293b6ea361ec20fa716be8cb1ee17?apiKey=4690be9b285d4165a02febd67a321e8b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f48c56706ae3dbeb6e4834c73435df3c061293b6ea361ec20fa716be8cb1ee17?apiKey=4690be9b285d4165a02febd67a321e8b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f48c56706ae3dbeb6e4834c73435df3c061293b6ea361ec20fa716be8cb1ee17?apiKey=4690be9b285d4165a02febd67a321e8b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f48c56706ae3dbeb6e4834c73435df3c061293b6ea361ec20fa716be8cb1ee17?apiKey=4690be9b285d4165a02febd67a321e8b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f48c56706ae3dbeb6e4834c73435df3c061293b6ea361ec20fa716be8cb1ee17?apiKey=4690be9b285d4165a02febd67a321e8b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f48c56706ae3dbeb6e4834c73435df3c061293b6ea361ec20fa716be8cb1ee17?apiKey=4690be9b285d4165a02febd67a321e8b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f48c56706ae3dbeb6e4834c73435df3c061293b6ea361ec20fa716be8cb1ee17?apiKey=4690be9b285d4165a02febd67a321e8b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f48c56706ae3dbeb6e4834c73435df3c061293b6ea361ec20fa716be8cb1ee17?apiKey=4690be9b285d4165a02febd67a321e8b&"
          className="mt-5 w-full aspect-[3.03] max-md:max-w-full"
        />
        <div className="self-start mt-14 ml-32 text-5xl font-medium leading-5 text-center text-green-700 max-md:mt-10 max-md:ml-2.5 max-md:text-4xl">
          Major Export
        </div>
        <div className="flex gap-0 justify-between self-center px-4 py-2.5 mt-4 font-medium text-center text-black max-md:flex-wrap max-md:pr-5">
          <div className="flex flex-col px-7 pb-9 max-md:px-5">
            <div className="justify-center px-11 pt-24 pb-24 text-4xl leading-8 rounded-full border-2 border-solid border-yellow-600 border-opacity-60 stroke-[2px] max-md:px-5">
              $ 41.8 B
            </div>
            <div className="self-center mt-8 text-xl leading-7">
              Crude Petroleum
            </div>
          </div>
          <div className="flex flex-col px-7 pb-9 max-md:px-5">
            <div className="justify-center px-10 pt-24 pb-24 text-4xl leading-8 rounded-full border-2 border-solid border-yellow-600 border-opacity-60 stroke-[2px] max-md:px-5">
              $ 8.52 B
            </div>
            <div className="self-center mt-8 text-xl leading-7">
              Petroleum Gas
            </div>
          </div>
          <div className="flex flex-col px-7 pb-8 max-md:px-5">
            <div className="justify-center px-11 pt-24 pb-24 text-4xl leading-8 rounded-full border-2 border-solid border-yellow-600 border-opacity-60 stroke-[2px] max-md:px-5">
              $ 1.25 B
            </div>
            <div className="mt-8 text-xl leading-7">Special Purpose Ships</div>
          </div>
          <div className="flex flex-col px-7 pb-9 max-md:px-5">
            <div className="justify-center px-10 pt-24 pb-24 text-4xl leading-8 rounded-full border-2 border-solid border-yellow-600 border-opacity-60 stroke-[2px] max-md:px-5">
              $ 779 M
            </div>
            <div className="self-center mt-8 text-xl leading-7">
              Cocoa Beans
            </div>
          </div>
          <div className="flex flex-col px-7 pb-9 max-md:px-5">
            <div className="justify-center px-10 pt-24 pb-24 text-4xl leading-8 rounded-full border-2 border-solid border-yellow-600 border-opacity-60 stroke-[2px] max-md:px-5">
              $ 667 M
            </div>
            <div className="self-center mt-8 text-xl leading-7">
              Refined Petroleum
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3bf7b0473ec332e9e8051c3f3d3149f94b146551808f9c881b60202e3290b095?apiKey=4690be9b285d4165a02febd67a321e8b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bf7b0473ec332e9e8051c3f3d3149f94b146551808f9c881b60202e3290b095?apiKey=4690be9b285d4165a02febd67a321e8b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bf7b0473ec332e9e8051c3f3d3149f94b146551808f9c881b60202e3290b095?apiKey=4690be9b285d4165a02febd67a321e8b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bf7b0473ec332e9e8051c3f3d3149f94b146551808f9c881b60202e3290b095?apiKey=4690be9b285d4165a02febd67a321e8b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bf7b0473ec332e9e8051c3f3d3149f94b146551808f9c881b60202e3290b095?apiKey=4690be9b285d4165a02febd67a321e8b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bf7b0473ec332e9e8051c3f3d3149f94b146551808f9c881b60202e3290b095?apiKey=4690be9b285d4165a02febd67a321e8b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bf7b0473ec332e9e8051c3f3d3149f94b146551808f9c881b60202e3290b095?apiKey=4690be9b285d4165a02febd67a321e8b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bf7b0473ec332e9e8051c3f3d3149f94b146551808f9c881b60202e3290b095?apiKey=4690be9b285d4165a02febd67a321e8b&"
          className="self-center mt-3.5 max-w-full aspect-[1.67] w-[969px]"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b2bfb1286577513df73880ed28f942e0b79a19e54c095a5795a7c642342d58b0?apiKey=4690be9b285d4165a02febd67a321e8b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2bfb1286577513df73880ed28f942e0b79a19e54c095a5795a7c642342d58b0?apiKey=4690be9b285d4165a02febd67a321e8b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2bfb1286577513df73880ed28f942e0b79a19e54c095a5795a7c642342d58b0?apiKey=4690be9b285d4165a02febd67a321e8b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2bfb1286577513df73880ed28f942e0b79a19e54c095a5795a7c642342d58b0?apiKey=4690be9b285d4165a02febd67a321e8b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2bfb1286577513df73880ed28f942e0b79a19e54c095a5795a7c642342d58b0?apiKey=4690be9b285d4165a02febd67a321e8b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2bfb1286577513df73880ed28f942e0b79a19e54c095a5795a7c642342d58b0?apiKey=4690be9b285d4165a02febd67a321e8b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2bfb1286577513df73880ed28f942e0b79a19e54c095a5795a7c642342d58b0?apiKey=4690be9b285d4165a02febd67a321e8b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2bfb1286577513df73880ed28f942e0b79a19e54c095a5795a7c642342d58b0?apiKey=4690be9b285d4165a02febd67a321e8b&"
          className="mt-16 w-full aspect-[1.52] max-md:mt-10 max-md:max-w-full"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8e8df6367eab23942603a2b509f529087ea1d4dfa924ef56e8eb54cb98b0fc82?apiKey=4690be9b285d4165a02febd67a321e8b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e8df6367eab23942603a2b509f529087ea1d4dfa924ef56e8eb54cb98b0fc82?apiKey=4690be9b285d4165a02febd67a321e8b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e8df6367eab23942603a2b509f529087ea1d4dfa924ef56e8eb54cb98b0fc82?apiKey=4690be9b285d4165a02febd67a321e8b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e8df6367eab23942603a2b509f529087ea1d4dfa924ef56e8eb54cb98b0fc82?apiKey=4690be9b285d4165a02febd67a321e8b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e8df6367eab23942603a2b509f529087ea1d4dfa924ef56e8eb54cb98b0fc82?apiKey=4690be9b285d4165a02febd67a321e8b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e8df6367eab23942603a2b509f529087ea1d4dfa924ef56e8eb54cb98b0fc82?apiKey=4690be9b285d4165a02febd67a321e8b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e8df6367eab23942603a2b509f529087ea1d4dfa924ef56e8eb54cb98b0fc82?apiKey=4690be9b285d4165a02febd67a321e8b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e8df6367eab23942603a2b509f529087ea1d4dfa924ef56e8eb54cb98b0fc82?apiKey=4690be9b285d4165a02febd67a321e8b&"
          className="w-full aspect-[9.09] max-md:max-w-full"
        />
        <div className="flex flex-col items-center px-16 pt-20 pb-12 w-full text-4xl font-medium leading-5 text-center whitespace-nowrap text-stone-500 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col mt-2.5 max-w-full w-[239px]">
            <div>Connectivity</div>
            <div className="shrink-0 self-center mt-8 border-solid bg-stone-500 border-[3px] border-stone-500 h-[3px] w-[161px]" />
          </div>
        </div>
        <div className="flex flex-col self-center px-5 mt-5 w-full text-5xl font-medium leading-5 text-center text-green-700 max-w-[1215px] max-md:max-w-full max-md:text-4xl">
          <div className="max-md:max-w-full max-md:text-4xl">
            Airports & Seaports
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4ed9973e2010ee649d30e04e91c2d4d95dff54a2412387c6029965e776bb0b9a?apiKey=4690be9b285d4165a02febd67a321e8b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ed9973e2010ee649d30e04e91c2d4d95dff54a2412387c6029965e776bb0b9a?apiKey=4690be9b285d4165a02febd67a321e8b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ed9973e2010ee649d30e04e91c2d4d95dff54a2412387c6029965e776bb0b9a?apiKey=4690be9b285d4165a02febd67a321e8b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ed9973e2010ee649d30e04e91c2d4d95dff54a2412387c6029965e776bb0b9a?apiKey=4690be9b285d4165a02febd67a321e8b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ed9973e2010ee649d30e04e91c2d4d95dff54a2412387c6029965e776bb0b9a?apiKey=4690be9b285d4165a02febd67a321e8b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ed9973e2010ee649d30e04e91c2d4d95dff54a2412387c6029965e776bb0b9a?apiKey=4690be9b285d4165a02febd67a321e8b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ed9973e2010ee649d30e04e91c2d4d95dff54a2412387c6029965e776bb0b9a?apiKey=4690be9b285d4165a02febd67a321e8b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ed9973e2010ee649d30e04e91c2d4d95dff54a2412387c6029965e776bb0b9a?apiKey=4690be9b285d4165a02febd67a321e8b&"
            className="self-end mt-5 max-w-full aspect-[1.79] w-[830px]"
          />
        </div>
        <div className="flex z-10 flex-col px-16 w-full max-md:px-5 max-md:max-w-full">
          <div className="self-start ml-8 text-5xl font-medium leading-5 text-center text-green-700 max-md:max-w-full max-md:text-4xl">
            Nigeria’s standing in Africa
          </div>
          <div className="flex gap-3 py-2 pl-2 mt-12 rounded-3xl bg-stone-300 max-md:flex-wrap max-md:mt-10">
            <div className="flex flex-col justify-center items-center text-3xl font-bold leading-8 text-center text-white bg-white rounded-3xl aspect-square">
              <div className="flex overflow-hidden relative flex-col pt-20 w-full aspect-square">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/29b9da46d407dbf84213ca256d43245546e943169f15304101736e6f8dec5685?apiKey=4690be9b285d4165a02febd67a321e8b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/29b9da46d407dbf84213ca256d43245546e943169f15304101736e6f8dec5685?apiKey=4690be9b285d4165a02febd67a321e8b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/29b9da46d407dbf84213ca256d43245546e943169f15304101736e6f8dec5685?apiKey=4690be9b285d4165a02febd67a321e8b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/29b9da46d407dbf84213ca256d43245546e943169f15304101736e6f8dec5685?apiKey=4690be9b285d4165a02febd67a321e8b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/29b9da46d407dbf84213ca256d43245546e943169f15304101736e6f8dec5685?apiKey=4690be9b285d4165a02febd67a321e8b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/29b9da46d407dbf84213ca256d43245546e943169f15304101736e6f8dec5685?apiKey=4690be9b285d4165a02febd67a321e8b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/29b9da46d407dbf84213ca256d43245546e943169f15304101736e6f8dec5685?apiKey=4690be9b285d4165a02febd67a321e8b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/29b9da46d407dbf84213ca256d43245546e943169f15304101736e6f8dec5685?apiKey=4690be9b285d4165a02febd67a321e8b&"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative px-4 pt-3 mt-36 bg-black bg-opacity-60 max-md:mt-10">
                  GDP Growth rate in African Countries in 2021
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-3xl font-bold leading-8 text-center text-white bg-white rounded-3xl aspect-square">
              <div className="flex overflow-hidden relative flex-col pt-20 w-full aspect-square">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/da219b15628e961ea03bd5b37233055ac92afed8bda8409789459059c7044ab7?apiKey=4690be9b285d4165a02febd67a321e8b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/da219b15628e961ea03bd5b37233055ac92afed8bda8409789459059c7044ab7?apiKey=4690be9b285d4165a02febd67a321e8b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/da219b15628e961ea03bd5b37233055ac92afed8bda8409789459059c7044ab7?apiKey=4690be9b285d4165a02febd67a321e8b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/da219b15628e961ea03bd5b37233055ac92afed8bda8409789459059c7044ab7?apiKey=4690be9b285d4165a02febd67a321e8b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/da219b15628e961ea03bd5b37233055ac92afed8bda8409789459059c7044ab7?apiKey=4690be9b285d4165a02febd67a321e8b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/da219b15628e961ea03bd5b37233055ac92afed8bda8409789459059c7044ab7?apiKey=4690be9b285d4165a02febd67a321e8b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/da219b15628e961ea03bd5b37233055ac92afed8bda8409789459059c7044ab7?apiKey=4690be9b285d4165a02febd67a321e8b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/da219b15628e961ea03bd5b37233055ac92afed8bda8409789459059c7044ab7?apiKey=4690be9b285d4165a02febd67a321e8b&"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative px-8 pt-3 mt-36 bg-black bg-opacity-60 max-md:px-5 max-md:mt-10">
                  African Countries with highest GDPs, 2021
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-3xl font-bold leading-8 text-center text-white bg-white rounded-3xl aspect-square">
              <div className="flex overflow-hidden relative flex-col pt-20 w-full aspect-square">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7d7376119ed45d74765dadb2d85e0a6983ad88cbbb331d309fe041fb97a97c30?apiKey=4690be9b285d4165a02febd67a321e8b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d7376119ed45d74765dadb2d85e0a6983ad88cbbb331d309fe041fb97a97c30?apiKey=4690be9b285d4165a02febd67a321e8b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d7376119ed45d74765dadb2d85e0a6983ad88cbbb331d309fe041fb97a97c30?apiKey=4690be9b285d4165a02febd67a321e8b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d7376119ed45d74765dadb2d85e0a6983ad88cbbb331d309fe041fb97a97c30?apiKey=4690be9b285d4165a02febd67a321e8b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d7376119ed45d74765dadb2d85e0a6983ad88cbbb331d309fe041fb97a97c30?apiKey=4690be9b285d4165a02febd67a321e8b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d7376119ed45d74765dadb2d85e0a6983ad88cbbb331d309fe041fb97a97c30?apiKey=4690be9b285d4165a02febd67a321e8b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d7376119ed45d74765dadb2d85e0a6983ad88cbbb331d309fe041fb97a97c30?apiKey=4690be9b285d4165a02febd67a321e8b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d7376119ed45d74765dadb2d85e0a6983ad88cbbb331d309fe041fb97a97c30?apiKey=4690be9b285d4165a02febd67a321e8b&"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative px-8 pt-3.5 mt-36 bg-black bg-opacity-60 max-md:px-5 max-md:mt-10">
                  Highest Per Capita GDPs in
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-3xl font-bold leading-8 text-center text-white bg-white rounded-3xl aspect-square">
              <div className="flex overflow-hidden relative flex-col pt-20 w-full aspect-square">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b4cb692b1e4bc19f70806f2b65fe081f241be73b86fa981d1c6d86d933b8ce66?apiKey=4690be9b285d4165a02febd67a321e8b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4cb692b1e4bc19f70806f2b65fe081f241be73b86fa981d1c6d86d933b8ce66?apiKey=4690be9b285d4165a02febd67a321e8b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4cb692b1e4bc19f70806f2b65fe081f241be73b86fa981d1c6d86d933b8ce66?apiKey=4690be9b285d4165a02febd67a321e8b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4cb692b1e4bc19f70806f2b65fe081f241be73b86fa981d1c6d86d933b8ce66?apiKey=4690be9b285d4165a02febd67a321e8b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4cb692b1e4bc19f70806f2b65fe081f241be73b86fa981d1c6d86d933b8ce66?apiKey=4690be9b285d4165a02febd67a321e8b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4cb692b1e4bc19f70806f2b65fe081f241be73b86fa981d1c6d86d933b8ce66?apiKey=4690be9b285d4165a02febd67a321e8b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4cb692b1e4bc19f70806f2b65fe081f241be73b86fa981d1c6d86d933b8ce66?apiKey=4690be9b285d4165a02febd67a321e8b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4cb692b1e4bc19f70806f2b65fe081f241be73b86fa981d1c6d86d933b8ce66?apiKey=4690be9b285d4165a02febd67a321e8b&"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative justify-center px-5 py-1.5 mt-36 bg-black bg-opacity-60 max-md:mt-10">
                  FDI Net Inflow in Africa, 2022
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center bg-white rounded-3xl">
              <div className="flex overflow-hidden relative flex-col pt-20 aspect-[0.34] w-[100px]">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b7afb185b8c23b59aad4eda3fb966625fae21629c6e046495933671f37fdda4a?apiKey=4690be9b285d4165a02febd67a321e8b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7afb185b8c23b59aad4eda3fb966625fae21629c6e046495933671f37fdda4a?apiKey=4690be9b285d4165a02febd67a321e8b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7afb185b8c23b59aad4eda3fb966625fae21629c6e046495933671f37fdda4a?apiKey=4690be9b285d4165a02febd67a321e8b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7afb185b8c23b59aad4eda3fb966625fae21629c6e046495933671f37fdda4a?apiKey=4690be9b285d4165a02febd67a321e8b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7afb185b8c23b59aad4eda3fb966625fae21629c6e046495933671f37fdda4a?apiKey=4690be9b285d4165a02febd67a321e8b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7afb185b8c23b59aad4eda3fb966625fae21629c6e046495933671f37fdda4a?apiKey=4690be9b285d4165a02febd67a321e8b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7afb185b8c23b59aad4eda3fb966625fae21629c6e046495933671f37fdda4a?apiKey=4690be9b285d4165a02febd67a321e8b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7afb185b8c23b59aad4eda3fb966625fae21629c6e046495933671f37fdda4a?apiKey=4690be9b285d4165a02febd67a321e8b&"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative shrink-0 mt-36 bg-black bg-opacity-60 h-[70px] max-md:mt-10" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 mt-20 w-full text-2xl font-semibold leading-9 text-white min-h-[480px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d9924c1e2c5fa68445151154536d84f1195de9d724f43ca8f2ba58c7efc931c8?apiKey=4690be9b285d4165a02febd67a321e8b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9924c1e2c5fa68445151154536d84f1195de9d724f43ca8f2ba58c7efc931c8?apiKey=4690be9b285d4165a02febd67a321e8b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9924c1e2c5fa68445151154536d84f1195de9d724f43ca8f2ba58c7efc931c8?apiKey=4690be9b285d4165a02febd67a321e8b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9924c1e2c5fa68445151154536d84f1195de9d724f43ca8f2ba58c7efc931c8?apiKey=4690be9b285d4165a02febd67a321e8b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9924c1e2c5fa68445151154536d84f1195de9d724f43ca8f2ba58c7efc931c8?apiKey=4690be9b285d4165a02febd67a321e8b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9924c1e2c5fa68445151154536d84f1195de9d724f43ca8f2ba58c7efc931c8?apiKey=4690be9b285d4165a02febd67a321e8b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9924c1e2c5fa68445151154536d84f1195de9d724f43ca8f2ba58c7efc931c8?apiKey=4690be9b285d4165a02febd67a321e8b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9924c1e2c5fa68445151154536d84f1195de9d724f43ca8f2ba58c7efc931c8?apiKey=4690be9b285d4165a02febd67a321e8b&"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-col items-center mt-12 max-w-full w-[516px] max-md:mt-10">
            <div className="text-6xl tracking-tighter text-center max-md:text-4xl">
              CONTACT US
            </div>
            <div className="self-stretch mt-14 tracking-tight text-center max-md:mt-10 max-md:max-w-full">
              Partner with us to build Prosperity for Nigeria.
            </div>
            <div className="justify-center px-6 py-3.5 mt-12 font-medium whitespace-nowrap rounded-lg shadow-sm bg-zinc-500 max-md:px-5 max-md:mt-10">
              CONTACT
            </div>
          </div>
        </div>
        <div className="flex gap-5 px-10 py-2.5 w-full text-lg bg-green-700 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between font-medium text-white whitespace-nowrap">
            <div className="flex flex-col px-3 py-2.5">
              <div className="flex gap-5 justify-between">
                <div className="shrink-0 rounded-full bg-neutral-200 h-[50px] w-[50px]" />
                <div className="my-auto">Facebook</div>
              </div>
              <div className="flex gap-5 justify-between mt-2.5">
                <div className="shrink-0 rounded-full bg-neutral-200 h-[50px] w-[50px]" />
                <div className="my-auto">Instagram</div>
              </div>
              <div className="flex gap-5 justify-between mt-2.5">
                <div className="shrink-0 rounded-full bg-neutral-200 h-[50px] w-[50px]" />
                <div className="my-auto">X</div>
              </div>
              <div className="flex gap-5 justify-between mt-2.5">
                <div className="shrink-0 rounded-full bg-neutral-200 h-[50px] w-[50px]" />
                <div className="my-auto">YouTube</div>
              </div>
            </div>
            <div className="shrink-0 my-auto w-0.5 bg-white border border-white border-solid h-[200px]" />
          </div>
          <div className="flex-auto my-auto font-bold text-right text-yellow-400 max-md:max-w-full">
            Adam Innovations Co., Ltd
            <br />
            <span className="font-medium">
              Global IT Park1188-2, Urusa, Minami
            </span>
            <br />
            <span className="font-medium">UonumaNiigata 9497302 Japan</span>
            <br />
            <span className="font-medium">Tel: (+81)25-788-0665</span>
            <br />
            <span className="font-medium">Email:info@adam-i.jp</span>
            <br />
            <span className="text-xl font-medium text-yellow-400">
              Copyright ©2023 Invest Africa. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
