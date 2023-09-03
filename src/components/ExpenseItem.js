import React, {useContext} from 'react';
import {TiDelete} from 'react-icons/ti';
import {HiPlusCircle, HiMinusCircle} from 'react-icons/hi';
import {AppContext} from '../context/AppContext';

const ExpenseItem = (props) => {
    const {currency,dispatch} = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type:'DELETE_EXPENSE',
            payload: props.id,
        });
    };


    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost:10
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost:10
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><HiPlusCircle size='2em' color='green' onClick={event=> increaseAllocation(props.name)}/></td>
            <td><HiMinusCircle size='2em' color='red' onClick={event=> decreaseAllocation(props.name)} /></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
