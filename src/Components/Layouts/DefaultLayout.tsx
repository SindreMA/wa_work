import React from 'react';
import Header from './Header'
import './DefaultLayout.css'
import Skeleton from '@material-ui/lab/Skeleton';

const  layout = ( props : any) => {
  return (
    <div>
        <Header/>
        <div className="bg-dark">`
          {props.children}
          <div className="flex justify-center">
            <div className="farBack">
              <Skeleton variant="rect" width={1000} height={300} />`
              <br/>
              <Skeleton variant="rect" width={1000} height={100} />`
              <br/>
              <Skeleton variant="rect" width={1000} height={300} />`
              <br/>
              <Skeleton variant="rect" width={1000} height={200} />`
              <br/>
              <Skeleton variant="rect" width={1000} height={300} />`
            </div>          
          </div>
          

        </div>
    </div>
  );
}

export default layout;
