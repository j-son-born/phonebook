import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

function LoginPage() {
    const {currentUser, setCurrentUser} = useContext(UserContext);
    const [credentials, setCredentials] = useState({u: '', p: ''});

    function handleChange(e){
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(){
        console.table(credentials);
        if(credentials.u != '' && credentials.p == 'pass'){
            console.log('yup');
            setCurrentUser({name: credentials.u});
            setCredentials({u: '', p: ''});
        } else {
            console.log('nope');
        }
    }

    if(!currentUser){
        return (
            <div>
                <form action={handleSubmit}>
                    <div>
                        <md-filled-text-field  id="username" label="Username" name="u" value={credentials.u} onChange={handleChange} />
                        <md-filled-text-field  id="lastName" label="Password" name="p" value={credentials.p} onChange={handleChange} />
                    </div>
                    <div>
                        <md-filled-button type="submit">Submit</md-filled-button>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginPage;