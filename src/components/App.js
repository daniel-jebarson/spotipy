import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import Player from "./Player";
import SongList from "./SongList";
import songs from "../data/songs.json";
import SongDetail from "./SongDetail";

const App = () => {
    return (
        <React.Fragment>
            <NavBar />
            <SongDetail />
            <SongList songs={songs} />
            <Player />
        </React.Fragment>
    );
};

export default App;
