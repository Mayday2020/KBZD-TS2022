import React from "react";

export type OnOffPropsType = {
    onValue: boolean
    onClick: (value: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.onValue ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.onValue ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: props.onValue ? 'green' : 'red'
    }


    return <div>
        <div style={onStyle} onClick={()=> props.onClick(true)}>On</div>
        <div style={offStyle} onClick={()=> props.onClick(false)}>Off</div>
        <div style={indicatorStyle}></div>
    </div>
}