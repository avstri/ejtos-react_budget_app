
import React, {useContext,useState} from 'react';
import {AppContext} from '../context/AppContext';
const Budget = () => {
    const {currency,budget,expenses,dispatch} = useContext(AppContext);
    const [proposedBudget,setProposed] = useState(budget);
    const maxBudget =20_000;

    const totalExpenses = expenses.reduce((total,item) => {
        return (total+=item.cost);
    },0);
    
    const setBudget=(event)=>{
        const newBudget = event.target.value;
        if (newBudget > maxBudget){
            alert(`The value cannot exceed ${currency}${maxBudget}` )
            return;
        } else if (newBudget < totalExpenses){
            alert(`The value cannot be lower than ${currency}${totalExpenses}` )
            return;
        }
        
        setProposed(newBudget);
        dispatch({
            type: "SET_BUDGET",
            payload: newBudget
        });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget:{currency}
                <input type="number"
                 step="10" value={proposedBudget} onChange={setBudget}></input>
            </span>
        </div>
    );
};

export default Budget;