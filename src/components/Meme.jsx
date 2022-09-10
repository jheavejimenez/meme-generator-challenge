import React from "react";

function Meme() {
    /**
     * Challenge:
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     *
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     *
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     *
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     *
     * Lastly don't forget to export the component!
     */

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemes, setAllMemes] = React.useState();

    function getMemeImage() {
        // Create a variable called `memesArray` to hold memes array
        // Create a variable to hold random number use  Math.floor(Math.random() * memesArray.length) for getting random number
        // Create a variable for getting random url from memes array
        // setMeme with random url
    }

    function handleChange(event) {
        const {name, value} = event.target
        // setMeme with name and value
    }

    return (
        <div>
            <h1>Meme Generator</h1>
        </div>
    );

}
