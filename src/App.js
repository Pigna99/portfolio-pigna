import {Content, Title, Menu, Time, Cursor} from "./components/index";



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
      <Cursor/>
    </div>
  );
}

export default App;
