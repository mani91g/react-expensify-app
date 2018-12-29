import {addExpense, editExpense, removeExpense} from '../../actions/expenses'

test('Remove expense',()=> {
  const action = removeExpense({id:'123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id:'123abc'
  })
})

test('Edit expense',() => {
  const action = editExpense('123abc',{note:'update'})
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id:'123abc',
    updates: {note:'update'}
  })
}) 

test('Add expense 1',() => {
  const action = addExpense({})
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {   
      description:'',
      note:'',
      amount:0,
      createdAt:0,
      id: expect.any(String)
    }
  })
}) 

test('Add expense 2',() => {
  const action = addExpense({
    description:'Rent',
      note:'House rent',
      amount:12000,
      createdAt:123546846
  })
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {      
      id: expect.any(String),
      description:'Rent',
      note:'House rent',
      amount:12000,
      createdAt:123546846
    }
  })
}) 
