import React,{useState} from 'react';
import AddIcon from "@material-ui/icons/Add";
import Button from '@material-ui/core/Button';
 const Counterincdec=()=>{

    const[count,setcount]=useState(0);
     const incbtn=()=>{
        setcount(count+1);
     }
     const decbtn=()=>{
      if(count>0){
        setcount(count-1);
      }
      else{
         alert('sorry,  0 num reached')
      setcount(0);
      }
     }
    return(
        <div  className='main_div'>
           <div className='center_div'>
              <h1>{count}</h1>
              <div className='btn_div'>
                  <Button onClick={incbtn} className="btn_green"><AddIcon/></Button>
                  <Button onClick={decbtn} className="btn_red"><AddIcon/></Button>
              </div>
           </div>
           
        </div>
      );
 }

 export default Counterincdec;