"use client";
import React from "react";
import menuItems from "../constants/menu";
import Ticker from "@/components/Ticker";
import { tickerData } from "../constants/mock";
import Banner from "@/components/Banner";
import TradingFeature from "@/components/TradingFeature";
import ChallengeFeature from "@/components/ChallengeFeature";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar menuItems={menuItems} />
      <main>
        <Banner />
        <Ticker tickers={tickerData} />
        <TradingFeature />
        <ChallengeFeature />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
