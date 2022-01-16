import { emitter } from "../components/loader"

export const startLoading = () => {
    emitter.emit("START");
}

export const stopLoading = () => {
    emitter.emit("STOP")
}