import React from 'react'
import moment from 'moment'
import {shallow} from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

test('should render expense form', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})


test('should render expense form with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid error submission', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    
    wrapper.find('form').simulate('submit',{
        preventDefault: ()=>{}
    });
    
    expect(wrapper.state('errors').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot()

})

test('should set description on input change', () => {
    const value = 'new description'
    const wrapper = shallow(<ExpenseForm />)    
    wrapper.find('input').at(0).simulate('change',{
        target:{
            value
        }
    });

    console.log(wrapper.state('description'))
    
    expect(wrapper.state('description')).toBe(value);
    expect(wrapper).toMatchSnapshot()

})

test('should set note on note change', () => {
    const value = 'new note'
    const wrapper = shallow(<ExpenseForm />)    
    wrapper.find('textarea').at(0).simulate('change',{
        target:{
            value
        }
    });

    console.log(wrapper.state('note'))
    
    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot()

})

test('should set valid amount on input change', () => {
    const value = '25'
    const wrapper = shallow(<ExpenseForm />)    
    wrapper.find('input').at(1).simulate('change',{
        target:{
            value
        }
    });

    console.log(wrapper.state('amount'))
    
    expect(wrapper.state('amount')).toBe(value);
    expect(wrapper).toMatchSnapshot()

})

test('should set invalid amount on input change', () => {
    const value = '25.1222'
    const wrapper = shallow(<ExpenseForm />)    
    wrapper.find('input').at(1).simulate('change',{
        target:{
            value
        }
    });

    console.log(wrapper.state('amount'))
    
    expect(wrapper.state('amount')).toBe('');
    expect(wrapper).toMatchSnapshot()

})

test('should call onsubmit prop for valid submission', () => {
    const onSubmitSpy = jest.fn();

    const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit={onSubmitSpy}/>)    
    expect(wrapper.state('errors').length).toBe(0);
    wrapper.find('form').simulate('submit',{
        preventDefault: () => {}
    })

    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[1].description,
          note: expenses[1].note,
          amount: expenses[1].amount,
          createdAt: expenses[1].createdAt.valueOf()
    })

    // onSubmitSpy('Mani','Chennai')
    // expect(onSubmitSpy).toHaveBeenCalledWith('Mani','Chennai');
})


test('should set new date', () => {
    const wrapper = shallow(<ExpenseForm />)        
    const now = moment();
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now);

})

test('should change calendar focus', () => {
    const wrapper = shallow(<ExpenseForm />)        
    const value = true;
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused: value})
    console.log('should change calendar focus-'+wrapper.state('calendarFocused'))
    expect(wrapper.state('calendarFocused')).toEqual(value);

})