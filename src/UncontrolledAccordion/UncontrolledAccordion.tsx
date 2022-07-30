import React, {useState} from "react";

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

export const UncontrolledAccordion = () => {
    let [collapsed, setCollapsed] = useState(false)

    return <div>
        <AccordionTitle title={'Uncontrolled'} onClick={ () => { setCollapsed(!collapsed) } }/>
        { !collapsed && <AccordionBody/>}
    </div>
}


const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 onClick={ (() => { props.onClick() }) }>-- {props.title} --</h3>
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