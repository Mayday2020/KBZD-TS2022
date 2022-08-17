import React, {useState} from 'react'
import CustomSelectComponent, {ItemType, SelectPropsType} from "./CustomSelectComponent";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Example/CustomSelect',
    component: CustomSelectComponent
} as ComponentMeta<typeof CustomSelectComponent>

const onClickCallBack = action('Some action to click accordion')
const callBack = action('some item was clicked ')

const items: ItemType[] = [
    {id: 1, value: 'Thor', power: 'POWER OF GOD'},
    {id: 2, value: 'Iron man', power: 'GENIUS'},
    {id: 3, value: 'Hulk', power: 'PUNISH'},
    {id: 4, value: 'Captain America', power: 'MORALITY'},
    {id: 5, value: 'Black widow', power: 'ESPIONAGE'},
    {id: 6, value: 'Hawkeye', power: 'SARCASM'}
]

const Template: ComponentStory<typeof CustomSelectComponent> = (args: SelectPropsType) => <CustomSelectComponent {...args} />

export const CloseMode = Template.bind({})
CloseMode.args = {
    titleValue: 'Avengers',
    collapsed: true,
    onClickTitle: onClickCallBack,
    items:  items,
    onClick: callBack
}

export const OpenMode = Template.bind({})
OpenMode.args = {
    titleValue: 'Avengers',
    collapsed: false,
    onClickTitle: onClickCallBack,
    items:  items,
    onClick: callBack
}

export const ChangeMode = () => {
    let [titleValue, setTitleValue] = useState<string>('menu')
    let [collapsed, setCollapsed] = useState(true)
    const openSelect = () => {
        setCollapsed(!collapsed)
    }
    const changeTitle = (item: ItemType) => {
        setTitleValue(item.value)
        setCollapsed(!collapsed)
    }
    return <CustomSelectComponent titleValue={titleValue}
                      collapsed={collapsed}
                      onClickTitle={openSelect}
                      items={items}
                      onClick={changeTitle}
    />
}