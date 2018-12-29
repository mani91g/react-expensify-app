import React from 'react'
import {ExpenseListItem} from '../../components/ExpenseListItem'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'

test('Should test expense list item', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[1]} />)
    expect(wrapper).toMatchSnapshot()
})

test('Should test expense list item with empty item', () => {
    const wrapper = shallow(<ExpenseListItem expenses={[]} />)
    expect(wrapper).toMatchSnapshot()
})