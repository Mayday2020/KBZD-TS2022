import React from "react";

type AccordionTitlePropsType = {
    title: string
    onClick: (collapsed: boolean)=> void
    collapsed: boolean
}
type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: (collapsed: boolean)=> void
}
export const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick} collapsed={props.collapsed}/>
            {props.collapsed && <AccordionBody />}
        </div>
    )
}


const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 onClick={ () => { props.onClick(!props.collapsed) } }>-- {props.title} --</h3>
    )
}

const AccordionBody = () => {
    return (
        <ul>
            <li>task 1</li>
            <li>task 2</li>
            <li>task 3</li>
        </ul>
    )
}

