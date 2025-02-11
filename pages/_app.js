import '../styles/globals.css'; // Asegúrate de que el archivo CSS esté en la carpeta styles 
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PenKitApp</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&display=swap" 
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          background-color: #0d1117;
          margin: 0;
          padding: 0;
          color: #33ff77;
          font-family: 'Roboto Mono', monospace;
        }
      `}</style>
    </>
  );
}

export default MyApp; 