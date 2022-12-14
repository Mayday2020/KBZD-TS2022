import React, {useState} from 'react';
import './App.css';
import {RatingValueType} from "./UncontrolledRating/UncontrolledRating";
import {UncontrolledAccordion} from "./UncontrolledAccordion/UncontrolledAccordion";
import {Rating} from "./Rating/Rating";
import {Accordion} from "./Accordion/Accordion";
import {OnOff} from "./OnOff/OnOff";
import CustomSelectComponent, {ItemType} from "./CustomSelectComponent/CustomSelectComponent";
import {Example1} from "./stories/ReactMemo";
import {ExampleUseMemo1} from "./useMemo/useMemo";
import {HelpsToReactMemo} from "./useMemo/useMemo2";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [on, setOn] = useState<boolean>(true)

    // Accordion settings
    let [accTitleValue, setAccTitleValue] = useState<string>('menu')
    let [accCollapsed, setAccCollapsed] = useState(true)
    const accItems = [
        {id: 1, value: 'Thor', power: 'POWER OF GOD'},
        {id: 2, value: 'Iron man', power: 'GENIUS'},
        {id: 3, value: 'Hulk', power: 'PUNISH'},
        {id: 4, value: 'Captain America', power: 'MORALITY'},
        {id: 5, value: 'Black widow', power: 'ESPIONAGE'},
        {id: 6, value: 'Hawkeye', power: 'SARCASM'}
    ]
    const openAcc = () => {
        setAccCollapsed(!accCollapsed)
    }
    const changeAccTitle = (item: ItemType) => {
        setAccTitleValue(item.value)
        setAccCollapsed(!accCollapsed)
    }
    //
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
            {/*<Example1 />*/}
            <ExampleUseMemo1 />
            <hr/>
            <HelpsToReactMemo />
            <hr/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<UncontrolledRating/>*/}
            <Accordion titleValue={accTitleValue}
                       collapsed={accCollapsed}
                       onClick={changeAccTitle}
                       items={accItems}
                       onClickTitle={openAcc}
            />
            <UncontrolledAccordion />
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
