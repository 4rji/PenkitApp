import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ProxychainsPage = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Proxychains - PenKit Pro</title>
        <link href="https://fonts.googleapis.com/css2?family=Lexie+Readable:wght@400&display=swap" rel="stylesheet" />
      </Head>
      <div className="content-wrapper">
        <div className="documentation">
          <div className="back-arrow" onClick={handleBack}>←</div>
          <h3 className="category-title">Surf in Stealth Mode: Unlock the Power of Proxychains!</h3>
          <h4 style={{
            color: '#8b949e',
            fontSize: '1.1rem',
            lineHeight: '1.5',
            fontFamily: "'Lexie Readable', sans-serif"
          }}>
            Proxychains is a tool for routing your internet traffic through a series of proxy servers, 
            providing an additional layer of anonymity and the ability to bypass network restrictions. 
            Ideal for pentesters and privacy enthusiasts looking to mask their online activities.
          </h4>

          <ul style={{ listStyle: 'none', padding: '0' }}>
            
            <li style={{ marginBottom: '40px', position: 'relative' }}>
              <span style={{
                color: '#33ff77',
                fontSize: '1.5rem',
                marginRight: '15px',
                fontFamily: "'Courier New', monospace"
              }}>1</span>
              <h4 style={{
                color: '#33ff77',
                fontSize: '1.3rem',
                marginBottom: '15px',
                fontFamily: "'Courier New', monospace"
              }}>
                Modify the configuration for dinamic and add the proxys
              </h4>
              <div style={{
                background: '#161b22',
                padding: '20px',
                borderRadius: '6px',
                border: '1px solid #30363d',
                fontFamily: "'Lexie Readable', sans-serif"
              }}>
                <div style={{
                  backgroundColor: '#0d1117',
                  padding: '15px',
                  borderRadius: '6px',
                  marginTop: '10px',
                  fontFamily: "'Courier New', monospace"
                }}>
                  <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
                    <span style={{ color: '#33ff77' }}>sudo nano /etc/proxychains.conf</span>

                    <span style={{ color: '#8b949e' }}>
{`#uncomment only

random_chain
# Proxy DNS requests - no leak for DNS data
proxy_dns

# Some timeouts in milliseconds
tcp_read_time_out 15000
tcp_connect_time_out 8000

#add squid servers:
http 192.168.88.83 3128
http 192.168.2.2 3128

#add some ssh -d 1080 servers
socks4 192.168.88.83 1080
socks4 192.168.200.228 1080`}
                  </span>
                  </pre>
                </div>
              </div>
            </li>

            <li style={{ marginBottom: '40px', position: 'relative' }}>
              <span style={{
                color: '#33ff77',
                fontSize: '1.5rem',
                marginRight: '15px',
                fontFamily: "'Courier New', monospace"
              }}>2</span>
              <h4 style={{
                color: '#33ff77',
                fontSize: '1.3rem',
                marginBottom: '15px',
                fontFamily: "'Courier New', monospace"
              }}>
                I'm going to quickly deploy a squid server to test
              </h4>
              <div style={{
                background: '#161b22',
                padding: '20px',
                borderRadius: '6px',
                border: '1px solid #30363d',
                fontFamily: "'Lexie Readable', sans-serif"
              }}>
                <div style={{
                  backgroundColor: '#0d1117',
                  padding: '15px',
                  borderRadius: '6px',
                  marginTop: '10px',
                  fontFamily: "'Courier New', monospace"
                }}>
                  <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
                    <span style={{ color: '#33ff77' }}>squidinst</span>

                    <span style={{ color: '#8b949e' }}>
{`_________________________________________________________

Where do you want to install?
1 - Docker
2 - APT
3 - Stop,rm y restart squid container

(1, 2 o 3): 1
dpkg-query: no packages found matching docker.io
Instalando el paquete docker.io...

#Just follow my script`}
                    </span>
                  </pre>
                </div>
              </div>
            </li>

            <li style={{ marginBottom: '40px', position: 'relative' }}>
              <span style={{
                color: '#33ff77',
                fontSize: '1.5rem',
                marginRight: '15px',
                fontFamily: "'Courier New', monospace"
              }}>3</span>
              <h4 style={{
                color: '#33ff77',
                fontSize: '1.3rem',
                marginBottom: '15px',
                fontFamily: "'Courier New', monospace"
              }}>
                Let's go
              </h4>
              <div style={{
                background: '#161b22',
                padding: '20px',
                borderRadius: '6px',
                border: '1px solid #30363d',
                fontFamily: "'Lexie Readable', sans-serif"
              }}>
                <div style={{
                  backgroundColor: '#0d1117',
                  padding: '15px',
                  borderRadius: '6px',
                  marginTop: '10px',
                  fontFamily: "'Courier New', monospace"
                }}>
                  <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
                    <span style={{ color: '#33ff77' }}>curl ifconfig.me</span>
                    191.29.17.113%

                    <span style={{ color: '#8b949e' }}>
{`proxychains curl ifconfig.me
[proxychains] config file found: /etc/proxychains.conf
[proxychains] preloading /usr/lib/x86_64-linux-gnu/libproxychains.so.4
[proxychains] DLL init: proxychains-ng 4.17
[proxychains] Random chain  ...  192.168.2.2:3128  ...  ifconfig.me:80  ...  OK
41.72.11.314%

#our Ip change.`}
                    </span>
                  </pre>
                </div>
              </div>
            </li>
          </ul>
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
          position: relative;
          border: 4px double #33ff77;
          padding: 30px;
          border-radius: 10px;
          background: #0d1117;
          color: #c9d1d9;
          font-family: 'Lexie Readable', sans-serif;
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
        .back-button {
          background: #33ff77;
          color: #0d1117;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 20px;
          font-family: 'Courier New', monospace;
        }
        .back-button:hover {
          background: #2be066;
        }
      `}</style>
    </>
  );
};

export default ProxychainsPage;