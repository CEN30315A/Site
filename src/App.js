import React from 'react';
import logo from './logo.svg';
import './App.css';
import Section from './components/SectionComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Section title="About Us" body= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut eleifend diam. Morbi finibus commodo sem vitae cursus. Sed ac justo risus. Phasellus quis dui non tortor aliquet hendrerit. Nam eu ligula ante. Maecenas fermentum lobortis ex, vitae rutrum turpis sollicitudin eget. Duis non eleifend ex, eu mollis urna. Nullam aliquet pellentesque condimentum. Integer at est ut risus eleifend fermentum a id lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean venenatis eleifend felis, id tincidunt nisl. Sed elementum, purus et accumsan imperdiet, lectus sem feugiat urna, vel ultrices risus turpis rhoncus enim."/>
        <Section title="FAQ" body= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut eleifend diam. Morbi finibus commodo sem vitae cursus. Sed ac justo risus. Phasellus quis dui non tortor aliquet hendrerit. Nam eu ligula ante. Maecenas fermentum lobortis ex, vitae rutrum turpis sollicitudin eget. Duis non eleifend ex, eu mollis urna. Nullam aliquet pellentesque condimentum. Integer at est ut risus eleifend fermentum a id lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean venenatis eleifend felis, id tincidunt nisl. Sed elementum, purus et accumsan imperdiet, lectus sem feugiat urna, vel ultrices risus turpis rhoncus enim."/>
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
    </div>
  );
}

export default App;
