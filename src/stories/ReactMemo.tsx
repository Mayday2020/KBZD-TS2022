import React, {useState} from 'react'

const NewMessagesCounterSecret = (props: { count: number }) => {
    console.log('newMessageCounter')
    return (
        <div>{props.count}</div>
    )
}
const UsersSecret = (props: { users: Array<string> }) => {
    console.log('users')
    return (
        <div>
            {props.users.map((u: string, i: any) => <div key={i}>{u}</div>)}
        </div>
    )
}
const Users = React.memo(UsersSecret)
const NewMessagesCounter = React.memo(NewMessagesCounterSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dmitriy', 'Artem', 'Viktor'])
    const addUser = () => {
        const newUsers = [...users, 'Sveta ' + new Date().getTime()]
        setUsers(newUsers)
        console.log('users is: ' + newUsers)
    }
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}> + </button>
            <button onClick={addUser}> add user </button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </>
    )
}


