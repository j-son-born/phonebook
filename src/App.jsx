import './App.css'
import PeoplePage from './PeoplePage';

function* idg(){
  let i = 1;
  while(true){
    yield i++;
  }
}

const idGenerator = idg();

function App() {
  return (
    <PeoplePage idGenerator={idGenerator}/>
  )
}

export default App
