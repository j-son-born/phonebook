import { useState } from "react";
import PeopleForm from "./PeopleForm";
import PeopleList from "./PeopleList";

function PeoplePage({idGenerator}) {
    const [people, setPeople] = useState([]);
    const [currentId, setCurrentId] = useState(null);
    const [formKey, setFormKey] = useState(0);

    return (
        <>
        <PeopleForm key={formKey} people={people} setPeople={setPeople} currentId={currentId} setCurrentId={setCurrentId} setFormKey={setFormKey} idGenerator={idGenerator} />
        <PeopleList people={people} setPeople={setPeople} setCurrentId={setCurrentId} />
        </>
    )
}

export default PeoplePage;