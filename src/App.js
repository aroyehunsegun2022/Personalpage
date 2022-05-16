import Navbars from './components/navbar';
import Bodyfunc from './components/body';
import Footernav from './components/footer';
import Stacksfun from './components/stacks';
import Main from './components/main';
 

function App() {
  return (
    <div className="App">
      <Navbars></Navbars>
      <Main />
      <Bodyfunc></Bodyfunc>
      <Stacksfun></Stacksfun>
      <Footernav></Footernav>
 
      
     
      
    </div>
  );
}

export default App;
