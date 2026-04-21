function PeopleList({ people }) {
    return (
        <div className="list">
            <div className="listTitle">
                <div>Id</div>
                <div>First</div>
                <div>Last</div>
                <div>Phone</div>
            </div>
            {
                people.map((person) => {
                    return (
                        <div className="listItem" key={person.id} onClick={()=>{console.log({person});
                        }}>
                            <div>{person.id}</div>
                            <div>{person.firstName}</div>
                            <div>{person.lastName}</div>
                            <div>{person.phone}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PeopleList;