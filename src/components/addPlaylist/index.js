import React from "react";
import { useState } from "react/cjs/react.development";
import './index.css'
const Dropdown = ({ playlists, addSongTopPlaylist }) => {
    const [selectedPlaylist, setSelectedPlaylist] = useState(null)
    const addToPlay = () => {
        if (selectedPlaylist)
            addSongTopPlaylist(selectedPlaylist)
        else alert("Select any playlist from dropdown")
    }
    return (
        <>
            <select onChange={e => setSelectedPlaylist(e.target.value)}>
                <option value={null}>Select</option>
                {playlists.map(pl => <option value={pl._id}>{pl.name}</option>)}
            </select>
            <button className="button" onClick={addToPlay}>Add</button>
        </>
    )
}

export default Dropdown