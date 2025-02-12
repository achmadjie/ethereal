import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const Home: NextPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Head>
        <title>Ethereal - The Future of Decentralized Art & Finance</title>
        <meta
          name="description"
          content="Discover the future of decentralized art and finance with Ethereal"
        />
      </Head>
      <Navbar />
      <main className="bg-black min-h-screen">
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
