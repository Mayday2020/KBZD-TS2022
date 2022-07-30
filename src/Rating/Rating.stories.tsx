import React, {useState} from 'react'
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {Rating, RatingPropsType} from './Rating'
import {RatingValueType} from "../UncontrolledRating/UncontrolledRating";

export default {
    title: 'Example/Rating',
    component: Rating
} as ComponentMeta<typeof Rating>

const onClickCallBack = action('Some action to click rating')

const Template: ComponentStory<typeof Rating> = (args: RatingPropsType) => <Rating {...args} />

export const EmptyStars = Template.bind({})
EmptyStars.args = {
    value: 0,
    onClick: onClickCallBack
}

export const Rating1 = Template.bind({})
Rating1.args = {
    value: 1,
    onClick: onClickCallBack
}

export const Rating2 = Template.bind({})
Rating2.args = {
    value: 2,
    onClick: onClickCallBack
}

export const Rating3 = Template.bind({})
Rating3.args = {
    value: 3,
    onClick: onClickCallBack
}

export const Rating4 = Template.bind({})
Rating4.args = {
    value: 4,
    onClick: onClickCallBack
}

export const Rating5 = Template.bind({})
Rating5.args = {
    value: 5,
    onClick: onClickCallBack
}

export const ChangeRating = () => {
    let [rating, setRating] = useState<RatingValueType>(3)
    return <Rating value={rating} onClick={setRating} />
}
/*
export const ChangeRating = Template.bind({})
let [rating, setRating] = useState<RatingValueType>(3)
ChangeRating.args = {
    value: rating,
    onClick: onClickCallBack
}*/
