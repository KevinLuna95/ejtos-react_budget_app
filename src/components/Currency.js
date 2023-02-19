import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 
const Currency = () => {
    const { expenses, budget, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    if (budget-totalExpenses < 0){
        alert("You cannot reduce de budget value lower than the spending")
    }
    return (
        <>
        <select className={`alert ${alertType}`}>Currency €
            <option value="$" name="Dollar">Dollar</option>
            <option defaultValue value="£" name="Pound">Pound</option>
            <option value="€" name="Euro">Euro</option>
            <option value="+" name="Ruppe">Ruppe</option>
        </select>
  </>
    );
};
export default Currency;
