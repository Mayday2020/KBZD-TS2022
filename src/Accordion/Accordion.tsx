import React from "react";

type AccordionTitlePropsType = {
    title: string
    onClick: (collapsed: boolean)=> void
    collapsed: boolean
}
export type ItemType = {
    id: number
    value: string
    power: string
}
export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClickTitle: (collapsed: boolean)=> void
    items:  ItemType[]
    onClick: (item: ItemType) => void
}
export type AccordionBodyPropsType = {
    onClick: (item: ItemType) => void
    items: ItemType[]
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 onClick={ () => { props.onClick(!props.collapsed) } }>-- {props.title} --</h3>
    )
}

const AccordionBody = (props: AccordionBodyPropsType) => {
    return (
        <ul>
            {props.items.map( (item, index) =>  <li onClick={()=>{props.onClick(item)}} key={index}>{item.value}</li>) }
        </ul>
    )
}
export const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClickTitle} collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
        </div>
    )
}



