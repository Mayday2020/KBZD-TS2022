import React, {useState} from "react";

export const UncontrolledOnOff = () => {
    let [on, setOn] = useState<boolean>(true)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: on ? 'green' : 'red'
    }


    return <div>
        <div style={onStyle} onClick={()=> setOn(true)}>On</div>
        <div style={offStyle} onClick={()=> setOn(false)}>Off</div>
        <div style={indicatorStyle}></div>
    </div>
}