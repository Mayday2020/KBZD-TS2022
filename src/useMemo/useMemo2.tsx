import React, {useMemo, useState} from 'react'


const UsersSecret = (props: { users: Array<string> }) => {
    console.log('users')
    return (
        <div>
            {props.users.map((u: string, i: any) => <div key={i}>{u}</div>)}
        </div>
    )
}
const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dmitriy', 'Artem', 'Viktor'])

    const newArrayUsers = useMemo(() => {
        let newArrayDepend = users.filter( u => u.toLowerCase().indexOf('a') > -1)
        return newArrayDepend
    }, [users])
    const addUser = () => {
        const newUsers = [...users, 'Svetlana ' + new Date().getTime()]
        setUsers(newUsers)
        console.log('users is: ' + newUsers)
    }
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}> + </button>
            {counter}
            <Users users={newArrayUsers}/>
            <button onClick={addUser}> add user </button>
        </>
    )
}


