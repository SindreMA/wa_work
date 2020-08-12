import React, { useState} from 'react';

import './Checklist.css'
import GetStarted from './ChecklistItems/GetStarted'
import WelcomeView from './ChecklistItems/WelcomeView'
import ProgressView from './ChecklistItems/ProgressView'
import CompletionView from './ChecklistItems/CompletionView'



const Checklist = () => {

  const [view, setView] = useState<string>("");
  const [welcomeShowedBefore, setWelcomeShowedBefore] = useState<boolean>(false);

  const [state, setState] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
  });

  function changeView(newView : string) {
    if (newView === "welcome") {
      setWelcomeShowedBefore(true)
    }
    //console.log("setting to: " + newView)
    if (newView === "welcome" && welcomeShowedBefore) {
      setView("progress");
    } else {
      setView(newView);
    }
    
  }

  const handleChange = (event : any) => {
    setState({ ...state, [event.target.name]: event.target.checked });

    if (event.target.name === 'checkedA' && event.target.checked && state.checkedB) {
      changeView("completionView1")
    } else if (event.target.name === 'checkedB' && event.target.checked && state.checkedA) {
      changeView("completionView1")
    }
    else if (event.target.name === 'checkedC' &&  event.target.checked) {
      changeView("completionView2")

    }
  };




  let CurrentView = <GetStarted doChange={changeView} />

  if (view === "welcome") {
    CurrentView = <WelcomeView doChange={changeView}/>
  }
  else if (view === "progress") {
    CurrentView = <ProgressView doChange={changeView} state={state} changeState={handleChange}/>
  }
  else if (view === "completionView1") {
    CurrentView = <CompletionView title="Juhuu you're ready for pokes!" description="Pokes are the candidate's way of showing intrest in your workplace." doChange={changeView}/>
  }
  else if (view === "completionView2") {
    CurrentView = <CompletionView showNextHireBtn={true} title="Thanks for upgrading!" description={`You're now on the "all inclusice" cruise where every feature and hire is included.`} doChange={changeView}/>
  }

  return (  
      <div className="text-white">
        <div  id="Checklist" className="fixed inFront" >          
          {CurrentView}
        </div>
      </div>
  );
}

export default Checklist;

