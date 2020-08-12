import React from 'react';
import ProfilePage from './Components/Pages/Profile/ProfilePage'
import Layout from './Components/Layouts/DefaultLayout'
import './App.css';


function App() {
  return (
    <div className="App">
      <Layout>
        <ProfilePage/>
      </Layout>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="stylesheet" href="css/flexboxgrid.min.css" type="text/css"/>
    </div>
  );
}

export default App;
