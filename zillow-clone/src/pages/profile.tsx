// pages/profile.tsx

import React from 'react';
import Layout from '../components/layout';
import { useRouter } from 'next/router';

const ProfilePage = () => {
  const router = useRouter();

  return (
    <Layout>
      <div className="container mx-auto px-4">
        <header className="py-5">
          <h1 className="text-2xl font-bold">Profile</h1>
        </header>

        <main className="py-5">
          <div className="mb-5">
            <h2 className="text-xl font-bold">Name</h2>
            <p>John Doe</p>
          </div>

          <div className="mb-5">
            <h2 className="text-xl font-bold">Email</h2>
            <p>johndoe@example.com</p>
          </div>

          <button 
            className="p-2 bg-blue-500 text-white rounded" 
            onClick={() => router.push('/')}
          >
            Go Back
          </button>
        </main>
      </div>
    </Layout>
  );
}

export default ProfilePage;
