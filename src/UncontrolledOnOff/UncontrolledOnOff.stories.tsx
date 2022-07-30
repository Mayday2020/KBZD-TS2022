import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: 'Example/UncontrolledOnOff',
    component: UncontrolledOnOff
} as ComponentMeta<typeof UncontrolledOnOff>

const Template: ComponentStory<typeof UncontrolledOnOff> = () => <UncontrolledOnOff />

export const ModeChanging = Template.bind({})
