// createContext allows us to pass data directly from parent to last child without passing 
// to all components. 
// For example if some data are present in the componentA and we want to pass it to the 
// componentC then we can pass with the help of createContext
// createContext has three methods
// 1. context
// 2. provider
// 3. consumer
// But consumer always require a function whose code is very lengthy
// use context solve the problem of consumer 

import React, { createContext } from "react";
import ComponentB from './ComponentB';

const BioData = createContext();
const college = createContext();
const ComponentA=()=>{
    
    return (
    <>
    <BioData.Provider value={"Ashish kumar"}>
        <college.Provider value={"ITER"}>
          <ComponentB/>
        </college.Provider>
    </BioData.Provider>
   
    </>);
}
export default ComponentA;
export {BioData, college};