/* eslint-disable @next/next/no-img-element */
import React from "react";
import IntroWithHorizontal from "../../components/Intro-with-horizontal";
import Services2 from "../../components/Services2";
import AboutUs2 from "../../components/About-Us2";
import Services1 from "../../components/Services1";
import Portfolio1 from "../../components/Portfolio1";
import LightLayout from "../../layouts/light";


const Home1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout footerClass={"mt-30"}>
      <IntroWithHorizontal />
      <Services2 />
      <AboutUs2 />
      <Services1 />
      <Portfolio1 /> 
    </LightLayout>
  );
};

export default Home1;
