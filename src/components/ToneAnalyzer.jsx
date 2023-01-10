import React from 'react'
import { useState } from 'react';
import axios from 'axios';

export default function ToneAnalyzer(props) {
    const [text, setText] = useState("");
    let [responseData, setResponseData] = React.useState('');
    
    function ChangeText(event){
        let newText = event.target.value;
        setText(newText);
    }

    const fetchData = React.useCallback(() => {
        axios({
            method: 'GET',
            url: 'https://twinword-sentiment-analysis.p.rapidapi.com/analyze/',
            params: {text: 'great value in its price range!'},
            headers: {
              'X-RapidAPI-Key': 'ade09b653bmsh4e578ccb4e9956ep13ffb3jsn77a3ecdaf690',
              'X-RapidAPI-Host': 'twinword-sentiment-analysis.p.rapidapi.com'
            }
          })
        .then((response) => {
          setResponseData(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
      }, [])
      React.useEffect(() => {
        fetchData()
      }, [fetchData])
      
  return (
    <div className='mb-3 container '>
        <h1>Tone Analyzer :</h1>
        <h3>Write Something and we'll try to find the sentiment</h3>
         <textarea style={{backgroundColor:props.mode=="dark"?'grey':'white'}}  value={text} onChange={ChangeText} className="form-control tex-light" id="content" rows="5"></textarea>
         <button type="button center" onClick={fetchData}  className="btn btn-primary my-3 mx-2">Analyze</button>
         <h3>{responseData}</h3>

    </div>
  )
}
