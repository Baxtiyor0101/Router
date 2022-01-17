import React, {useContext} from "react";
import youtImg from "../../asset/images/Navbar/youtubeLogo.png";
import navLastIcons from "../../asset/images/Navbar/LastIcons.png";
import { Wrap } from "./styled";
import { datas } from "../../mock/data";
import { RightContext } from "../../Contexts/RightContext";

export const Navbar = () => {
  const[state,setState]=useContext(RightContext);
  const onChange=(e)=>{
    const { value }=e.target;
    let res=datas.filter((val)=>val.title.includes(value))
    setState(res)
  }
  

  return (
    <Wrap>
      <img src={youtImg} alt="youtubeicon" />

      <Wrap.Form>

        <input
          style={{ width: "83%", height: "100%", outline: "none" }}
          type="text"
          placeholder="Search..."
          onChange={onChange}
        />
        <input
          style={{ width: "15%", height: "115%", outline: "none" }}
          type="submit"
          value="Search"
        />
      </Wrap.Form>

      <div>
        <img src={navLastIcons} alt="icons" />
      </div>
    </Wrap>
  );
};
export default Navbar;