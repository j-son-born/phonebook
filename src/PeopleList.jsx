function PeopleList({ people, setPeople, setCurrentId}) {

    function deletePerson(p){
            console.group('deletePerson');
            console.table(p);
            
            if (confirm('Are you suuuuuure?')) {
                (async (id) => {
                    people.splice(people.findIndex(x => x.id == id), 1);
                })(p.id).then(() => {
                    setPeople([...people]);
                    console.log("DID delete");
                })
            } else {
                console.log("DID NOT delete");
            }
            console.groupEnd();
    }
        
    return (
        people.length < 1
            ? <span>Nothing to see here</span>
            : <div className="peopleList">
                <div className="listItem">
                    <div>Id</div>
                    <div>First</div>
                    <div>Last</div>
                    <div>Phone</div>
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                {
                    people.map(p => {
                        return (
                            <div key={p.id} className="listItem">
                                <div>{p.id}</div>
                                <div>{p.firstName}</div>
                                <div>{p.lastName}</div>
                                <div>{p.phone}</div>
                                <div>
                                    <span className="material-symbols-outlined" onClick={() => setCurrentId(p.id)}> edit </span>
                                    <span className="material-symbols-outlined" onClick={() => deletePerson(p)}> delete </span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
    )
}

export default PeopleList;