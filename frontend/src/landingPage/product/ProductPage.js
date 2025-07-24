import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imgUrl="/media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="Try Demo "
        learnMore="Learn More"
        googlePlay=""
        appStore=""
      />
      <RightSection
        imgUrl="/media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        learnMore="Learn More"
      />
      <LeftSection
        imgUrl="/media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        learnMore=""
        tryDemo="Coin"
        googlePlay=""
        appStore=""
      />
      <RightSection
        imgUrl="/media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        learnMore="Kite Connect"
      />
      <LeftSection
        imgUrl="/media/images/varsity.png"
        productName="Kite"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        learnMore=""
        tryDemo=""
        googlePlay=""
        appStore=""
      />
        <p className='text-center fs-5 '>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>

      <Universe />
    </>
  );
}

export default ProductPage;
