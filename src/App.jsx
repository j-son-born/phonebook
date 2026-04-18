import { useState } from 'react'
import './App.css'
import PeopleForm from './PeopleForm';
import PeopleList from './PeopleList';

function App() {
  const[people, setPeople] = useState([]);
  return (
    <div>
      <PeopleForm people={people} setPeople={setPeople}/>
      <PeopleList people={people} setPeople={setPeople}/>
    </div>
  )
}

export default App
