import React from "react";
import Background2 from "./Background2.png";




function BlueBackground2() {
    return (
        <div className="uk-container uk-container-xlarge" style={{ backgroundImage: `url(${Background2})`,   
        backgroundRepeat: 'no-repeat',
        backgroundSize:'contain',
        paddingBottom: '100%'
      
         }}>
      </div>
    )

}

export default BlueBackground2;
