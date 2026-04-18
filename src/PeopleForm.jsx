import { useEffect, useState } from "react"

function PeopleForm({ people, setPeople }) {
    const [formData, setFormData] = useState({});
    useEffect(() => {
        console.log('moo', formData);
    }, [formData]);

    const idGenerator = (function* () {
        let i = 1;
        while (true) {
            yield i;
            i += 1;
        }
    })();

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((oldFormData) => ({ ...oldFormData, [name]: value }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        const id = idGenerator.next().value;
        const { firstName, lastName, phone } = formData;
        const person = { id, firstName, lastName, phone };
        console.log(person);

        setPeople([...people, person]);
        setFormData({ firstName: "", lastName: "", phone: "" });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>First Name:
                <input type="text" name="firstName" id="firstName" onChange={handleChange} />
            </label>
            <label>Last Name:
                <input type="text" name="lastName" id="lastName" onChange={handleChange} />
            </label>
            <label>Phone:
                <input type="text" name="phone" id="phone" onChange={handleChange} required />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default PeopleForm