import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = (props) => {
    const { dispatch,currency } = useContext(AppContext);
    const { budget } = useContext(AppContext);
    

    const handleChangeBudget = (valueBudget) => {

        dispatch({
            type: 'SET_BUDGET',
            payload: valueBudget,
        });
    };

    
    return (
        <form className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    type="number" 
                    value={ budget }
                    max="20000"
                    step="10"
                    onChange={(e) => {handleChangeBudget(e.target.value)}}
                ></input>
            </span>
        </form>
    );
};
export default Budget;
