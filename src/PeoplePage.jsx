import { useEffect, useState } from "react";

function PeoplePage({idGenerator}) {
    const [people, setPeople] = useState([]);
    const [currentId, setCurrentId] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(()=>{
        console.log('currentId', currentId);
    }, [currentId]);

    function handleSubmit(e) {
        e.preventDefault();
        if (currentId) {
            let oldPerson = people.find(p => p.id == currentId);
            Object.assign(oldPerson, { firstName, lastName, phone });
        } else {
            const id = idGenerator.next().value;
            setPeople([...people, { id, firstName, lastName, phone }]);
        }

        setCurrentId(null);
        [setFirstName, setLastName, setPhone].forEach(fn => fn(''));
        document.getElementById('firstName').focus();
    }

    function clearForm(){
        setCurrentId(null);
        [setFirstName, setLastName, setPhone].forEach(fn => fn(''));
    }

    function selectPerson(p) {
        console.group('selectPerson');
        console.table(p);
        console.groupEnd();

        (async (id) => {
            return people.find(p => p.id == id);
        })(p.id).then(currentPerson => {
            setCurrentId(currentPerson.id);
            setFirstName(currentPerson.firstName);
            setLastName(currentPerson.lastName);
            setPhone(currentPerson.phone);
        })
    }

    function deletePerson(p) {
        console.group('deletePerson');
        console.table(p);
        console.groupEnd();
        
        if(confirm('Are you suuuuuure?')){
            (async (id)=>{
                people.splice(people.findIndex(x => x.id == id), 1);
            })(p.id).then(()=>{
                setPeople([...people]);
            })
        }
    }

    return (
        <>
            <div>
                <form>
                    <label htmlFor="firstName">First Name:
                        <input type="text" id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
                    </label>
                    <label htmlFor="lastName">Last Name:
                        <input type="text" id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
                    </label>
                    <label htmlFor="phone">Phone:
                        <input type="text" id="phone" value={phone} onChange={e => setPhone(e.target.value)} />
                    </label>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                    <button type="reset" onClick={clearForm}>Clear</button>
                </form>
            </div>
            {
                people.length < 1
                    ? <span>Nothing to see here</span>
                    : <div className="peopleList">
                        <div className="listItem">
                            <div>Id</div>
                            <div>First</div>
                            <div>Last</div>
                            <div>Phone</div>
                            <div></div>
                        </div>
                        {
                            people.map(p => {
                                return (
                                    <div key={p.id} className="listItem">
                                        <div>{p.id}</div>
                                        <div>{p.firstName}</div>
                                        <div>{p.lastName}</div>
                                        <div>{p.phone}</div>
                                        <span className="material-symbols-outlined" onClick={() => selectPerson(p)}> edit </span>
                                        <span className="material-symbols-outlined" onClick={() => deletePerson(p)}> delete </span>
                                    </div>
                                )
                            })
                        }
                    </div>
            }
        </>
    )
}

export default PeoplePage;