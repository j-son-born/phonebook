import { useEffect, useRef, useState } from "react"

function PeopleForm({ people, setPeople, currentId, setCurrentId, idGenerator, setFormKey}) {
    const [person, setPerson] = useState({firstName: '', lastName: '', phone:''})
    const firstNameRef = useRef(null);

    useEffect(() => {
        const editPerson = ((id) => {
            if (!id) return;

            console.group('selectPerson');

            const currentPerson = people.find(p=> p.id == id);

            if(currentPerson){
                console.table(currentPerson);
                setPerson(currentPerson);
            }

            console.groupEnd();
        })

        if (currentId) {
            editPerson(currentId);
            firstNameRef.current.focus();
        }
    }, [people, currentId, setCurrentId, setPerson]);

    function handleChange(e){
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit() {
        if (currentId) {
            let oldPerson = people.find(p => p.id == currentId);
            if (oldPerson) {
                console.log('Edited:', currentId);
                console.table([oldPerson, person], ['firstName', 'lastName', 'phone']);
                Object.assign(oldPerson, person);
            }
        } else {
            const id = idGenerator.next().value,
                newPerson = { id, ...person };

            setPeople([...people, { id, ...person }]);
            console.table(newPerson);
        }

        setCurrentId(null);
        setPerson({firstName: '', lastName:'', phone: ''});
        firstNameRef.current.focus();
    }
    
    function clearForm() {
        setCurrentId(null);
        setFormKey(fk => fk + 1);
    }

    return (
        <div>
            <form action={handleSubmit}>
                <div>
                    <md-filled-text-field  ref={firstNameRef} id="firstName" label="First Name" name="firstName" value={person.firstName} onChange={handleChange} />
                    <md-filled-text-field  id="lastName" label="Last Name" name="lastName" value={person.lastName} onChange={handleChange} />
                    <md-filled-text-field  id="phone" label="Phone" name="phone" value={person.phone} onChange={handleChange} />
                </div>
                <div>
                    <md-filled-button type="submit">Submit</md-filled-button>
                    <md-filled-button type="reset" onClick={clearForm}>Clear</md-filled-button>
                </div>
            </form>
        </div>
    )
}

export default PeopleForm