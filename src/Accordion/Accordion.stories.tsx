import React, {useState} from "react";
import {Accordion, AccordionPropsType} from './Accordion'
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Example/Accordion',
    component: Accordion
} as ComponentMeta<typeof Accordion>

const onClickCallBack = action('Some action to click accordion')

const Template: ComponentStory<typeof Accordion> = (args: AccordionPropsType) => <Accordion {...args} />

export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: true,
    onClick: onClickCallBack
}

export const UncollapsedMode = Template.bind({})
UncollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: false,
    onClick: onClickCallBack
}

export const ChangeMode = () => {
    let [collapse, setCollapse] = useState<boolean>(false)
    return <Accordion titleValue={'Menu'} collapsed={collapse} onClick={setCollapse} />
}
/*export const ChangeMode = Template.bind({})
ChangeMode.args = {
    titleValue: 'Menu',
    collapsed: false,
    onClick: onClickCallBack
}*/

