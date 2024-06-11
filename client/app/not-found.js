// app/not-found.js
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './styles/index.scss'

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <div style={{fontSize:"36px",lineHeight:"72px"}}>404 - Page Not Found</div>
      <div style={{fontSize:"20px"}}>Redirecting to the home page...</div>
    </div>
  );
}
