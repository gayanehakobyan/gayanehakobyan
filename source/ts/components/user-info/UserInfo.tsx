import * as React from "react"
import {auth, db} from "../../firebase/Firebase"
import {useState} from "react";
import Button from "../reusebale/button/Button";
import { IUserInfoProps } from "../../../../types/components/user-info/IUserInfo";
import {withPagination} from "../reusebale/pagination/withPagination";

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


console.log('1111ghhtrfcd', props)
    return <div className="user-list-section">

        <Button onClick={onSignOutHandler} text={"LogOut"} type="button"/>
        <div>
           Email {props.user.email}
            < br />
            {
                userData ?  `Name ${userData.name}` : ""
            }
        </div>
        <section>
        {
            props.list.length ?
                <div className = "scrolable-content">
                    <table className="table-container">
                        <thead>
                            <tr>
                                {
                                    ["name", "fullname", "createdAt"].map((item, i) => <th key={i}>{item}</th> )
                                }
                            </tr>
                        </thead>
                        <tbody>
                           {
                               props.list.map((userItem, i) => <tr key={i}>
                                   {
                                       ["name", "fullname", "createdAt"].map((value) => <td>{userItem.data()[value]}</td>)
                                   }
                               </tr> )
                           }
                        </tbody>
                        </table>
                </div>: null
        }
        </section>
        {
            props.children
        }
    </div>

}


export default withPagination({
    Component: UserInfo,
});