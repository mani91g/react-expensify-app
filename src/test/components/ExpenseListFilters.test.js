import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseListFilters} from '../../components/ExpenseListFilters'
import {filters,altFilters} from '../fixtures/filters'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn(); 
    wrapper = shallow(
        <ExpenseListFilters 
        filters={filters}
        setTextFilter={setTextFilter} 
        sortByDate={sortByDate} 
        sortByAmount={sortByAmount} 
        setStartDate={setStartDate} 
        setEndDate={setEndDate}
        />
    )
})

test('Test expense filter with filters', () => {
    expect(wrapper).toMatchSnapshot();
})

test('Test expense filter with altFilters', () => {
    wrapper.setProps({filters: altFilters})
    expect(wrapper).toMatchSnapshot();
})

test('test change in text filter', () => {
    const value = 'food';
    wrapper.find('input').at(0).simulate('change', {
        target: {value} 
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})


