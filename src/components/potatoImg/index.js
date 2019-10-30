import React from 'react';
import { Image } from 'semantic-ui-react';
import potato from "../../images/potato.png";
import "./style.css";

const Potato = () => (
  <Image src= {potato} fluid  id='potato' />
)

export default Potato