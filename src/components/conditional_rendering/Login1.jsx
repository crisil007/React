import { useState } from "react"

function Login1() {

    const [isLogedIn, setIsLogedIn] = useState(true)
    
    return(
        <>
        {isLogedIn ? (<h1>Loggin successfull</h1>) : (<h1>please login to continue...</h1>)}
        </>
        
    )
}
export default Login1;