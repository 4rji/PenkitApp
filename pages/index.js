import React, { useState } from 'react';
import Link from 'next/link';

const Home = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="container">
      <h1>PenKit Pro</h1>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search here or type 'AA' to show all..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          autoComplete="off"
          autoFocus
        />
      </div>
      <div className="buttons">
        <Link href="/tools" legacyBehavior>
          <a className="button">Tools</a>
        </Link>
        <Link href="/oscp" legacyBehavior>
          <a className="button">OSCP</a>
        </Link>
        <Link href="/guides" legacyBehavior>
          <a className="button">Guides</a>
        </Link>
        <Link href="/exploits" legacyBehavior>
          <a className="button">Exploits</a>
        </Link>
        <Link href="/forensics" legacyBehavior>
          <a className="button">Forensics</a>
        </Link>
        <Link href="/malware" legacyBehavior>
          <a className="button">Malware</a>
        </Link>
      </div>
      <h2 className="section-title">Resources</h2>
      <div className="posts">
        <div className="post" style={{ display: searchText === 'AA' ? 'block' : 'none' }}>
          <h2>
            <Link href="/tools/ligolo" legacyBehavior>
              <a>Ligolo</a>
            </Link>
          </h2>
          <p>Advanced tunneling tool for penetration testing that creates secure TUN interfaces, offering a lightweight and efficient alternative to traditional SOCKS proxies.</p>
          <div className="tags">
            <span className="tag">Network</span>
            <span className="tag">Pentesting</span>
            <span className="tag">Red Team</span>
            <span className="tag">OSCP</span>
            <span className="tag">Pivoting</span>
          </div>
        </div>

        <div className="post" style={{ display: searchText === 'AA' ? 'block' : 'none' }}>
          <h2>
            <Link href="/tools/proxychains" legacyBehavior>
              <a>Proxychains</a>
            </Link>
          </h2>
          <p>A tool for routing your internet traffic through proxy servers, providing anonymity and the ability to bypass network restrictions.</p>
          <div className="tags">
            <span className="tag">Network</span>
            <span className="tag">Privacy</span>
            <span className="tag">Pentesting</span>
            <span className="tag">Proxy</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          background-color: #0d1117;
          color: #33ff77;
          font-family: 'Courier New', monospace;
        }
        h1 {
          color: #33ff77;
          font-size: 3rem;
        }
        .search-container {
          margin-bottom: 30px;
        }
        .search-input {
          width: 100%;
          padding: 15px;
          font-size: 1.2rem;
          background: #161b22;
          border: 4px double #33ff77;
          border-radius: 10px;
          color: #33ff77;
          font-family: 'Courier New', monospace;
        }
        .buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 40px;
          justify-content: center;
        }
        .button {
          background: #161b22;
          color: #33ff77;
          border: 1px solid #30363d;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .button:hover {
          background: #33ff77;
          color: #0d1117;
        }
        .section-title {
          color: #33ff77;
          font-size: 2rem;
          margin: 40px 0 20px;
          font-family: 'Courier New', monospace;
        }
        .post {
          border: 4px double #33ff77;
          padding: 30px;
          border-radius: 10px;
          margin-bottom: 20px;
          background: #0d1117;
        }
        .post h2 {
          color: #33ff77;
          margin-top: 0;
          font-family: 'Courier New', monospace;
        }
        .post h2 a {
          color: #33ff77;
          text-decoration: none;
        }
        .post h2 a:hover {
          text-decoration: underline;
        }
        .post p {
          color: #88cc88;
          line-height: 1.6;
          font-family: 'Courier New', monospace;
        }
        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 15px;
        }
        .tag {
          background: #161b22;
          color: #33ff77;
          padding: 5px 10px;
          border-radius: 5px;
          font-size: 0.9rem;
          border: 1px solid #30363d;
        }
      `}</style>
    </div>
  );
};

export default Home; 