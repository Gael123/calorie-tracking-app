import React,{useState, useEffect} from 'react';
import { ThemeProvider } from '@material-ui/styles';
// import theme from './src/theme';

function FoodItem(props) {
 const {name, description, amount ,type} = props
 const [count,setCount] =useState(0)

 useEffect(() => {
  if (count > 5){
    alert("It's greater thanfive")
  }
},[count])
  return (
<ThemeProvider>
  <div>

  { count > 0 && <input type ="text" placeholder = "search for food" value ={count} />}

 <h1>{name}</h1>
 <p>{description}</p>
 <p>{amount}</p>
 <p>{type}</p>
 <button
     onClick={() => {
      setCount(count +1);
        }}

      >
      +
  </button>

  </div>
</ThemeProvider>
 );
}

export default FoodItem;
