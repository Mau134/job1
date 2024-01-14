// app/page.js
import React from 'react';
import dynamic from 'next/dynamic'; // Import dynamic from next/dynamic

// Mark the parent component as a client entry
// This ensures that it will be treated as a client-side component
const Home = dynamic(() => import('./components/TableComponent'), {
  ssr: false, // Set ssr to false to prevent server-side rendering
});

export default Home;
