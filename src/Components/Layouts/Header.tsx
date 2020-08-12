import React from 'react';
import './Header.css';

const  header = () => {
  
  return (
      <div className="bg-purple box-height-80 flex-between text-white">
        <img src="/wa_logo.png" alt="/wa_logo.png"/>
        <div className="flex-between text-white " id="DivButtonsContainer">
            <div className="side-margin-5 selected-btn flex"><a href="https://app.wa.works/">My WA</a></div>
            <div className="side-margin-5 flex"><a href="https://app.wa.works/listings">Listings</a></div>
            <div className="side-margin-5 flex"><a href="https://app.wa.works/companies">Companies</a></div>
            <div className="side-margin-5 flex"><a href="https://app.wa.works/connections">Connections</a></div>
        </div>
        <div className="flex-end">
            <div className="side-margin-5">WA Works</div>    
            <img className="side-margin-5" id="profileImage" src="https://res.cloudinary.com/climb/image/upload/c_fill,f_auto,h_800,q_80/v1505137063/e0u7l8w93fdpgxkhbvom" alt="/wa_logo.png"/>
        </div> 
    </div>
  );
}

export default header;
