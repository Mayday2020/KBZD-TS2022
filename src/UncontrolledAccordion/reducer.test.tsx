import React from 'react'
import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('collapsed should be true', () => {
    // data
    const state: StateType = {
        collapsed: false
    }
    // action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    // expect
    expect(newState.collapsed).toBe(true)
})

test('collapsed should be false', () => {
    // data
    const state: StateType = {
        collapsed: true
    }
    // action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    // expect
    expect(newState.collapsed).toBe(false)
})

test('action is fake', () => {
    // data
    const state: StateType = {
        collapsed: true
    }
    // expect
    expect(() => {reducer(state, {type: 'FAKE-TYPE'})}).toThrowError()
})
