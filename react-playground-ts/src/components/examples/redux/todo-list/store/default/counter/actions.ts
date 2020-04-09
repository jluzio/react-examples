import { createAction } from '@reduxjs/toolkit'

const actionType = (type: string) => `counter/${type}`

/*
 * action creators
 */
export const incrementCounter = createAction(actionType('increment'))

export const decrementCounter = createAction(actionType('decrement'))
