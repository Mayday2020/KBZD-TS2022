import React from 'react'
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {UncontrolledRating} from './UncontrolledRating'

export default {
    title: 'Example/UncontrolledRating',
    component: UncontrolledRating
} as ComponentMeta<typeof UncontrolledRating>

const Template: ComponentStory<typeof UncontrolledRating> = () => <UncontrolledRating />

export const ChangeRating = Template.bind({})
