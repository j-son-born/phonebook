import { useEffect, useState } from "react"

function PeopleForm({ people, setPeople, currentId, setCurrentId, idGenerator }) {
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
        [setFirstName, setLastName, setPhone].forEach(fn => fn(''));
    }

    return (
        <div>
            <form action={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name:
                        <input type="text" id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
                    </label>
                    <label htmlFor="lastName">Last Name:
                        <input type="text" id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
                    </label>
                    <label htmlFor="phone">Phone:
                        <input type="text" id="phone" value={phone} onChange={e => setPhone(e.target.value)} />
                    </label>
                </div>
                <div>
                    <button type="submit">Submit</button>
                    <button type="reset" onClick={clearForm}>Clear</button>
                </div>
            </form>
        </div>
    )
}

export default PeopleForm