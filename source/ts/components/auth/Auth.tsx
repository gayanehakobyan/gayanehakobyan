import * as React from "react"

import Button from "../reusebale/button/Button";
import Input from "../reusebale/input/Input";
import firebase, {auth} from "../../firebase/Firebase.js";
import {useState} from "react";
import {IAuthProps} from "../../../../types/components/auth/IAuth";
import UserInfo from "../user-info/UserInfo";
import LogIn from "./logIn/Login";
import SignUp from "./signUp/SignUp";



const Auth: React.FunctionComponent<IAuthProps> = (props: IAuthProps) => {

    const [logIn, setLogIn] = useState<boolean>(null)
    const {setUser} = props


    const onClickHandler = (e:React.MouseEvent) => {
        console.log("mtaaaaaaaav")
        e.preventDefault()
       // auth.createUserWithEmailAndPassword("testdsdf", "password")
    }


    return <div >
        {
            logIn !== null ? logIn ? <LogIn setUser={setUser}/> : <SignUp setUser={setUser}/> : (
                <div className="auth-section">
                    <Button onClick = {() => setLogIn(true)} text={"LogIn"} type="button"/>
                    <Button  onClick = {() => setLogIn(false)}  text={"Sign Up"} type="button"/>
                </div>
            )
        }

    </div>

}


export default Auth