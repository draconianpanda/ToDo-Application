import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import React, { useState } from 'react'

const Todo = () => {
    /* These lines of code are using the `useState` hook to declare and initialize state variables in a
    functional component. */
    var [item1,setItem1]= useState([]);
    var [item2,setItem2]= useState([]);
    var [item3,setItem3]= useState([]);
    var [val1,setVal1]= useState();
    var [val2,setVal2]= useState();
    var [val3,setVal3]= useState();

    /* `const changeItem` is a function that is called when the "ADD" button is clicked. It updates the
    state variables `item1`, `item2`, and `item3` by adding the values of `val1`, `val2`, and `val3`
    respectively to the end of their arrays using the spread operator. It also resets the input
    fields by setting their values to an empty string. */
    const changeItem=()=>
    {
        setItem1((ls)=>[...ls,val1]);
        setItem2((ls)=>[...ls,val2]);
        setItem3((ls)=>[...ls,val3]);
        let form1 = document.getElementById("form1");
        let form2 = document.getElementById("form2");
        let form3 = document.getElementById("form3");
        form1.value='';
        form2.value='';
        form3.value='';
    }

    /**
     * The above code defines three input handlers for updating state values in a React component.
     */
    const itemInputHandler=(e)=>{
       setVal1(e.target.value);
    }

    const desInputHandler=(e)=>{
        setVal2(e.target.value);
     }

     const qtyInputHandler=(e)=>{
        setVal3(e.target.value);     
     }

  return (
    <div style={{backgroundColor:'lavender'}} >

            <Typography variant='h3' style={{fontFamily:'BlinkMacSystemFont', color:'#3f51b5'}}>ToDo Application</Typography>
            <br /><br />
            <TextField id="form1" variant='outlined' label='Item' onChange={itemInputHandler}/>
            <br /><br />
            <TextField id="form2" variant='outlined' label='Description' onChange={desInputHandler}/>
            <br /><br />
            <TextField id="form3" style={{fontFamily:'cursive'}}  variant='outlined' label='Quantity' onChange={qtyInputHandler}/>    
            <br /><br />
            <Button variant="contained" size="medium" color='success' onClick={changeItem}>ADD</Button>
            <br /><br />        

                    <TableContainer> 
                        <Table style={{backgroundColor:'Scrollbar',width:'auto',marginLeft: 'auto',marginRight:'auto',marginBottom:'auto',borderRadius:'auto'}}>

                            <TableHead>
                                <TableRow >
                                    <TableCell style={{color:'ThreeDDarkShadow', fontFamily:'fantasy'}}>ITEM</TableCell>
                                    <TableCell style={{color:'ThreeDDarkShadow', fontFamily:'fantasy'}}>DESCRIPTION</TableCell>
                                    <TableCell style={{color:'ThreeDDarkShadow', fontFamily:'fantasy'}}>QUANTITY</TableCell> 
                                </TableRow> 
                            </TableHead>

                            <TableBody>
                                <TableRow>
                                    <TableCell style={{color:'grey',fontFamily:'monospace'}}>
                                    {item1.map((value,index)=>{
                                        return(<p>{value}</p>)
                                    })}
                                    </TableCell>

                                    <TableCell style={{color:'grey',fontFamily:'monospace'}}>
                                    {item2.map((value,index)=>{
                                        return(<p>{value}</p>)
                                    })}
                                    </TableCell>

                                   <TableCell style={{color:'grey',fontFamily:'monospace'}}>
                                   {item3.map((value,index)=>{
                                        return(<p>{value}</p>)
                                    })}
                                   </TableCell>
 
                                </TableRow>
                            </TableBody>

                        </Table>
                    </TableContainer>
    </div>
  )
}

export default Todo