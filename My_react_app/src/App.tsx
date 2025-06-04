import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

// mustelines comment
{/*}
function NormalAppFunc() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <Header/>{/*  originally this was <Header></Header> 
      <h1 className="font-bold text-blue-700">Welcome Home </h1>
      <div className="bg-gray-900 text-white p-4 flex items-center gap-2">
      <FontAwesomeIcon icon={faRocket} className="text-yellow-500 text-lg"/>
      <h1>Launch Sequence Initiated</h1>
    </div>
      

    <Footer/>
    </>
  );
} 
*/}

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <h1 className="font-bold text-blue-700">Welcome Home</h1>
      <div className="bg-gray-900 text-white p-4 flex items-center gap-2">
        <FontAwesomeIcon icon={faRocket} className="text-yellow-500 text-lg" />
        <h1>Launch Sequence Initiated</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
