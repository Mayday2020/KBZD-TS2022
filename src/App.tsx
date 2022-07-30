import React, {useState} from 'react';
import './App.css';
import {RatingValueType, UncontrolledRating} from "./UncontrolledRating/UncontrolledRating";
import {UncontrolledAccordion} from "./UncontrolledAccordion/UncontrolledAccordion";
import {Rating} from "./Rating/Rating";
import {Accordion} from "./Accordion/Accordion";
import {UncontrolledOnOff} from "./UncontrolledOnOff/UncontrolledOnOff";
import {OnOff} from "./OnOff/OnOff";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [on, setOn] = useState<boolean>(true)

    return (
        <div className="App">
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<UncontrolledRating/>*/}
            <Accordion titleValue={'Controlled'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            {/*<UncontrolledAccordion />*/}
            <OnOff onValue={on} onClick={setOn}/>
            {/*<UncontrolledOnOff />*/}
        </div>
    );
}

export default App;
