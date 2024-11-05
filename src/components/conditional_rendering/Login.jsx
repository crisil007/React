import { useState } from "react"

function Login() {

    const [isLogedIn, setIsLogedIn] = useState(true)
    let content;

    if(isLogedIn) {
        content = <h1>Loging successfull..!</h1>
    }else(
        content = <h1>Please Login...</h1>
    )

    return (
        <>
        {content}
        </>
    )
}

export default Login; 