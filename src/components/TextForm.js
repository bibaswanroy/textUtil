import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('Upper Case was clicked');
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClClick = () => {
        let newText = '';
        setText(newText);
    }
    const handleSel = () => {
        var newText = document.getElementById('myBox');
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }
    const handleOnChange = (event) => {
        // console.log('On Change');
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            
                <div className='container'>
                    <div className="mb-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                        <h1 style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{props.heading}</h1>
                        <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#0a3240' : 'white',
                    color: props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
                    </div>
                    <buttton className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</buttton>
                    <buttton className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lowercase</buttton>
                    <buttton className="btn btn-primary mx-1" onClick={handleSel}>Select The Text</buttton>
                    <buttton className="btn btn-primary mx-1" onClick={handleClClick}>Clear Text</buttton>
                </div>
                <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                    <h2>Your Text Summary</h2>
                    <p>{text.split(' ').length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(' ').length} Minutes to read</p>
                    <h2>Preview</h2>
                    <p>{text.length > 0 ? text : 'Enter something to preview here'}</p>
                </div>
        </>
    )
}
