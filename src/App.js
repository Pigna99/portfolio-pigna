import {Content, Title, Menu, Time, Cursor} from "./components/index";
import { useGlobalContext } from './context';



function App() {
  const {isMenuOpen} = useGlobalContext();
  return (
    <div className="App">
      <div className="main">        
        <div className="content-main">
          <Title/>
          <Content/>
        </div>
        <div className={"content-menu" + (!isMenuOpen ? " close-menu" : "")}>
          <Menu/>
          <Time/>
        </div>
      </div> 
      <Cursor/>
    </div>
  );
}

export default App;
