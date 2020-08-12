import React from 'react';
import Icon from '@material-ui/core/Icon';

const checklist = (props : any) => {

    function changeViewToProgress() {
        console.log("Changed from header")
        props.doChange("progress")
    }

    function changeViewToGetstarted() {
        console.log("Changed from header")
        props.doChange("getstarted")
    }

    return (
        <div className="top-padding-10">
            {
                !props.onlyMinimize ?

                    <div className="flex justify-between">
                        {
                            props.isCheckList ? 
                            <div className="flex side-margin-15 pointer-cursor" onClick={changeViewToProgress}>
                                <Icon style={{ fontSize: 12 }} className="material-icons">arrow_back_ios</Icon>
                                <div className="fontSize-12">To checklist</div>
                            </div>
                            :
                            <div className="flex side-margin-15 pointer-cursor" onClick={changeViewToProgress} >
                                <Icon style={{ fontSize: 12 }} className="material-icons">arrow_back_ios</Icon>
                                <div className="fontSize-12">Back</div>
                            </div>
                        }
                        
                        <div className="flex side-margin-15 pointer-cursor" onClick={changeViewToGetstarted}>
                            <div className="fontSize-12 right-margin-3">Hide</div>
                            <Icon style={{ fontSize: 12 }} className="material-icons">expand_more</Icon>
                        </div>
                    </div>
                    :
                    <div className="flex-center pointer-cursor" onClick={changeViewToGetstarted}>
                        <Icon style={{ fontSize: 18 }} className="material-icons">expand_more</Icon>
                    </div>
            }
        </div>
    );
}

export default checklist;







