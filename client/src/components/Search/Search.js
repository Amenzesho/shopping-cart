import React, {useState} from 'react';


const Search = (props) => {
    

    const [option , setOption] = useState('brand');

    const handleChange = (event) => {
        setOption(event.target.value)
    }

    return ( 
       <div>
           <select onChange={handleChange}>
               <option value="brand">Select type</option>
               <option value="orange">orange sweatshirt</option>
               <option value="maroon">maroon sweatshirt</option>
               <option value="beige">beige hoodie</option>               
           </select>
       </div>

     );
}
 
export default Search;