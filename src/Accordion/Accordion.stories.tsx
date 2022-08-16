import React, {useState} from "react";
import {Accordion, AccordionPropsType} from './Accordion'
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Example/Accordion',
    component: Accordion
} as ComponentMeta<typeof Accordion>

const onClickCallBack = action('Some action to click accordion')
const callBack = action('some item was clicked ')

const items = [
    {id: 1, value: 'Thor', power: 'POWER OF GOD'},
    {id: 2, value: 'Iron man', power: 'GENIUS'},
    {id: 3, value: 'Hulk', power: 'PUNISH'},
    {id: 4, value: 'Captain America', power: 'MORALITY'},
    {id: 5, value: 'Black widow', power: 'ESPIONAGE'},
    {id: 6, value: 'Hawkeye', power: 'SARCASM'}
]

const Template: ComponentStory<typeof Accordion> = (args: AccordionPropsType) => <Accordion {...args} />

export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
    titleValue: 'Avengers',
    collapsed: true,
    onClickTitle: onClickCallBack,
    items: items,
    onClick: callBack
}

export const UnCollapsedMode = Template.bind({})
UnCollapsedMode.args = {
    titleValue: 'Avengers',
    collapsed: false,
    onClickTitle: onClickCallBack,
    items: items,
    onClick: callBack
}

export const ChangeMode = () => {
    let [collapse, setCollapse] = useState<boolean>(false)
    return <Accordion titleValue={'Avengers'}
                      collapsed={collapse}
                      onClickTitle={setCollapse}
                      items={items}
                      onClick={(power) => { alert('Hero power is ' + power)}}
    />
}


