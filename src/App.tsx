import React, {useState} from 'react';
import './App.css';
import {RatingValueType, UncontrolledRating} from "./UncontrolledRating/UncontrolledRating";
import {UncontrolledAccordion} from "./UncontrolledAccordion/UncontrolledAccordion";
import {Rating} from "./Rating/Rating";
import {Accordion} from "./Accordion/Accordion";
import {UncontrolledOnOff} from "./UncontrolledOnOff/UncontrolledOnOff";
import {OnOff} from "./OnOff/OnOff";
import CustomSelectComponent, {ItemType} from "./CustomSelectComponent/CustomSelectComponent";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [on, setOn] = useState<boolean>(true)

    // Select settings
    let [titleValue, setTitleValue] = useState<string>('menu')
    let [collapsed, setCollapsed] = useState(true)
    const items = [
        {id: 1, value: 'Thor', power: 'POWER OF GOD'},
        {id: 2, value: 'Iron man', power: 'GENIUS'},
        {id: 3, value: 'Hulk', power: 'PUNISH'},
        {id: 4, value: 'Captain America', power: 'MORALITY'},
        {id: 5, value: 'Black widow', power: 'ESPIONAGE'},
        {id: 6, value: 'Hawkeye', power: 'SARCASM'}
    ]
    const openSelect = () => {
        setCollapsed(!collapsed)
    }
    const changeTitle = (item: ItemType) => {
        setTitleValue(item.value)
        setCollapsed(!collapsed)
    }
    //
    return (
        <div className="App">
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<UncontrolledRating/>*/}
            {/*<Accordion titleValue={'Controlled'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>*/}
            {/*<UncontrolledAccordion />*/}
            <OnOff onValue={on} onClick={setOn}/>
            {/*<UncontrolledOnOff />*/}
            <CustomSelectComponent collapsed={collapsed}
                                   items={items}
                                   titleValue={titleValue}
                                   onClickTitle={openSelect}
                                   onClick={changeTitle}
            />
        </div>
    );
}

export default App;
