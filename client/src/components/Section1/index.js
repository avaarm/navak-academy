import React from "react";
import Background1 from "./Background1.png";




function BlueBackground() {
    return (
        <div className="uk-container uk-container-xlarge" style={{ backgroundImage: `url(${Background1})`,   
        backgroundRepeat: 'no-repeat',
        backgroundSize:'contain',
        paddingBottom: '100%'
      
         }}>
      </div>
    )

}

export default BlueBackground;
