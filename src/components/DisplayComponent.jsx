export default function DisplayComponent({ displaydata }) {
    console.log("Display Component Rendering...");

    return (
        <>
            <div class="container">
                <h1>Hello {displaydata.name}</h1>
                <h1>Your email {displaydata.email}</h1>
                <h1>You from {displaydata.place}?</h1>
                <h1>Pincode : {displaydata.pincode}</h1>
            </div>

        </>
    );
}
