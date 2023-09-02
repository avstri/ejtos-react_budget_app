import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';
const ExpenseTotal = ()=>{
    const {currency,dispatch} = useContext(AppContext);
    
    const setCurrency=(event)=>{
        dispatch({
            type: "CHG_CURRENCY",
            payload: event.target.value
        });
    }

    return (
        <div class="btn-group">

            <label for="curSelector">Currency {currency}</label>
            <select id="curSelector" class="form-select" aria-label="Default select example" value={currency} onChange={setCurrency}>
                <option value="$" >$ Dollar</option>
                <option defaultValue value="£" >£ Pound</option>
                <option value="€" >€ Euro</option>
                <option value="₹" >₹ Rupee</option>
            </select>
        </div>
    );
}

export default ExpenseTotal;