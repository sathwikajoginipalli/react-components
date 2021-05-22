import React from 'react';

const User = (props) => {
  let age = props.age >=0 ? props.age : "NA";
    return (
        <div>
       <button onClick = {props.addEvent}>Add</button>
      <li>
      <span>  name: {props.children} | age: {age}</span>
      <input onChange={props.changeEvent} value={props.children}/>
      <button onClick={props.delEvent}>Delete</button>
      </li>
</div>
    )
}

export default User;