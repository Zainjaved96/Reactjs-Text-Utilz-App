import React from 'react';
import sampleIcon from '../assets/sample-icon.png';
import { useState } from 'react';
export default function Sample() {
const [sampleText, setSampleText] = useState("This is a Sample Text which has Multiple Repeated Words which can be called Common Words.");

function handleChange(event){
    let newText = event.target.value;
    setSampleText(newText);
}

const repeatedWords = new Map();
  sampleText.split(' ').forEach((word) => {
    const trimmedWord = word.trim();
    if (trimmedWord === '') {
      return;
    }

    const sanitizedWord = trimmedWord.replace(/\.+$/, '');
    const lowercaseWord = sanitizedWord.toLowerCase();
    if (repeatedWords.has(lowercaseWord)) {
      repeatedWords.set(lowercaseWord, repeatedWords.get(lowercaseWord) + 1);
    } else {
      repeatedWords.set(lowercaseWord, 1);
    }
  });
const repeatedWordsList = Array.from(repeatedWords)
.filter(([, frequency]) => frequency > 1)
.map(([word, frequency]) => (
  <li key={word}>
    {word}: {frequency}
  </li>
));

  return (
    <div className='container sample'>
      <div className='row-1'>
          <i class="fa-solid fa-user"></i>
          <h4 className='row-1--head'>Explore Text</h4>
        
        <p>Make Some changing to this text. So You can  <br />  see it's insight in real time.</p>
        <p><b>Make changes to this text:</b></p>
        <textarea onChange={handleChange} className='row1--text' name="" id=""  value={sampleText} cols="35" rows="3" maxLength={125}></textarea>
        <a href="#" className='sample-button'>Get Started</a>
      </div>

      <div className="row-2">
    <h4>
       <b>Text Insight</b>
    </h4>
              
        <p>Some Inisght From your Text can be seen below.</p>
        <div className='row-2--stats'>
        <p>
            Words : { sampleText.split(' ').filter(word => word !== '').length}
        </p>
        <p>
            Characters: {sampleText.length}
        </p>
        <p>Repeated Words: 
            {console.log(repeatedWordsList)}
            <ul>{repeatedWordsList.length === 0  ? "No Repeated Words" : repeatedWordsList}</ul>
        </p>
       
        </div>
      </div>
    </div>
  )
}
