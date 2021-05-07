import React from "react";
import NavBar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import InfoCard from "../../components/InfoCard/InfoCard"
// import Blobs from "../../components/Blobs"
import BlueBackground1 from "../../components/Section1";
import BlueBackground2 from "../../components/Section2";
import BlueBackground3 from "../../components/Section3";
import BlueBackground4 from "../../components/Section4";
import BlueBackground5 from "../../components/Section5";
import Footer from "../../components/Footer"

function MainPage(){
    return (
        <div>
            {/* <Blobs/> */}
            <NavBar/>
            <BlueBackground1/>
          <BlueBackground2/>
          <BlueBackground3/>
          <BlueBackground4/>
          <BlueBackground5/>
          <Footer/>
            {/* <InfoCard/> */}
            
            {/* <Footer /> */}
        </div>
    )
}

export default MainPage;