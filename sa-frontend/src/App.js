import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Polarity from './components/Polarity';

const style = {
  marginLeft: 12,
};

function App() {
  const [{ sentence, polarity }, setState] = React.useState({ sentence: '', polarity: null });

  const textField = React.useRef();

  function analyzeSentence() {
    fetch('http://localhost:8080/sentiment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sentence: textField.current.getValue() }),
    })
      .then(response => response.json())
      .then(data => this.setState(data));
  }

  const onEnterPress = e => {
    if (e.key === 'Enter') {
      analyzeSentence();
    }
  };

  return (
    <MuiThemeProvider>
      <div className="centerize">
        <Paper zDepth={1} className="content">
          <h2>Sentiment Analyser</h2>
          <TextField ref={textField} onKeyUp={onEnterPress} hintText="Type your sentence." />
          <RaisedButton label="Send" style={style} onClick={analyzeSentence} />
          {polarity && <Polarity sentence={sentence} polarity={polarity} />}
        </Paper>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
