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

    function out(arr,number){
        let defolt = false
        let i = 0
        for(;i<arr.length;i++){
            if(arr[i] === number){
                defolt = true
                break
            }
        }
        if(defolt === false){
            arr.push(number)
            return arr
        }else{
            for(let j = i;j<=i;j++){
                arr[j] = arr[j+1]
            }
            arr.pop()
        }
        return arr
    }


    function removeOrAddItem(arr,number)
    {
        let isfindRemoveAbleItem = false
        for(let i=0; i< arr.length; i++) {
            if(arr[i] === number)
            {
                isfindRemoveAbleItem = true
            }

            if(isfindRemoveAbleItem){
                if( i !== arr.length-1)
                {
                    arr[i] = arr[i+1]
                } else {
                    arr.pop();
                }
            }
        }

        if(!isfindRemoveAbleItem) {
            arr.push(number)
        }

        return arr;
    }
    //console.log("mainuset", user)
    return (
        <div className="App">
            {
                user ? <UserInfo user={user} setUser={setUser}/> : <Auth user={user} setUser={setUser}/>
            }
        </div>
    );
}

export default App;
