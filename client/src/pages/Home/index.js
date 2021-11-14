import React from "react";
import NavBar from "../../components/Navbar";
// import Blobs from "../../components/Blobs"
import SectionOne from "../../components/Section1";
import SectionTwo from "../../components/Section2";
// import BlueBackground3 from "../../components/Section3";
// import BlueBackground4 from "../../components/Section4";
// import BlueBackground5 from "../../components/Section5";
// import Footer from "../../components/Footer"

function MainPage() {
  return (
    <div>
      {/* <Blobs/> */}
      <NavBar/>
      <SectionOne/>
      <SectionTwo/>
      {/* <BlueBackground3/>
          <BlueBackground4/>
          <BlueBackground5/>
          <Footer/> */}
    </div>
  );
}

export default MainPage;
