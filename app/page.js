
import React from 'react';
import dynamic from 'next/dynamic'; 


const Home = dynamic(() => import('./components/TableComponent'), {
  ssr: false, 
});

export default Home;
