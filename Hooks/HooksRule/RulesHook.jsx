// Hooks Basics Rule
// 1: Always write it inside the component or Function.
// 2: Component name must be pascal case(first letter should be uppercase).
// 3: we can directly import or we can write it using React.hookName
// 4: Don't call hooks inside loops ,conditions,or nested function



import React, { useState } from 'react';

const RulesHook =()=>{
    const [name,setName]=React.useState("Ashish kumar");
    return(
        <>
        <h1>My name is {name}</h1>
        </>
    );
}
export default RulesHook;