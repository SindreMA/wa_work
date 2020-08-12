import React from 'react';
import CheckListContainer from './CheckListContainer'
import FindCandidateButton from '../FindCandidateButton'


const checklist = (props : any) => {
  return (  
          <CheckListContainer doChange={props.doChange} isCheckList={true}>
              <img src="/wa_comp_logo.png" alt="/wa_comp_logo.png"/>
                <div className="fontSize-20">
                    <strong>Welcome to WA.works</strong>  
                </div>
                <div className="flex justify-center">
                    <div className="max-width-280">View and interview as many candidates as you like, and don't pay until you're ready to hire</div>
                </div>
              <br/>
              <br/>
              <FindCandidateButton/>
          </CheckListContainer>
  );
}

export default checklist;

