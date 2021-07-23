import { createAction } from '@reduxjs/toolkit'

export const addStart = createAction('addStart')
export const addSuccess = createAction('addSuccess')
export const addError = createAction('addError')

export const deleteStart = createAction('deleteStart')
export const deleteSuccess = createAction('deleteSuccess')
export const deleteError = createAction('deleteError')

export const getStart = createAction('getStart')
export const getSuccess = createAction('getSuccess')
export const getError = createAction('getError')
