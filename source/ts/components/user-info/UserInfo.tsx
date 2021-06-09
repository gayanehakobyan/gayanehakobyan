import * as React from "react"
import {auth, db} from "../../firebase/Firebase"
import {useState} from "react";
import Button from "../reusebale/button/Button";
import { IUserInfoProps } from "../../../../types/components/user-info/IUserInfo";

const UserInfo: React.FunctionComponent<IUserInfoProps> = (props) => {
    const [userData, setUserData] = useState<any>(null)



    React.useEffect(() => {
        getCollection(props.user.uid);
    }, [])


    // get user data in collection
    const getCollection = (userId?: any) => {
        db.collection("users").doc(userId).get().then((doc: any) => {
            console.log("dfgvdfg", doc.data())
            setUserData(doc.data())

        }, error => {
            console.log("err", error.message)
        })
    }

    //logout user
    const onSignOutHandler = () => {
        auth.signOut().then(() => {
            props.setUser(null);
        });
    }



    return <div >

        <Button onClick={onSignOutHandler} text={"LogOut"} type="button"/>
        <div>
           Email {props.user.email}
            < br />
            {
                userData ?  `Name ${userData.name}` : ""
            }
        </div>

    </div>

}


export default UserInfo