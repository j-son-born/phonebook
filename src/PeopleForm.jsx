import { useEffect, useState } from "react"

function PeopleForm({ people, setPeople, currentId, setCurrentId, idGenerator, setFormKey}) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        const editPerson = ((id) => {
            if (!id) return;

            console.group('selectPerson');

            const currentPerson = people.find(p=> p.id == id);

            if(currentPerson){
                console.table(currentPerson);
                setFirstName(currentPerson.firstName);
                setLastName(currentPerson.lastName);
                setPhone(currentPerson.phone);
            }

            console.groupEnd();
        })

        if (currentId) {
            editPerson(currentId);
            document.getElementById('firstName').focus();
        }
    }, [people, currentId, setCurrentId, setFirstName, setLastName, setPhone]);

    function handleSubmit() {
        if (currentId) {
            let oldPerson = people.find(p => p.id == currentId);
            if (oldPerson) {
                console.log('Edited:', currentId);
                console.table([oldPerson, { firstName, lastName, phone }], ['firstName', 'lastName', 'phone']);
                Object.assign(oldPerson, { firstName, lastName, phone });
            }
        } else {
            const id = idGenerator.next().value,
                newPerson = { id, firstName, lastName, phone };

            setPeople([...people, { id, firstName, lastName, phone }]);
            console.table(newPerson);
        }

        setCurrentId(null);
        [setFirstName, setLastName, setPhone].forEach(fn => fn(''));
        document.getElementById('firstName').focus();
    }
    
    function clearForm() {
        setCurrentId(null);
        setFormKey(fk => fk + 1);
    }

    return (
        <div>
            <form action={handleSubmit}>
                <div>
                    <md-filled-text-field  id="firstName" label="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
                    <md-filled-text-field  id="lastName" label="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
                    <md-filled-text-field  id="phone" label="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
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