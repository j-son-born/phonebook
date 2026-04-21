import { useState } from "react"

function PeopleForm({ people, setPeople}) {
    const [formData, setFormData] = useState({});
    
    // const idGenerator = (function* () {
    //     let i = 1;
    //     while (true) {
    //         yield i;
    //         i += 1;
    //     }
    // })();

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        const id = people.length ? people.length + 1 : 1,
        person = {id, ...formData};
        console.table('handleSubmit', person);

        
        setPeople([...people, person]);
        setFormData({ firstName: "", lastName: "", phone: "" });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="formRow">
                <label>First Name:
                    <input type="text" name="firstName" id="firstName" onChange={handleChange} />
                </label>
            </div>
            <div className="formRow">
                <label>Last Name:
                    <input type="text" name="lastName" id="lastName" onChange={handleChange} />
                </label>
            </div>
            <div className="formRow">
                <label>Phone:
                    <input type="text" name="phone" id="phone" onChange={handleChange} required />
                </label>
            </div>
            <div className="formRow">
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default PeopleForm