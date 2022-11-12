
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">

      <Navbar />

      <div className="container">
          <div className="row">
             <CountriesList countries={CountriesList} />
             {/* React-Router Route rendering the CountryDetails should go here */}
         </div>
      </div>

  </div>
  );
}

export default App;
