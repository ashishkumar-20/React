// useContext hook  makes it easy to pass data throughout your  app without manually passing 
// down the tree. 

import React, { useContext } from "react";
import { BioData,college} from "./ComponentA";

const ComponentC=()=>{
    const name = useContext(BioData);
    const coll =useContext(college);
    return (
    <>
    <h1>My name is {name}</h1>
    <p>My college name is {coll} </p>
    </>);
}
export default ComponentC;