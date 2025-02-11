import React from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="error-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <div className="back-arrow" onClick={handleBack}>←</div>

      <style jsx>{`
        .error-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-color: #0d1117;
          color: #33ff77;
          font-family: 'Roboto Mono', monospace;
          text-align: center;
          position: relative;
        }
        h1 {
          font-size: 8rem;
          margin: 0;
          color: #33ff77;
        }
        h2 {
          font-size: 2rem;
          margin: 0;
          margin-bottom: 1rem;
        }
        p {
          font-size: 1.2rem;
          color: #88cc88;
        }
        .back-arrow {
          position: absolute;
          right: 20px;
          top: 20px;
          font-size: 2.5rem;
          cursor: pointer;
          color: #33ff77;
          transition: all 0.3s ease;
        }
        .back-arrow:hover {
          transform: scale(1.2);
          color: #88cc88;
        }
      `}</style>
    </div>
  );
} 