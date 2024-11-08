import React from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import { createContext } from "react";

const Mycontext=createContext('default');

function UseContextApp(){
         return(
            <>
                    <Mycontext.Provider value="hai helloooooooooo">
                     <ComponentA/>
                     <ComponentB/>
                    </Mycontext.Provider>
            </>
         )
}
export {Mycontext}
export default UseContextApp