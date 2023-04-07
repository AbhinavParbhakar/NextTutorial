import { User } from "./interfaces";

export default function UserData(props:{user:User}){
    let user:User = props.user
    return(
        <>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </>
    )
}