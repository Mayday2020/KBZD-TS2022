import React, {useState} from "react";
import {UncontrolledAccordion} from './UncontrolledAccordion'
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Example/UncontrolledAccordion',
    component: UncontrolledAccordion
} as ComponentMeta<typeof UncontrolledAccordion>

const Template: ComponentStory<typeof UncontrolledAccordion> = () => <UncontrolledAccordion />

export const ChangeMode = Template.bind({})

