import Navbar from "./Navbar"
import { useState, useEffect } from "react";
function GetAllUsers() {

    const [data, setData] = useState(null);

    useEffect(() => {

        async function getallusers () {
            console.log("local storage :", localStorage)
            const authToken = localStorage.getItem("authToken");
            console.log("authtoken :", authToken);

            let response = await fetch("http://localhost:3001/users", {
                method: "GET",
                headers: {
                    "Authorization": `bearer ${authToken}`,
                    "Content-Type": "application/json"
                }
            })
            try {
                console.log("new response:", response);
                if (!response.ok) {
                    let parsed_response = await response.json();
                    let message = parsed_response.message;
                    alert(message);

                }
                else {

                    let datas = await response.json();
                    console.log("datassss", datas);
                    setData(datas);

                }
            }
            catch (error) {
                console.log("error :", error);

            }
        }

     getallusers(); 

    }, []);

    return (
        <>   <Navbar />
            {data ?
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody id="tbody">
                            {data.map((dt) => {
                                return(
                                    <tr key={dt._id} >
                                        <td>{dt.name}</td>
                                        <td>{dt.email}</td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
                : <h1>Loading..</h1>
            }
        </>
    )
}
export default GetAllUsers;