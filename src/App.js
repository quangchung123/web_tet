import logo from './logo.svg';
import './App.css';
import Header from "./component/Header";
import Content from "./component/Content";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
        <div>
            <Header />
        </div>
        <div>
            <Content />
        </div>
        <div>
            <Footer />
        </div>
    </div>
  );
}

export default App;
