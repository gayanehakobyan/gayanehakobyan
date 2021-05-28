import * as React from "react"
import {useState} from "react"

function App() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState<any>(null)
    const [guides, setGuides] = useState<any>(null)
    const [name, setName] = useState<any>("")
    const [fullname, setFullname] = useState<any>("")
    const [userData, setUserData] = useState<any>(null)


    // get user data in collection
    return (
        <div className="App">
            {
                user ? <div>{user.email}</div> : <div>no user</div>
            }
            {
                userData ? <div>{userData.name}</div> : null
            }
            <input value ={username} onChange = {(e) => setUsername(e.currentTarget.value)}/>
            <input value = {password} onChange = {(e) => setPassword(e.currentTarget.value)}/>
            <button>
                Submit
            </button>
            <button >
                log out
            </button>
            <button >
                log in
            </button>

            <div>
                <input value ={name} onChange = {(e) => setName(e.currentTarget.value)}/>
                <input value = {fullname} onChange = {(e) => setFullname(e.currentTarget.value)}/>
                <button >
                    Create guides
                </button>
            </div>
        </div>
    );
}

export default App;
