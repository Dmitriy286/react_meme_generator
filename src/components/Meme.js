import React, {useEffect, useState} from 'react';

const Meme = () => {
    const [allMemes, setAllMemes] = useState([]);
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg"
    });

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(result => result.json())
            .then(data => setAllMemes(data.data.memes));
    }, [])

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function getMemeImage(e) {
        e.preventDefault();
        const randomUrl = allMemes[Math.floor(Math.random() * allMemes.length)]['url'];
        setMeme(prevState => ({
            ...prevState,
            randomImage: randomUrl
        }));
        console.log(meme);
    }

    return (
        <main id="main">
            <form className="form">
                <input className="form-input" type="text" placeholder="Top text"
                       onChange={handleChange} value={meme.topText} name="topText"/>
                <input className="form-input" type="text" placeholder="Bottom text"
                       onChange={handleChange} value={meme.bottomText} name="bottomText"/>
                <button onClick={getMemeImage}
                        className="form-button" type="submit">Get a new meme image
                </button>
            </form>
            <div className="meme">
                <img className="mem-img" src={meme.randomImage}/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
};

export default Meme;