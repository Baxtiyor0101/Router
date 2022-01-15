import React from "react";
import MiddleSection from "./MiddleSection/MiddleSection";
import LeftSection from "./LeftSection/LeftSection";
import MiddleSection1 from "./MiddleSection/MiddleSection1";
import MiddleSection2 from "./MiddleSection/MiddleSection2";
import MiddleSection4 from "./MiddleSection/MiddleSection4";
import MiddleSection5 from "./MiddleSection/MiddleSection5";
import MiddleSection3 from "./MiddleSection/MiddleSection3";
import {BrowserRouter as Router, Route} from 'react-router-dom';


export const Body = () => {
  return (
    <div style={{ display: "flex" }}>
      <LeftSection />
      <Router>
        <MiddleSection />
        <MiddleSection1/>
        <MiddleSection2/>
        <MiddleSection3/>
        <MiddleSection4 />
        <MiddleSection5/>
      </Router>
    </div>
  );
};
export default Body;
