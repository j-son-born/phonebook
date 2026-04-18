function PeopleList({people}){
    return (
        <table>
                    <thead>
                        <tr>

                        <th>Id</th>
                        <th>First</th>
                        <th>Last</th>
                        <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
            {
                people.map(function (person){
                    return (

                        <tr key={person.id}>
                            <td>{person.id}</td>
                            <td>{person.firstName}</td>
                            <td>{person.lastName}</td>
                            <td>{person.phone}</td>

                        </tr>
                        // <li key={person.userId}>{person.firstName} {person.lastName}: {person.phone}</li>
                    )
                })
            }
            </tbody>
        </table>
    )
}

export default PeopleList;