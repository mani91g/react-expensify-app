import React from 'react'
import {shallow} from 'enzyme'
import {EditExpensePage} from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let wrapper, editExpense, removeExpense, history

beforeEach(() => {
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history = {push: jest.fn()}
    wrapper = shallow(
        <EditExpensePage 
        editExpense={editExpense} 
        history={history} 
        removeExpense = {removeExpense}
        expense={expenses[1]}/>)
})

test('Should render edit test page', () => {
    expect(wrapper).toMatchSnapshot()
})

test('Should test on edit expense onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id,expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
})

test('Should test on edit expense remove expense', () => {
    wrapper.find('button').simulate('click')
    expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[1].id})
    expect(history.push).toHaveBeenLastCalledWith('/')
})