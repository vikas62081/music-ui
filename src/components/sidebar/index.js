import React from "react";
import './index.css'
const Sidebar = ({ children, playlists = [], open, onPlaylistClicked }) => {
    return (
        <>
            <div class="sidebar">
                <div className="side-item" onClick={() => onPlaylistClicked("All")}>All</div>
                {
                    playlists.length > 0 && <><div className="side-item">Playlist</div>
                        <ul>
                            {playlists.map(pl => <li onClick={() => onPlaylistClicked(pl.songs)}>{`${pl.name}`}</li>)}
                        </ul>
                    </>
                }
                <div className="side-item">
                    <button className="button" onClick={open}> Add Playlist</button></div>
            </div>
            <div class="content">
                {children}
            </div>
        </>
    )
}
export default Sidebar;