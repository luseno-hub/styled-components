import React, { useState } from "react";
import { MenuLabel, Icon } from "./MenuLabel.styled";

const MenuToggle = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // let navEl
  // const toggleNav= (e) => {
  //   e.target.class
  // };

  return (
    <>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
    </>
  );
};

export default MenuToggle;
