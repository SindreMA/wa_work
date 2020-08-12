import React from 'react';
import './ProgressBar.css'

const App = (props : any) => {
    let percentCompleted = 0

    if (props.upgrade1) percentCompleted += 20
    if (props.upgrade2) percentCompleted += 20
    if (props.upgrade3) percentCompleted = 100

    

    let activeBar1Class = ""
    let activeBar2Class = ""
    let activeBar3Class = ""

    const oneActive = percentCompleted >= 20;
    const twoActive = percentCompleted >= 40;
    const threeActive = percentCompleted >= 100;

    if (oneActive) {
        activeBar1Class = 'bg-lighterBlue'
    }
    if (twoActive) {
        activeBar2Class = 'bg-lighterBlue'
    }
    if (threeActive) {
        activeBar3Class = 'bg-lightBlue'
    }

    function getLockImg(isActive:boolean) {
        let state = "locked"
        if (isActive) {
            state = "open" 
        }
        return <img src={`/keylock_${state}.png`} alt={`/keylock_${state}.png`} className="keyLockSize"/>
    }

    return (
    <div>
        <div className="flex">
            <div className={`bg-white text-black bar-height col-2 smoothLeftSide flex justify-start ${activeBar1Class}`}>
                <div className="relative noSize">
                    <div className="left-margin-5 fontSize15"> 
                        {percentCompleted}%
                    </div>
                </div>
            </div>
            <div className={`bg-white bar-height col-2 ${activeBar2Class}`}></div>
            <div className={`bg-white bar-height col-6 smoothRightSide ${activeBar3Class}`}></div>
        </div>        

        <div className="flex">
            <div className={`col-2 relative`}>               
               <div className="WhiteLineStyle WhiteLinePos1">
                    <img src="/yellow_key.png" alt="/yellow_key.png" className="keySize keyPos"/>
               </div>
            </div>
            <div className={`col-2 relative`}>
                <div className="WhiteLineStyle WhiteLinePos2">
                    <img src="/yellow_key.png" alt="/yellow_key.png" className="keySize keyPos"/>
               </div>
            </div>
            <div className={`col-6 relative`}>
                <div className="WhiteLineStyle WhiteLinePos2">
                    <img src="/yellow_key.png" alt="/yellow_key.png" className="keySize keyPos"/>
               </div>
            </div>
        </div>
<br/>
<br/>

        <div className="flex text-blue fontSize10">
            <div className={`col-5 flex justify-start text-start`}>
                <div>{ getLockImg(true)}</div>
                <div>
                    <div>Free interviews</div>
                    <div>Pay per hire</div>
                </div>
            </div>
            <div className={`col-5 flex justify-start text-start`}>
                <div>{ getLockImg((twoActive && oneActive) || threeActive)}</div>
                <div>
                    <div>Poke from users</div>
                </div>
            </div>
            <div className={`col-4 flex justify-start text-start`}>
                <div>{ getLockImg(threeActive)}</div>
                <div>
                    <div>Access to contact info</div>
                    <div>Public job listings</div>
                    <div>Poke Anonymous</div>
                    <div>Unlimited free hires</div>
                </div>
                
            </div>
        </div>   
    </div>
    );
}

export default App;

