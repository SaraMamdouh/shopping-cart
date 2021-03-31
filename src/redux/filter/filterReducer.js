import {
  DECREASE_COUNT,
    FILTER,INCREASE_COUNT
} from './filterType';
  
  const initialState = {
    filter: [],
  }
  
  const FilterReducer = (state = initialState, action) => {
    switch (action.type) {
      case FILTER:
        return {
          ...state,
          filter: action.payload
        }
        case INCREASE_COUNT:
          return {
            ...state,
            filter: state.filter.map(item => {
              if(item.id === action.payload ) {
                 return { ...item, count: item.count + 1}
              }
              return item;
            })
          }
        
         case DECREASE_COUNT:
          return {
            ...state,
            filter: state.filter.map(item => {
              if(item.id === action.payload && action.count>0) {
                 return { ...item, count: item.count - 1}
              }
              else{
                return{...item,count:item.count}
              }
                 })
         }
      default:
         return state
    }
  }
  
  export default FilterReducer