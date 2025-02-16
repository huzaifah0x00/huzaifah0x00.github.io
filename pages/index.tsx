import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="maintenance-container">
      <Head>
        <title>Huzaifah | Under Maintenance</title>
        <meta name="description" content="Personal website of Huzaifah - Currently under maintenance" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" />
      </Head>

      <main className={`maintenance-content ${mounted ? 'fade-in' : ''}`}>
        <h1 className="title">HELLO</h1>
        <p className="subtitle">Not much to see here yet, here are some links for you:</p>
        
        <div className="social-links">
          <a href="https://linkedin.com/in/huzaifah-asif" target="_blank" rel="noreferrer">LinkedIn</a>
          <span className="divider">|</span>
          <a href="https://github.com/huzaifah0x00" target="_blank" rel="noreferrer">GitHub</a>
          <span className="divider">|</span>
          <a href="/Resume_Huzaifah_Asif.pdf" target="_blank" rel="noreferrer">Resume</a>
        </div>
      </main>

      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background-color: #0a0a0a;
          color: #fff;
          font-family: 'Space Mono', monospace;
        }
        
        .maintenance-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
        }

        .maintenance-content {
          text-align: center;
          opacity: 0;
          transform: translateY(20px);
        }

        .fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .title {
          font-size: 4rem;
          font-weight: bold;
          text-transform: uppercase;
          margin-bottom: 2rem;
          text-align: center;
        }

        .subtitle {
          font-size: 1.2rem;
          margin-bottom: 3rem;
          color: #888;
        }

        .social-links {
          margin-top: 2rem;
        }

        .social-links a {
          color: #fff;
          text-decoration: none;
          font-weight: bold;
          transition: color 0.3s ease;
        }

        .social-links a:hover {
          color: #00fffc;
        }

        .divider {
          margin: 0 1rem;
          color: #444;
        }

        @media (max-width: 768px) {
          .glitch {
            font-size: 2.5rem;
          }
          
          .subtitle {
            font-size: 1rem;
          }

          .social-links {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: center;
          }

          .social-links .divider {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
