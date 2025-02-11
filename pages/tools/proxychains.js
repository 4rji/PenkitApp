import React from 'react';

const ProxychainsPage = () => {
  return (
    <div style={{
      backgroundColor: '#0d1117',
      color: '#c9d1d9',
      fontFamily: "'Courier New', monospace",
      margin: '0',
      padding: '20px'
    }}>
      <div style={{ maxWidth: '1200px', margin: 'auto' }}>
        
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{
            color: '#33ff77',
            fontSize: '2rem',
            marginBottom: '20px',
            fontFamily: "'Courier New', monospace"
          }}>
            Surf in Stealth Mode: Unlock the Power of Proxychains!
          </h3>
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
        </div>

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
    </div>
  );
};

export default ProxychainsPage;