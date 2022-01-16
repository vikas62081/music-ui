import logo from './logo.svg';
import './App.css';
import SongList from './components/songList';
import { useEffect, useState } from 'react';
import Sidebar from './components/sidebar';
import Modal from './components/model';
import CreatePlaylist from './components/createPlaylist';
import { addNewSongToPlaylist, createPlaylist, getAllSongs, getUserPlaylist } from './api';
import Dropdown from './components/addPlaylist';
import Loader from './components/loader';
import { stopLoading } from './utility';

function App() {
  const [searchText, setSearchText] = useState();
  const [playlists, setPlaylists] = useState([])
  const [permanentSongs, setPermanentSongs] = useState([])
  const [songs, setSongs] = useState([])
  const [open, setOpen] = useState(false)
  const [addingPlaylist, setAddingPlaylist] = useState(true)
  const [songId, setSongId] = useState()
  useEffect(async () => {
    if (!permanentSongs.length)
      setPermanentSongs(await getAllSongs())
    onPlaylistClicked("All")
    getPlaylist()
    stopLoading()
  }, [permanentSongs])
  const getPlaylist = async () => {
    const response = await getUserPlaylist()
    setPlaylists(response)

  }
  const handleChange = () => {
    setOpen(!open)
    setAddingPlaylist(true)
  }
  const onChangeSearchText = (value) => {
    setSearchText(value)
  }
  const addNewPlaylist = (name) => {
    createPlaylist(name).then(resp => {
      handleChange()
      getPlaylist()
      alert("New playlist created")
      stopLoading()
    })
      .catch(err => {
        console.log(err)
        stopLoading()
      })
  }
  const onPlaylistClicked = (songList) => {
    if (songList === "All") {
      setSongs(permanentSongs)
    } else {
      const play = permanentSongs.filter(psong => songList.includes(psong._id));
      setSongs(play)
    }
  }
  const addPlaylistClicked = (songId) => {
    setSongId(songId)
    setAddingPlaylist(false)
    setOpen(true)
  }
  const addSongTopPlaylist = (playlist) => {
    addNewSongToPlaylist(playlist, songId).then(resp => {
      alert("Song added to playlist")
      getPlaylist()
      handleChange()
      stopLoading()
    })

  }
  return (
    <div className="App">
      <Loader />
      <header className="App-header">
        <h3>Music Lover</h3>
        <div className='search-bar'>
          <input type="search" placeholder='Search Artists, Songs, Albums'
            onChange={(e) => onChangeSearchText(e.target.value)} />
        </div>
      </header>
      <div>

      </div>
      <Modal open={open} onClose={handleChange} >
        {addingPlaylist ? <CreatePlaylist add={addNewPlaylist} /> : <Dropdown playlists={playlists} addSongTopPlaylist={addSongTopPlaylist} />}
      </Modal>
      <Sidebar playlists={playlists} open={handleChange} onPlaylistClicked={onPlaylistClicked}>
        <SongList search={searchText} songs={songs} addPlaylistClicked={addPlaylistClicked} />
      </Sidebar >

    </div>
  );
}

export default App;
