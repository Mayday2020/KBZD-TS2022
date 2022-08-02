import React, {useRef, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

type InputTypeProps = {
    value?: string
}

const Input = (props: InputTypeProps) => {
    return <input value={props.value && props.value}/>
}

export default {
    title: 'Example/Input',
    component: Input,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Input>;

const Template = (args: InputTypeProps) => <input {...args}/>;

export const UncontrolledInput = Template.bind({})

export const UncInputTrack = () => {
    const [value, setValue] = useState('')
    return (
        <>
            <input onChange={(e) => {
                setValue(e.currentTarget.value)
            }}/> - {value}
        </>
    )
}

export const UncInputTrackBtn = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null);


    return (
        <>
            <input ref={inputRef}/> <button onClick={(e) => {
                let el = inputRef.current as HTMLInputElement
                setValue(el.value)
            }}> save </button> actual value - {value}
        </>
    )
}
export const ControlledInputFixed = () => <input value={'fixed value'}/>


