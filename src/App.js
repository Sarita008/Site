import './App.css';
import About from './Component/About';
import Return from "./Component/ReturnPolicy"
import Information from "./Component/InformationPage";
import Privacy from './Component/Privacy';
import FAQs from './Component/FAQ';
import Contact from "./Component/Contact";


function App() {
  return (
    <div>
        <About />
        <Return />
        <Information />
        <Privacy/>
        <FAQs />
        <Contact />
     </div>
  );
}

export default App;
