import React, {useState} from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {OnOff, OnOffPropsType} from "./OnOff";

export default {
    title: 'Example/OnOff',
    component: OnOff
} as ComponentMeta<typeof OnOff>

const onClickCallBack = action('Some action to click onOff')

const Template: ComponentStory<typeof OnOff> = (args: OnOffPropsType) => <OnOff {...args}/>

export const EnableOn = Template.bind({})
EnableOn.args = {
    onValue: true,
    onClick: onClickCallBack
}

export const EnableOff = Template.bind({})
EnableOff.args = {
    onValue: false,
    onClick: onClickCallBack
}

export const ChangingMode = () => {
    let [on, setOn] = useState<boolean>(true)
    return <OnOff onValue={on} onClick={setOn} />
}

/*export const ModeChanging = Template.bind({})
let [on, setOn] = useState<boolean>(true)
ModeChanging.args = {
    onValue: on,
    onClick: setOn
}*/
