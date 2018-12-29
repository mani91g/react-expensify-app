import moment from 'moment'
const expenses =[{
    id:'1',
    description:'gumball',
    note:'',
    amount:1,
    createdAt:moment(0).subtract(4,'days').valueOf()
},
{
    id:'2',
    description:'houserent',
    note:'',
    amount:12000,
    createdAt:moment(0).add(4,'days').valueOf()
},
{
    id:'3',
    description:'udemycourse',
    note:'',
    amount:10,
    createdAt:0
}
]
export default expenses