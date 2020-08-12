import React from 'react';
import CheckListContainer from './CheckListContainer'
import FindCandidateButton from '../FindCandidateButton'
import NextHireButton from '../NextHireButton'

const App = (props : any) => {

    return (
        <CheckListContainer doChange={props.doChange}>
            <br/>
            <div className="flex justify-center">
                <img src="/unlock_party.png" alt="/unlock_party.png" className="completionImageSize"/>
            </div>
            <br/>
            <div className="fontSize-20"> <strong>{props.title}</strong></div>
            <div className="flex justify-center">
                <div className="max-width-290">{props.description}</div>
            </div>
            <br/>
            <br/>
            {
                props.showNextHireBtn ? 
                <NextHireButton/> : 
                <FindCandidateButton/>
            }
        </CheckListContainer>
    );
}

export default App;

