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

const HomePage = React.memo(() => {
  usePageTracking(); // Tracks page views

  return (
    <>
      {/* Tab Data */}
      <HelmetItem
        PageName='Home'
        desc={`${CompanyName}`}
        keywords={``}
        additionalMeta={homePageAdditionalMeta}
        structuredData={homePageStructuredData}
      />

      {/* Page */}
      <div className='grid min-h-screen w-full h-full'>
        <header className='grid w-full h-full min-h-screen lg:max-h-screen lg:overflow-hidden bg-black px-1 py-1'>
          <div className='bg-colour2 rounded-lg px-6 py-6'>
            <section className='relative grid h-full w-full items-center justify-center bg-colour1 rounded-2xl shadow-cardShadow'>
              <section className='absolute -left-28 rotate-90 h-fit'>
                <ul className='grid grid-flow-col gap-8 text-2xl text-colour2 font-semibold h-fit'>
                  <li>Videos</li>
                  <li>Games</li>
                  <li>Pictures</li>
                </ul>
              </section>

              <section className='absolute grid bottom-6 left-8'>
                <div className='grid grid-flow-col w-fit gap-2 text-black text-xl'>
                  {[1, 2, 3, 4, 5].map((star, index) => {
                    return <FaStar />;
                  })}
                </div>
              </section>

              <section className='absolute top-6 left-8'>
                <figure>
                  <img
                    src={CatTextLogoSvg}
                    alt='Cat app text logo'
                    className='w-28'
                  />
                </figure>
              </section>
              <figure>
                <img src={CatLogoSvg} alt='Cat app logo' className='min-w-24' />
              </figure>
            </section>
          </div>
        </header>
      </div>
    </>
  );
});

export default HomePage;
