import * as React from "react";
import Button from "../../reusebale/button/Button";
import Input from "../../reusebale/input/Input";
import {auth, db} from "../../../firebase/Firebase.js";
import {useState} from "react";
import {ISignUpProps} from "../../../../../types/components/auth/signUp/ISignUp";

const SignUp: React.FunctionComponent<ISignUpProps> = (props: ISignUpProps) =>
{
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [name, setName] = useState<any>("");
    const [fullname, setFullname] = useState<any>("");
    const {setUser} = props;

    // create user in auth
    const onSignUpHandler = (e: React.MouseEvent) =>
    {
        console.log("create user");
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((cred: any) =>
        {
            console.log("cred", cred);
            setUser(cred.user);
            // create in firestore collection with user id and keep in it data
            return db.collection("users").doc(cred.user.uid).set({
                fullname,
                name,
                "createdAt": Math.floor(Date.now() / 1000)
            });
        }).then(() =>
        {
            setEmail("");
            setPassword("");
        });
    };

    return <div className="auth-section">
        <div className="auth-popap">
            <div className="auth-popap-header">
                <h1> Sign up </h1>
            </div>
            <form>
                <div>

                    <div>
                        <Input value={email} placeholder={"Email"} onChange={(e) => setEmail(e.currentTarget.value)}/>
                        <Input value={password} placeholder={"Password"}
                               onChange={(e) => setPassword(e.currentTarget.value)}/>
                    </div>
                </div>

                <div>
                    <Input value={name} placeholder={"Name"} onChange={(e) => setName(e.currentTarget.value)}/>
                    <Input value={fullname} placeholder={"fullname"}
                           onChange={(e) => setFullname(e.currentTarget.value)}/>
                </div>
                <div className="footer">
                    <Button
                        type="submit"
                        text="Submit"
                        className="blue-btn"
                        onClick={onSignUpHandler}
                    />
                </div>
            </form>
        </div>
    </div>;

};


export default SignUp;