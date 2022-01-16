import React, { useState } from "react";
import './index.css'
import { EventEmitter } from 'fbemitter'

export const emitter = new EventEmitter();

const Loader = () => {
    const [open, setOpen] = useState(false)

    emitter.addListener("START", () => {
        setOpen(true)
    })
    emitter.addListener("STOP", () => {
        setOpen(false)
    })
    if (!open) {
        return null
    }
    return (
        <div className="loader-layout">
            <div className="loader"></div>
        </div>)
}
export default Loader;