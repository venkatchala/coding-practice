import { useFetch } from "../utils/useFetch";

const UserList = () => {
    const { data: users } = useFetch(
      "https://jsonplaceholder.typicode.com/users"
    );
       
    // if (loading) {
    //     <h1>Loading...</h1>
    // }
        return (
            <ul>
                {
                    users.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>
        )
    
}

export default UserList;