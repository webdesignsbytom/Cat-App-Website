import React from 'react';
// Analytics
import { usePageTracking } from '../../hooks/useAnalytics';
// Constants
import { CompanyName } from '../../utils/Constants';
// Components
import { HelmetItem } from '../../components/utils/HelmetItem';
// Data
import {
  homePageAdditionalMeta,
  homePageStructuredData,
} from '../../utils/data/MetaData';
// Images
import CatLogoSvg from '../../assets/images/logos/cat-app-main-logo-svg.svg';
import CatTextLogoSvg from '../../assets/images/logos/cat-app-text-svg.svg';
// Icons
import { FaStar } from 'react-icons/fa';
import { FaQuestion } from 'react-icons/fa';

const HomePage = React.memo(() => {
  usePageTracking(); // Tracks page views

  return (
    <>
      {/* Tab Data */}
      <HelmetItem
        PageName='Home'
        desc={`${CompanyName} - Your ultimate destination for cute cat videos, fun games, and exclusive feline content.`}
        keywords='cat videos, cute cats, cat games, feline fun, cat content'
        additionalMeta={homePageAdditionalMeta}
        structuredData={homePageStructuredData}
      />

      {/* Page */}
      <div className='grid min-h-screen w-full h-full'>
        <header className='grid w-full h-full min-h-screen lg:max-h-screen lg:overflow-hidden bg-black px-1 py-1'>
          <div className='bg-colour2 rounded-2xl px-6 py-6'>
            <section className='relative grid h-full w-full items-center justify-center bg-colour1 rounded-2xl shadow-cardShadow'>

              <section className='absolute top-[63vh] left-1/2 transform -translate-x-1/2 lg:top-1/2 lg:left-8 lg:rotate-90 h-fit'>
                <ul className='grid justify-center mx-auto text-center lg:grid-flow-col lg:gap-8 text-lg lg:text-2xl h-fit tracking-widest font-atop w-full'>
                  <li title='Videos' className='text__stroke !text-colour2'>
                    Videos
                  </li>
                  <li title='Games' className='text__stroke !text-colour2'>
                    Games
                  </li>
                  <li title='Pictures' className='text__stroke !text-colour2'>
                    Pictures
                  </li>
                </ul>
              </section>

              <section className='absolute grid top-4 lg:top-6 right-4 lg:right-8'>
                <article className='grid grid-flow-col gap-4'>
                  <div className='hidden md:grid items-center'>
                    <h4 className='bg-colour2 text-black font-atop px-6 py-1 rounded-full shadow-cardShadow'>
                      Sponsored By Yummies
                    </h4>
                  </div>
                  <div className='grid items-center'>
                    <span
                      title={`Information about ${CompanyName}`}
                      className='bg-colour2 rounded-full p-2 shadow-cardShadow cursor-pointer hover:brightness-125 active:scale-95'
                    >
                      <FaQuestion />
                    </span>
                  </div>
                </article>
              </section>

              <section className='absolute top-16 left-1/2 transform -translate-x-1/2 grid md:-translate-x-0 md:top-[95%] md:left-8'>
                <div className='grid grid-flow-col w-fit gap-2 text-black text-xl'>
                  {[1, 2, 3, 4, 5].map((star, index) => {
                    return <FaStar />;
                  })}
                </div>
              </section>

              <section className='absolute grid md:grid-flow-col bottom-2 right-1/2 transform translate-x-1/2 md:-translate-x-0 gap-1 md:gap-4 md:bottom-6 md:right-8'>
                <button class='flex md:mt-3 w-40 h-12 px-2 py-1 bg-black text-white rounded-xl items-center justify-center'>
                  <div class='mr-3'>
                    <svg viewBox='30 336.7 120.9 129.2' width='30'>
                      <path
                        fill='#FFD400'
                        d='M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z'
                      />
                      <path
                        fill='#FF3333'
                        d='M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z'
                      />
                      <path
                        fill='#48FF48'
                        d='M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z'
                      />
                      <path
                        fill='#3BCCFF'
                        d='M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z'
                      />
                    </svg>
                  </div>
                  <div className='text-left'>
                    <div class='text-xs'>GET IT ON</div>
                    <div class='text-lg font-semibold font-sans -mt-1'>
                      Google Play
                    </div>
                  </div>
                </button>

                <button class='flex md:mt-3 w-40 h-12 bg-transparent text-black border-2 border-black border-solid rounded-xl items-center justify-center'>
                  <div class='mr-3'>
                    <svg viewBox='0 0 384 512' width='30'>
                      <path
                        fill='currentColor'
                        d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z'
                      />
                    </svg>
                  </div>
                  <div>
                    <div class='text-xs text-left'>Download on the</div>
                    <div class='text-lg font-semibold font-sans -mt-1'>
                      App Store
                    </div>
                  </div>
                </button>
              </section>

              <section className='absolute top-4 lg:top-6 left-4 lg:left-8'>
                <figure>
                  <img
                    src={CatTextLogoSvg}
                    alt='Cat app text logo'
                    className='w-28 lg:w-36'
                  />
                </figure>
              </section>

              <article className='-mt-10'>
                <figure className='flex justify-center'>
                  <img
                    src={CatLogoSvg}
                    alt='Cat app logo'
                    className='min-w-44 max-w-44 lg:min-w-96 lg:max-w-96 w-fit h-auto'
                  />
                </figure>
                <section className='text-center'>
                  <h1 className='text-3xl font-atop text-colour2 text__stroke'>
                    Available to Download Soon!
                  </h1>
                </section>
              </article>
            </section>
          </div>
        </header>
      </div>
    </>
  );
});

export default HomePage;
