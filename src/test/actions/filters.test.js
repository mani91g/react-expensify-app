import moment from 'moment'
import {setStartDate,setEndDate,setTextFilter,sortByAmount,sortByDate} from '../../actions/filters'

test('setStartDate test',()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
})

test('setEndDate test',()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
})

test('setTextFilter test 1',()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})


test('setTextFilter test 2',()=>{
    const action = setTextFilter('amount');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'amount'
    })
})

test('sortByAmount test',()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',        
    })
})

test('sortByDate test',()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE',        
    })
})