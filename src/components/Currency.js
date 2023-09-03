import React, {useContext,useState} from 'react';
import {AppContext} from '../context/AppContext';
import './Currency.css';

const ExpenseTotal = ()=>{
    const {currency,dispatch} = useContext(AppContext);

    const setCurrency=(event)=>{
        dispatch({
            type: "CHG_CURRENCY",
            payload: event.target.value
        });
    }

    return (
        <div className="greenSelector">Currency (
        <select id="curSelector"  className="greenSelector2" onChange={setCurrency}  value={currency}>
            <option value="$" >$ Dollar</option>
            <option defaultValue value="£" >£ Pound</option>
            <option value="€" >€ Euro</option>
            <option value="₹" >₹ Rupee</option>
        </select>
        )
        </div>
    );
}

export default ExpenseTotal;