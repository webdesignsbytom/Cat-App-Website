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
        <header className='grid w-full h-full min-h-screen lg:max-h-screen lg:overflow-hidden'>cat app</header>
      </div>
    </>
  );
});

export default HomePage;
