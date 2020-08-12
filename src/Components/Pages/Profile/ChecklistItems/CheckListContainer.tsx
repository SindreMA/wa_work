import React from 'react';
import Header from './Header'

const checklist = (props : any) => {
  return (  
      <div id="CheckList" className="bg-blue">
        <Header onlyMinimize={props.onlyMinimize} isCheckList={props.isCheckList} doChange={props.doChange}/>
        {props.children}
      </div>    
  );
}

export default checklist;







