import * as React from "react"
import Button from "../../reusebale/button/Button"
import Input from "../../reusebale/input/Input";
import {auth} from "../../../firebase/Firebase.js";
import {useState} from "react";
import { ILogInProps } from "../../../../../types/components/auth/logIn/ILogIn";


const LogIn: React.FunctionComponent<ILogInProps> = (props: ILogInProps) => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const {setUser} = props

    // const onClickHandler = (e:React.MouseEvent) => {
    //     console.log("mtaaaaaaaav")
    //     e.preventDefault()
    //     auth.createUserWithEmailAndPassword("testdsdf", "password")
    // }


    //login user
    const signInHandler = (e:React.MouseEvent) => {
        console.log(email, password)
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password).then((user) => {
            console.log("user sign in")
            setUser(user)
        });
    }


    return <div className="auth-section">
                <div className="auth-popap">
                    <div className="auth-popap-header">
                        <h1> Login </h1>
                    </div>
                    <form>
                        <div>
                            <div>
                                <Input value ={email} placeholder ={"Email"} onChange = {(e) => setEmail(e.currentTarget.value)}/>
                                <Input value = {password} placeholder ={"Password"} onChange = {(e) => setPassword(e.currentTarget.value)}/>
                            </div>

                            <div className="footer">
                                <Button
                                    type = "submit"
                                    text = "Submit"
                                    className='blue-btn'
                                    onClick = {signInHandler}
                                />
                            </div>
                        </div>
                    </form>
                </div>
       </div>

}


export default LogIn