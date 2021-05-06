import React from "react";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import InfoCard from "../../components/InfoCard/InfoCard"
import Blobs from "../../components/Blobs"

function MainPage(){
    return (
        <div>
            <NavBar/>
            {/* <InfoCard/> */}
            <Blobs/>
            <Footer />
        </div>
    )
}

export default MainPage;