import { startLoading } from "../utility";

const BASE_URL = "https://music-vikas62081-app.herokuapp.com/api"

export const getAllSongs = async () => {
    startLoading()
    const response = await (await fetch(`${BASE_URL}/song`)).json()
    return response;
}

export const getUserPlaylist = async (userId = "61e2ec4781b77e284b616024") => {
    startLoading()
    const response = await (await fetch(`${BASE_URL}/playlist/${userId}`)).json()
    return response;
}

export const createPlaylist = async (name, userId = "61e2ec4781b77e284b616024") => {
    startLoading()
    const response = await (await fetch(`${BASE_URL}/playlist`,
        {
            method: "POST", body: JSON.stringify({ userId, name }),
            headers: { "Content-Type": "application/json" }
        })).json()
    return response;
}

export const addNewSongToPlaylist = async (playlist, songId) => {
    startLoading()
    const response = await (await fetch(`${BASE_URL}/playlist/${playlist}`,
        {
            method: "PATCH", body: JSON.stringify({ songs: [songId] }),
            headers: { "Content-Type": "application/json" }
        })).json()
    return response;
}