import React from 'react';
import CheckListContainer from './CheckListContainer'
import { Checkbox } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ProgressBar from './ProgressBar'

import Box from '@material-ui/core/Box';

const App = (props : any) => {

    


    const GreenCheckbox = withStyles({
        root: {
          color: green[800],
          '&$checked': {
            color: green[600],       
            backgroundColor: 'transparent'//'white',     
          },
        },        
        checked: {},
      })((propss : any) => <Checkbox  {...propss} className={`checkboxSize`} />);


      



  return (  
    <CheckListContainer doChange={props.doChange} onlyMinimize={true} isCheckList={true} >
        <div className="side-margin-25">
            <div className="fontSize-20 flex justify-start"> <strong>Discover your next coworker</strong></div>
            <br/>
            <div className="flex justify-start bottom-margin-5">
            <FormControlLabel control={  <GreenCheckbox checked={props.state.checkedA} onChange={props.changeState} name="checkedA" />} className="fontSize-5" label={<Box fontSize="13px">Upload logo</Box>} />
             
            </div>
            <div className="flex justify-start fontSize-5 bottom-margin-5">
                <FormControlLabel control={<GreenCheckbox checked={props.state.checkedB} onChange={props.changeState} name="checkedB" />} label={<Box fontSize="13px">Add description</Box>} />
            </div>
            <div className="flex justify-start fontSize-5" >
                <FormControlLabel className="side-margin-25" control={<GreenCheckbox checked={props.state.checkedC} onChange={props.changeState} name="checkedC" />} label={<Box fontSize="13px">Upgrade</Box>} />
            </div>
            <br/>
            <br/>
            
            <ProgressBar upgrade1={props.state.checkedA} upgrade2={props.state.checkedB} upgrade3={props.state.checkedC}/>
        </div>
         
    </CheckListContainer>
  );
}

export default App;

