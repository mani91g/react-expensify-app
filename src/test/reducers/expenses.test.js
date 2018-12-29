import uuid from 'uuid';
import moment from 'moment'
import expenses from '../fixtures/expenses'
import expenseReducer from '../../reducers/expenses'

test('should set default state', ()=>{
    const state = expenseReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual([]);
})

test('should remove expense by id', ()=>{
    
    const action = {type:'REMOVE_EXPENSE',
                    id:expenses[1].id}

    const state = expenseReducer(expenses,action)
    expect(state).toEqual([expenses[0],expenses[2]]);
})

test('should remove expense by using invalid id', ()=>{
    
    const action = {type:'REMOVE_EXPENSE',
                    id:-20}

    const state = expenseReducer(expenses,action)
    expect(state).toEqual(expenses);
})

test('should test add expense', ()=>{
    const id = uuid()
    const expense = {
        id,
        description : '',
    note : '',
    amount : 0,
    createdAt : 0
    }
    const action = {type:'ADD_EXPENSE',expense}
    const state = expenseReducer(expenses,action)
    expect(state).toEqual([...expenses, expense]);
})

test('should edit expense', ()=>{
    const note = 'running test'
    const updates = {        
    note
    }
    const action = {type:'EDIT_EXPENSE',
                    id:expenses[1].id,
                    updates}

    const state = expenseReducer(expenses,action)
    
    expect(state[1].note).toEqual(note);
})

test('should edit expense by using invalid id', ()=>{
    
    const note = 'running test'
    const updates = {        
    note
    }
    const action = {type:'EDIT_EXPENSE',
                    id:-20,
                    updates}

    const state = expenseReducer(expenses,action)
    expect(state).toEqual(expenses);
})