import './App.css';
import Footer from './components/Footer.components';
import Header from './components/Header.components';
import Left from './components/Left.components';
import Right from './components/Right.components';

function App() {
  return (
    <div className="Main">
      <Header/>
      <div className="App">
        <Left/>
        <Right/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
