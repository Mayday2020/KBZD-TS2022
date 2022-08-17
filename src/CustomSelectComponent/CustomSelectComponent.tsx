import React from 'react'

export type ItemType = {
    id: number
    value: string
    power: string
}
type SelectTitlePropsType = {
    title: string
    onClick: (collapsed: boolean)=> void
    collapsed: boolean
}
export type SelectBodyPropsType = {
    onClick: (item: ItemType) => void
    items: ItemType[]
}
export type SelectPropsType = {
    titleValue: string
    collapsed: boolean
    onClickTitle: (collapsed: boolean)=> void
    items:  ItemType[]
    onClick: (item: ItemType) => void
}

const SelectTitle = (props: SelectTitlePropsType) => {
    return (
        <h3 onClick={ () => { props.onClick(!props.collapsed) } }>-- {props.title} --</h3>
    )
}
const SelectBody = (props: SelectBodyPropsType) => {
    return (
        <ul>
            {props.items.map( (item, index) =>  <li onClick={()=>{props.onClick(item)}} key={index}>{item.value}</li>) }
        </ul>
    )
}
const CustomSelectComponent = (props: SelectPropsType) => {
    return (
        <div>
            <SelectTitle title={props.titleValue} onClick={props.onClickTitle} collapsed={props.collapsed}/>
            {!props.collapsed && <SelectBody onClick={props.onClick} items={props.items}/>}
        </div>
    )
}

export default CustomSelectComponent