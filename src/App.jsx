import { useState } from 'react';
import './App.css'
import PeoplePage from './PeoplePage';
import LoginPage from './LoginPage';
import { UserContext } from './UserContext';
import Menu from './Menu';

function* idg(){
  let i = 1;
  while(true){
    yield i++;
  }
}

const idGenerator = idg();

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <UserContext value={{currentUser, setCurrentUser}}>
      <Menu />
      <LoginPage />
      <PeoplePage idGenerator={idGenerator}/>
    </UserContext>
  )
}