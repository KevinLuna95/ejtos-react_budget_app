import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 
const Currency = () => {
    const { dispatch } = useContext(AppContext);
    

    const handleCurrency = (props) => {

        dispatch({
            type: 'CHG_CURRENCY',
            payload: props.value,
        });
    };
    
    return (
        <>
        <select 
        className="alert alert-success alert-secundary" 
        id="backColorGreen"
        onChange={(event) => handleCurrency(event.target)}
        >Currency €
            <option value="$" name="Dollar">$ Dollar</option>
            <option value="£" selected="selected" name="Pound">£ Pound</option>
            <option value="€" name="Euro">€ Euro</option>
            <option value="₹" name="Ruppe">₹ Ruppe</option>
        </select>
  </>
    );
};
export default Currency;
