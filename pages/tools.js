import React from 'react';
import Link from 'next/link';

const Tools = () => {
  return (
    <div className="container">
      <h1>Tools</h1>
      <div className="tags">
        <Link href="/tools/ligolo">
          <div className="tag">Ligolo</div>
        </Link>
        <Link href="/tools/proxychains">
          <div className="tag">Proxychains</div>
        </Link>
      </div>

      <div className="content">
        <Link href="/">
          <button className="back-button">← Back</button>
        </Link>
      </div>

      <style jsx>{`
        .container {
          padding: 20px;
        }
        .tags {
          display: flex;
          gap: 10px;
          margin: 20px 0;
        }
        .tag {
          background: #161b22;
          color: #33ff77;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          border: 1px solid #30363d;
        }
        .tag:hover {
          background: #21262d;
        }
        .back-button {
          background: #33ff77;
          color: #0d1117;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-family: 'Courier New', monospace;
        }
        .back-button:hover {
          background: #2be066;
        }
      `}</style>
    </div>
  );
};

export default Tools; 