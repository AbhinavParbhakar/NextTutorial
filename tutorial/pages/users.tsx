import { User } from "@/components/interfaces";
import UserData from "@/components/userData";

export default function Users(props:{userList:User[]}){
    const users:User[] = props.userList;
    return(
        <><h1>List of users</h1>
        {
            users.map((user:User) => {
            return(
                <div key={user.id}>
                    <UserData user={user}/>
                </div>
            )})
        }
        </>
    )
}

export async function getStaticProps(){
    const response: Response = await fetch("https://jsonplaceholder.typicode.com/users")
    const userJson:User[] = await response.json();

    return {
        props:{
            userList:userJson,
        },
    }
}