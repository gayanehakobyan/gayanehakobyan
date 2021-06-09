import * as React from "react"
import {useState} from "react"
import { IMainProps } from "../../../types/Main";
import {auth, db} from "../firebase/Firebase"
import Auth from "./auth/Auth";
import UserInfo from "./user-info/UserInfo";


function App(props:IMainProps) {

    const [user, setUser] = useState<any>(null)

    React.useEffect(() => {
        auth.onAuthStateChanged((user:any) => {
            if(user){
                setUser(user)
            } else {
                setUser(null)
            }
        })
    }, [])

console.log("mainuset", user)
    return (
        <div className="App">
            {
                user ? <UserInfo user={user} setUser={setUser}/> : <Auth user={user} setUser={setUser}/>
            }
        </div>
    );
}

export default App;
