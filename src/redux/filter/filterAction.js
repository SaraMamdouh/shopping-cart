import {
    FILTER,INCREASE_COUNT,DECREASE_COUNT
}from './filterType';

export const FilterList =(id)=>{
    return{
        type:FILTER,
        payload:id
    }
}
export const IncreaseCount = (id,count)=>{
    return {
      type:INCREASE_COUNT,
      payload:id,
      count:count
    }
  }
  export const DecreseCount = (id,count)=>{
    return {
      type:DECREASE_COUNT,
      payload:id,
      count:count
    }
  }
export const FilterData = (filter,data) => {
    return (dispatch) => {
    switch (filter){
        case "SHOW_ALL":
        dispatch(FilterList(data))
        break;
        case "SHOW_CAKES":
        const cake=data.filter(m=>m.category==="cake")
         dispatch(FilterList(cake))
         break;
         case "SHOW_BISCUITS":
            const biscuits=data.filter(m=>m.category==="buscuits")
            dispatch(FilterList(biscuits))
            break;
            default:
                dispatch(FilterList(data))
 

        }
    }
        
  }