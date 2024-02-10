import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
//It is an editor whose input and output we can control with our own onChange event handlers and value 
import { Controlled } from 'react-codemirror2'
import { MdOpenInFull, MdCloseFullscreen } from "react-icons/md";

const Editor = (props) => {
    const { 
        displayName,
        language,
        value,
        onChange
    } = props;

    const [open, setOpen] = useState(true);

    const handleChange = (editor, data, value) => {
        onChange(value);
    }
    return (
        <div className={`editor-container basis-0 flex flex-col p-2 bg-black ${open? "grow" : "collapsed grow-0"}`}>
        <div className='editor-title flex justify-between bg-[#1c2225] text-white py-2 pl-4 pr-2 rounded-t-lg'>
            {displayName}
            <button 
                onClick={() => setOpen(prevOpen => !prevOpen)}
            >
                {open? <MdCloseFullscreen size={20} /> : <MdOpenInFull size={20} />}
            </button>
        </div>
            <Controlled
                onBeforeChange={handleChange}
                value={value}
                className='code-mirror-wrapper grow rounded-b-lg truncate'
                options={{
                lineWrapping: true,
                lint: true,
                mode: language,
                lineNumbers: true,
                theme: 'material'
                }}
            />
        </div>
    )
}

export default Editor
