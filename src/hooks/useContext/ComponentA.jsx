
import { useContext } from "react";
import { Mycontext } from "./UseContextApp";

function ComponentA(){
    const contextvalue=useContext(Mycontext)

    return(
        <>
        <h1>COmponent value:{contextvalue}</h1>
        </>
    )
}
export default ComponentA















