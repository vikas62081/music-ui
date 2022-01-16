import React from "react";
import { useState } from "react/cjs/react.development";

const CreatePlaylist = ({ add }) => {
    const [pName, setPName] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (pName) {
            add(pName)
            setPName("");
        } else {
            alert("Playlist can't be empty")
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input value={pName}
                    onChange={e => setPName(e.target.value)} placeholder="Enter new playlist name" />
                <button type="submit" className="button">Submit</button>
            </form>
        </>
    )
}

export default CreatePlaylist;