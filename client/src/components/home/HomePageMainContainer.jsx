import React from 'react';
// Components
import SocialMediaCTA from '../socialMedia/SocialMediaCTA';

function HomePageMainContainer() {
  return (
    <main role='main' className='grid w-full h-full'>
      <div>
        <div>home</div>
        <div>
          <SocialMediaCTA />
        </div>
      </div>
    </main>
  );
}

export default HomePageMainContainer;
