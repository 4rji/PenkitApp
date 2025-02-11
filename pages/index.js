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
          placeholder="Type 'AA' to show all content..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          autoComplete="off"
          autoFocus
        />
      </div>
      <div className="buttons">
        <Link href="/tools">
          <button>
            <span>Tools</span>
          </button>
        </Link>
        <Link href="/oscp">
          <button>
            <span>OSCP</span>
          </button>
        </Link>
        <Link href="/guides">
          <button>
            <span>Guides</span>
          </button>
        </Link>
        <Link href="/exploits">
          <button>
            <span>Exploits</span>
          </button>
        </Link>
        <Link href="/forensics">
          <button>
            <span>Forensics</span>
          </button>
        </Link>
        <Link href="/malware">
          <button>
            <span>Malware</span>
          </button>
        </Link>
      </div>
      <h2 className="section-title">Resources</h2>
      <div className="post" style={{ display: searchText === 'AA' ? 'block' : 'none' }}>
        <h2>
          <Link href="/tools/ligolo">
            Ligolo
          </Link>
        </h2>
        <p>Advanced tunneling tool for penetration testing that creates secure TUN interfaces, offering a lightweight and efficient alternative to traditional SOCKS proxies.</p>
        <div className="tag">Network</div>
        <div className="tag">Pentesting</div>
        <div className="tag">Red Team</div>
        <div className="tag">OSCP</div>
        <div className="tag">Pivoting</div>
      </div>

      <div className="post" style={{ display: searchText === 'AA' ? 'block' : 'none' }}>
        <h2>
          <Link href="/tools/proxychains">
            Proxychains
          </Link>
        </h2>
        <p>A tool for routing your internet traffic through proxy servers, providing anonymity and the ability to bypass network restrictions.</p>
        <div className="tag">Network</div>
        <div className="tag">Privacy</div>
        <div className="tag">Pentesting</div>
        <div className="tag">Proxy</div>
      </div>
    </div>
  );
};

export default Home; 