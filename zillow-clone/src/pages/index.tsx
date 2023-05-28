// pages/index.tsx

import React from 'react';
import Layout from '../components/layout';
import Image from 'next/image';
import '../styles/globals.css';

const HomePage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <header className="py-5"></header>

        <main className="py-5">
          <div className="mb-5 relative" style={{height: "350px"}}>
            <Image
              src="/images/icons/family-enjoying-picnic-1737300-0.svg"
              alt="Background"
              layout="fill"
              // width={500}
              // height={100} 
              objectFit="cover"
              objectPosition="center 70%"
              quality={100}
            />
            <div className="absolute top-1/2 left-0 w-full">
              <input type="text" className="w-full p-2 border rounded" placeholder="Enter an Address, City, or Zip Code" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-5 text-black">
            <div className="border p-4 flex flex-col items-center justify-center">
              <img src="/images/icons/man-taking-picture-of-new-house-2487210-0.svg" alt="Buy" className="w-24 h-24 object-cover mb-2" />
              <h3 className="font-bold mb-2">Buy</h3>
              <p>Find your dream home</p>
              <p>Explore the best listings with our intuitive search tools.</p>
            </div>
            <div className="border p-4 flex flex-col items-center justify-center">
              <img src="/images/icons/girl-drinking-coffee-near-fireplace-3868817-2.svg" alt="Rent" className="w-24 h-24 object-cover mb-2" />
              <h3 className="font-bold mb-2">Rent</h3>
              <p>Find a rental property</p>
              <p>Browse through a wide variety of rental listings to find your perfect home.</p>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default HomePage;
