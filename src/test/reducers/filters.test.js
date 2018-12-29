import moment from 'moment'
import filtersReducer from '../../reducers/filters'

test('Should setup default filter value',()=>{
    const state = filtersReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })
})

test('should sort by amount', ()=>{
    const state = filtersReducer(undefined,{type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount')
})


test('should sort by date', ()=>{

    const currentState = {
        text:'',
        startDate:'',
        endDate:'',
        sortBy:'amount'
    }

    const action = {type:'SORT_BY_DATE'}

    const state = filtersReducer(currentState,action);
    expect(state.sortBy).toBe('date')
})

test('should filter by text', ()=>{

  
    const text = 'text filter'

    const action = {type:'SET_TEXT_FILTER',
    text}

    const state = filtersReducer(undefined,action);
    expect(state.text).toBe(text)
})

test('should filter by startDate', ()=>{


    const startDate = moment()
    const action = {type:'SET_START_DATE',startDate}

    const state = filtersReducer(undefined,action);
    expect(state.startDate).toBe(startDate)
})

test('should filter endDate', ()=>{

    const endDate = moment()
    const action = {type:'SET_END_DATE',endDate}

    const state = filtersReducer(undefined,action);
    expect(state.endDate).toBe(endDate)
})