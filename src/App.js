import React from 'react';
import logo from './logo.svg';
import './App.css';
import FaqSection from './components/FaqSection';

const questAns = [
  {id: 1, question: 'question1', answer : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan magna nec scelerisque vulputate. Cras auctor sapien vitae sem auctor molestie. In sed est ultricies, euismod urna sit amet, volutpat purus. Mauris facilisis turpis quis sapien tincidunt, at semper est varius. Maecenas ut sem ac lacus scelerisque cursus non eu odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin molestie risus leo, ac efficitur augue sollicitudin sit amet. Nunc tristique tempor ligula a imperdiet. Ut dignissim leo eu nunc vulputate aliquet. Cras scelerisque nulla eget molestie hendrerit.'},
  {id: 2, question: 'question2', answer : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan magna nec scelerisque vulputate. Cras auctor sapien vitae sem auctor molestie. In sed est ultricies, euismod urna sit amet, volutpat purus. Mauris facilisis turpis quis sapien tincidunt, at semper est varius. Maecenas ut sem ac lacus scelerisque cursus non eu odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin molestie risus leo, ac efficitur augue sollicitudin sit amet. Nunc tristique tempor ligula a imperdiet. Ut dignissim leo eu nunc vulputate aliquet. Cras scelerisque nulla eget molestie hendrerit.'},
  {id: 3, question: 'question3', answer : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan magna nec scelerisque vulputate. Cras auctor sapien vitae sem auctor molestie. In sed est ultricies, euismod urna sit amet, volutpat purus. Mauris facilisis turpis quis sapien tincidunt, at semper est varius. Maecenas ut sem ac lacus scelerisque cursus non eu odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin molestie risus leo, ac efficitur augue sollicitudin sit amet. Nunc tristique tempor ligula a imperdiet. Ut dignissim leo eu nunc vulputate aliquet. Cras scelerisque nulla eget molestie hendrerit.'},
  {id: 4, question: 'question4', answer : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan magna nec scelerisque vulputate. Cras auctor sapien vitae sem auctor molestie. In sed est ultricies, euismod urna sit amet, volutpat purus. Mauris facilisis turpis quis sapien tincidunt, at semper est varius. Maecenas ut sem ac lacus scelerisque cursus non eu odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin molestie risus leo, ac efficitur augue sollicitudin sit amet. Nunc tristique tempor ligula a imperdiet. Ut dignissim leo eu nunc vulputate aliquet. Cras scelerisque nulla eget molestie hendrerit.'},
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FaqSection questAns = {questAns}/>
    </div>
  );
}

export default App;
