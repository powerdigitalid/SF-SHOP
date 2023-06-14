import Footer from "./footer";
import Navbar from "./navbar";
import Head from "next/head";
import Banner from "./banner";
import Backtotop from "./backtotop";


export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Loader */}
      <div >
        <div class="jumper">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="body-inner">
        <Navbar />
        {children}
        <Footer />
        <Backtotop />
      </div>
    </div>
  );
}
