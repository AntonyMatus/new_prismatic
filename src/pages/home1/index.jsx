/* eslint-disable @next/next/no-img-element */
import React from "react";
import Services1 from "../../components/Services1";
import IntroWithHorizontal from "../../components/Intro-with-horizontal";
import LightLayout from "../../layouts/light";
import Portfolio1 from "../../components/Portfolio1";
import Contact from "../../components/Contact";

//home2
import Services2 from "../../components/Services2";
import AboutUs2 from "../../components/About-Us2";
import Blogs2 from "../../components/Blogs2";

const Home1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout footerClass={"mt-30"}>
      <IntroWithHorizontal />
      <Services2 />
      <AboutUs2 />
      <Blogs2 />
      <Services1 />
      <Portfolio1 /> 
      <Contact />
    </LightLayout>
  );
};

export default Home1;
