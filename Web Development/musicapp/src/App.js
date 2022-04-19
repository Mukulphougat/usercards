import './App.css';
import {useEffect, useState} from "react";
import ReactAudioPlayer from "react-audio-player";
import axios from "axios";

function App() {
    const [items, setItems] = useState([])
    useEffect(() => {
        async function getData(url) {
            let response = await axios.get(url).then(response => {
                return response.data
            }).catch(err => console.log(err));
            let data = await response;
            return data;
        }

        let result = getData(`http://musicappmukul.herokuapp.com/songs/`)
        result.then((res) => setItems(res))
    }, [])

    return (
        <div className="App">
            <button >Songs</button>

            <h1>Songs</h1>
            <div>
                {
                    items.map(({id, fileName, title, artist, favourite}) => {
                        return (
                            <div key={id}>

                                <h1>{title}</h1>
                                <h1>{artist}</h1>
                                <audio controls>
                                    <source src={`https://musicarchivemukul.s3.amazonaws.com/${fileName}`}/>
                                </audio>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default App;
