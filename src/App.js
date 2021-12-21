import {Content, Title, Menu, Time} from "./components/index";


function App() {
  return (
    <div className="App">
      <div className="main">        
        <div className="content-main">
          <Title/>
          <Content/>
        </div>
        <div className="content-menu">
          <Menu/>
          <Time/>
        </div>
        
      </div> 
    </div>
  );
}

export default App;
