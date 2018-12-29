import selectExpense from '../../selectors/expenses'
import moment from 'moment';

const expenses =[{
    id:'1',
    description:'gum',
    note:'',
    amount:1,
    createdAt:moment(0).subtract(4,'days').valueOf()
},
{
    id:'2',
    description:'rent',
    note:'',
    amount:12000,
    createdAt:moment(0).add(4,'days').valueOf()
},
{
    id:'3',
    description:'course',
    note:'',
    amount:10,
    createdAt:0
}
]

test('selectExpense - filter by text',() => {
    const filters = {
        text:'u',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const action = selectExpense(expenses, filters)
    expect(action).toEqual([expenses[2],expenses[0]])
})

test('selectExpense - filter by startDate',() => {
    const filters = {
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    }
    const action = selectExpense(expenses, filters)
    expect(action).toEqual([expenses[1],expenses[2]])
})

test('selectExpense - filter by endDate',() => {
    const filters = {
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0)
    }
    const action = selectExpense(expenses, filters)
    expect(action).toEqual([expenses[2],expenses[0]])
})

test('selectExpense - sort by amount',() => {
    const filters = {
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    const action = selectExpense(expenses, filters)
    expect(action).toEqual([expenses[1],expenses[2],expenses[0]])
})


test('selectExpense - sort by date',() => {
    const filters = {
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const action = selectExpense(expenses, filters)
    expect(action).toEqual([expenses[1],expenses[2],expenses[0]])
})

