import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("uppercase clicked"+text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLoClick = () => {
        // console.log("uppercase clicked"+text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success");
    }
    const handleclear = () => {
        // console.log("uppercase clicked"+text);
        let newText=''
        setText(newText)
        props.showAlert("Text Cleared","success");
    }
    const handleCopy=()=>{
        var text=document.getElementById("mybox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to Clipboard","success");
    }

    const handleOnChange = (event) => {
        // console.log("onchange");
        setText(event.target.value);

    }

    const [text, setText] = useState(""); 

    return (
        <>
        <div>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}} value={text}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="mybox" rows="8" style={{backgroundColor: props.mode==='light'?'white':'#54719d',color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert to uppercase</button>
            <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-1' onClick={handleclear}>Clear</button>
            <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy</button>
        </div>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}} value={text}>
            <h1>Your Text Summary</h1>
            <p>
                {text.split(' ').length} Words And {text.length} Characters
            </p>
            <p>
                {0.008*text.split(' ').length} Minutes Read
            </p>
            <h2>Preview:</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview here"}</p>
        </div>
        </div>
        </>
    );
}
