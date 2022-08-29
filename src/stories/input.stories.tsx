import React, {ChangeEvent, useRef, useState} from 'react';
import {ComponentMeta} from '@storybook/react';

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

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChange} />
}

export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState(false)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return <input type={'checkbox'} checked={parentValue} onChange={onChange}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('3')
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <select onChange={onChange} value={parentValue}>
            <option value="0">none</option>
            <option value="1">Avengers</option>
            <option value="2">Avengers - Age of Ultron</option>
            <option value="3">Avengers - Infinity war</option>
            <option value="4">Avengers - Final</option>
        </select>
    )
}











