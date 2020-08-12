import React from 'react';
import Icon from '@material-ui/core/Icon';

const checklist = (props : any) => {
  

  function changeViewToGetstarted() {
    console.log("Changed from getstarted component")
    props.doChange("welcome")
}

  return (  
      <div id="GetStarted" onClick={changeViewToGetstarted} className="bg-blue bg-light_blue-hover flex">
          <div className="self-center flex" >
    <div className="side-margin-5">GET STARTED</div>
      { true ? 
        <Icon style={{ fontSize: 15 }} className="material-icons">expand_less</Icon> :
        <Icon style={{ fontSize: 15 }} className="material-icons">expand_more</Icon>
      }
    </div>
      </div>    
  );
}

export default checklist;







