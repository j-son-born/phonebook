import { useState } from "react";
import PeopleForm from "./PeopleForm";
import PeopleList from "./PeopleList";

function PeoplePage({idGenerator}) {
    const [people, setPeople] = useState([]);
    const [currentId, setCurrentId] = useState(null);

    return (
        <>
        <PeopleForm people={people} setPeople={setPeople} currentId={currentId} setCurrentId={setCurrentId} idGenerator={idGenerator} />
        <PeopleList people={people} setPeople={setPeople} setCurrentId={setCurrentId} />
        </>
    )
}

export default PeoplePage;