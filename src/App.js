import './App.css';
import About from './Component/About';
import Return from "./Component/ReturnPolicy"
import Information from "./Component/InformationPage";
import Privacy from './Component/Privacy';

function App() {
  return (
    <div>
        <About />
        <Return />
        <Information />
        <Privacy/>
     </div>
  );
}

export default App;
