import React from 'react'
import {ComponentMeta} from "@storybook/react";

const NewMessagesCounter = (props: { count: number }) => {
    return (
        <div>{props.count}</div>
    )
}
const Users = (props: { users: Array<string> }) => {
    return (
        <div>
            {props.users.map((u: string, i: any) => <div key={i}>{u}</div>)}
        </div>
    )
}

export const Example1 = () => {
    return (
        <>
            <NewMessagesCounter count={1}/>
            <Users users={['Dmitriy', 'Artem', 'Viktor']}/>
        </>
    )
}
export default {
    title: 'React.memo demo',
    component: Example1
} as ComponentMeta<typeof Example1>


