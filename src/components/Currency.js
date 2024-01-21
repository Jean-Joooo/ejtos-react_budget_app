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
        <div>
     <label style={{ padding: "15px 15px", marginLeft: '0.5rem' , backgroundColor: "#4CAF50", color: "white", borderRadius: "10px" }} > Currency 
      <select name='hover_color'id="currency" onChange={(event)=>changeCurrency(event.target.value)} style={{ backgroundColor: "#4CAF50", color: "white", borderRadius: "15px"}}>
        <option style={{color:'black'}} value="$">$ Dollar</option>
        <option style={{color:'black'}} value="€">€ Euro</option>
        <option style={{color:'black'}} value="₹">₹ Rupee</option>
      </select>	
      </label>
      	
    </div>
	);
};

export default Currency;