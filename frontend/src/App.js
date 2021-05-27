import React from 'react';
import "App.css";
import "bootstrap.min.css";
// import img from "./img.jpg"
import MainNav from "./component/navbar/MainNav";
import Reviewerhome from "./component/Reviewerhome";

const App =()=> (
  <div>

      <MainNav></MainNav>
      <h1 className="heading">sadsdgdfg</h1>
      {/*<img src={img} alt="" />*/}
      <Reviewerhome></Reviewerhome>
  </div>
);

export default App;
