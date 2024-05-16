"use client";
import React from "react";
import menuItems from "../../constants/menu";
import Navbar from "@/components/Navbar";
import Ticker from "@/components/Ticker";
import { tickerData } from "../../constants/mock";
import Banner from "@/components/Banner";
import TradingFeature from "@/components/TradingFeature";
import ChallengeFeature from "@/components/ChallengeFeature";
import Footer from "@/components/Footer";

function ChaiPage() {
  return (
    <>
      <Navbar menuItems={menuItems} />
      <Banner />
      <Ticker tickers={tickerData} />
      <TradingFeature />
      <ChallengeFeature />
      <Footer />
    </>
  );
}
export default ChaiPage;
