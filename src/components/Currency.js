import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch } = useContext(AppContext);

	const changeCurrency = (val)=>{
			dispatch({
				type: 'CHG_CURRENCY',
				payload: val,
			})
	}


    return (
		<div className='alert alert-secondary'>      
        <select id="currency" onChange={(event)=>changeCurrency(event.target.value)} style={{backgroundColor: "#4CAF50", color: "white", borderRadius: "15px"}}>
        <option defaultValue="£" name="pound"> (Currency) £ Pound</option>
        <option style={{color:'black'}} value="£">£ Pound</option>
        <option style={{color:'black'}} value="$">$ Dollar</option>
        <option style={{color:'black'}} value="€">€ Euro</option>
        <option style={{color:'black'}} value="₹">₹ Rupee</option>
      </select>	

      	
    </div>
	);
};

export default Currency;