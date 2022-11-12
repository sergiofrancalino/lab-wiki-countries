import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    
      <Navbar />

      <div className="container">
          <div className="row">
             <CountriesList countries={countries} />
             {/* React-Router Route rendering the CountryDetails should go here */}
         </div>
      </div>

  </div>
  );
}

export default App;
