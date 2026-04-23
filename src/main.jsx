import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function* idg(){
  let i = 1;
  while(true){
    yield i++;
  }
}

const idGenerator = idg();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App idGenerator={idGenerator} />
  </StrictMode>
)