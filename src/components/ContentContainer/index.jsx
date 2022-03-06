import TopNavigation from '../TopNavigation';
// import { useState } from 'react';

const ContentContainer = ({component}) => {
  return (
    <div className='content-container'>
      <div>
      <TopNavigation />  
      </div>
      {
        (component)
      }
    </div>
  );
};



export default ContentContainer;
