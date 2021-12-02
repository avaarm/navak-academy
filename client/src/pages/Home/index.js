import React from "react";
import NavBar from "../../components/Navbar";
// import Blobs from "../../components/Blobs"
import SectionOne from "../../components/Section1";
import SectionTwo from "../../components/Section2";
import SectionThree from "../../components/Section3";
import SectionFour from "../../components/Section4";
import SectionFive from "../../components/Section5";
// import Footer from "../../components/Footer"

function MainPage() {
  return (
    <div>
      {/* <Blobs/> */}
      <NavBar/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
        {/*    <Footer/> */}
    </div>
  );
}

export default MainPage;
