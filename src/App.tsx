import React, {useState} from 'react';
import './App.css';
import {RatingValueType, UncontrolledRating} from "./UncontrolledRating/UncontrolledRating";
import {UncontrolledAccordion} from "./UncontrolledAccordion/UncontrolledAccordion";
import {Rating} from "./Rating/Rating";
import {Accordion} from "./Accordion/Accordion";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)

    return (
        <div className="App">
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledAccordion />*/}
            <Accordion titleValue={'Controlled'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
        </div>
    );
}

export default App;
