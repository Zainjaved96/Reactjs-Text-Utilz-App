import React from 'react'
import { useState } from 'react'
function TextForm(props) {
    const [text, setText] = useState("Welcome to the Text Analysis Tool! With this tool, you can easily remove any unnecessary spaces from your text and accurately count the number of words. Additionally, our reading time feature will give you an estimate of how long it will take to read your text in both minutes and seconds.");

    function ChangeText(event){
        let newText = event.target.value;
        setText(newText);
       
    }

    function turnUpper(){
        let up_text = text.toUpperCase();
        console.log(up_text);
        setText(up_text);
        props.showAlert("Converted To Upper Case!", "success");
    }

    function turnLower(){
        let low_text = text.toLowerCase();
        console.log(low_text);
        setText(low_text);
        props.showAlert("Converted To Lower Case!", "success");
    }

    function defaultCase(){
        setText(oldtext);
    }
    function clearText(){
        setText("");
        props.showAlert("Text Cleared", "success");
    }

    function extraSpace(){
        let new_text = text.replace(/\s+/g, ' ').trim()
        setText(new_text);
        props.showAlert("Extra Spaces Removed!", "success");

    }

    function copyText(){
        var text = document.getElementById("content");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to Clipboard!", "success");
    }
    var secRead = text.split(' ').filter(word => word !== '').length * 0.24
    var RoundedMR = Math.round(secRead * 100) /100;
    var seconds = RoundedMR.toFixed(2);
    var minutes = seconds / 60 ; 
    var minRound = Math.round(minutes * 100) /100;
    var minRounded = minRound.toFixed(2);

  return (
      <>
      <div className="py-2 container ">
        <h1 className= "mb-4 my-2 text-center gradiant-text ">Enter Your Text For Analysis!</h1>
        <textarea style={{backgroundColor : "#F3F3F3", color:"black" }}value={text} onChange={ChangeText} className="form-control text-dark" id="content" rows="5"></textarea>
        <div className='buttons-set'>
        <button type="button" onClick={turnUpper} className="btn btn-primary my-3 sample-button">Turn to Upper Case</button>
        <button type="button" onClick={turnLower} className="btn btn-primary my-3 mx-2 sample-button">Turn to Lower Case</button>
        <button type="button" onClick={clearText} className="btn btn-primary my-3 mx-2 sample-button">Clear Text</button>
        <button type="button" onClick={copyText} className="btn btn-primary my-3 mx-2 sample-button">Copy Text</button>
        <button type="button" onClick={extraSpace} className="btn btn-primary my-3 mx-2 sample-button">Remove Extra Spaces</button>
        </div>
    </div>

    <div className={` container text-dark`}>
        <h2 className='title-specs gradiant-text' >Text Summary</h2>
        <div className="specifications">
            <div className="text-spec">
                <p className='spec-name'>Words</p> 
                <p className='spec-value'> <b>{ text.split(' ').filter(word => word !== '').length}</b></p>
            </div>
            <div className="text-spec">
                <p className="spec-name">Characters</p>
                <p className='spec-value'> <b>{text.length}</b></p>
            </div>
            
            <div className="text-spec">
               <p className='spec-name'>Seconds Read</p>
               <p className='spec-value'> <b>{seconds}</b> </p>
            </div>

            <div className="text-spec">
                <p className="spec-name">Minutes Read</p>
                <p className="spec-value"> <b> {minRounded}</b></p>
            </div>
        </div>
        
        <h2 className='title-specs gradiant-text'>Preview</h2>
        <p className='text-preview'><i>{text.length == 0 ? "Enter Text For a Preview": text}</i></p>
    </div>
    </>



   
  )
}

export default TextForm
