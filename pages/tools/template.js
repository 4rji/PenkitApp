import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Template = () => {
  return (
    <>
      <Head>
        <title>PenKit Pro</title>
        <link href="https://fonts.googleapis.com/css2?family=Lexie+Readable:wght@400&display=swap" rel="stylesheet" />
      </Head>
      <div style={{ fontFamily: "'Roboto Mono', monospace", backgroundColor: '#0d1117', color: '#33ff77', margin: 0, padding: '20px' }}>
        <div className="content-wrapper">
          <div className="documentation">
            <h2>Template</h2>
            {/* Aquí va el contenido */}
          </div>
          <Link href="/tools">
            <button className="back-button">← Back to Tools</button>
          </Link>
        </div>

        <style jsx>{`
          .content-wrapper {
            width: 80%;
            margin: 0 auto;
          }
          .documentation {
            border: 4px double #33ff77;
            padding: 30px;
            border-radius: 10px;
            background: #0d1117;
            text-align: left;
          }
          .category-info {
            margin-bottom: 30px;
          }
          .category-title {
            color: #33ff77;
            font-size: 1.8rem;
            margin-bottom: 15px;
            font-family: 'Courier New', monospace;
          }
          .category-description {
            color: #88cc88;
            font-size: 1.1rem;
            line-height: 1.6;
          }
          .steps {
            list-style: none;
            padding: 0;
          }
          .step {
            margin-bottom: 30px;
            position: relative;
          }
          .step-number {
            color: #33ff77;
            font-size: 1.2rem;
            font-weight: bold;
            margin-right: 10px;
            font-family: 'Courier New', monospace;
          }
          .step-title {
            color: #33ff77;
            font-size: 1.3rem;
            margin: 10px 0;
            font-family: 'Courier New', monospace;
          }
          .terminal {
            background-color: #000;
            color: #fff;
            font-family: 'Courier New', monospace;
            padding: 20px;
            margin: 20px 0;
            border-radius: 5px;
            border: 1px solid #33ff77;
          }
          .terminal pre {
            margin: 0;
            white-space: pre-wrap;
          }
          .command {
            color: #00ff00;
          }
          .comment {
            color: #ffff00;
          }
          .step-divider {
            border: 0;
            border-top: 1px solid #33ff77;
            margin: 30px 0;
          }
          a {
            color: #33ff77;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .close-button {
            position: absolute;
            right: 20px;
            top: -40px;
            color: #33ff77;
            font-size: 6rem;
            cursor: pointer;
            line-height: 1;
            transition: all 0.3s ease;
            font-family: 'Courier New', monospace;
          }
          .close-button:hover {
            color: #88cc88;
            transform: scale(1.1);
          }
        `}</style>
      </div>
    </>
  );
};

export default Template;