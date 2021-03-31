import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import './style.css';
import {FilterData} from '../../redux/filter/filterAction';

const Filter =({item,filterItem})=>{
      return(
        <section className="filter">
        <div className="container">
        <ul className="filter-list">
            <li className="filter-link" onClick={()=>filterItem("SHOW_ALL",item)}>All</li>
            <li className="filter-link"  onClick={()=>filterItem("SHOW_CAKES",item)}>cakes</li>
            <li className="filter-link"  onClick={()=>filterItem("SHOW_BISCUITS",item)}>buscuits</li>

        </ul>
        </div>
    </section>
      )
    }

const mapStateToProps = (state) => {
    return{
   item:state.product.data,
   filter:state.filter.filter

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        filterItem:(filter,data) => dispatch(FilterData(filter,data)),

    }
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Filter)