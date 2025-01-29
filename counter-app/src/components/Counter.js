import React,{useState} from 'react'
import '../App.css'




export default function Counter() { 

const [count,setCount] = useState(0);




const increment =() =>{

    setCount(count + 1);
       
}




const decrement =() =>{

    setCount(count - 1);
    
}


const reset = () =>{

  setCount(0);  
    
}




const startValue = () => {
  let div1 = document.createElement("div");
  div1.style.textAlign = 'center';

  let inp = document.createElement("input");

  inp.id = "inp1"  
  // inp.addEventListener("focus",(event)=>{
  //     event.target.style.backgroundColor="pink";
  // })
  inp.onfocus = function() {
    document.getElementById("inp1").style.backgroundColor = "pink";
  };
  
  
  



    
   
  
  div1.appendChild(inp);

  let btn = document.createElement("button");
  btn.textContent = "set";
  btn.addEventListener('click', () => { 
    let val = document.getElementById('inp1');
    let value = parseInt(inp.value);
    document.getElementById('num').value = val;


    if (value === "" || isNaN(value)) { 
      document.getElementById("num").value = 0;
      setCount(0);
  } else {
      setCount(value);
  }

    
   
    inp.style.display = "none";
    btn.style.display = "none";
  });
  div1.appendChild(btn);

  document.body.appendChild(div1);
};










return (

<>    
<div className='container'>

<h1>Counter</h1>




<input type="number" id="num" value={count} 
  onChange={(e) => setCount(parseInt(e.target.value))}   />


<div className="buttons">

<button type="button"onClick={decrement}>-</button>    
<button type="button" onClick={increment}>+</button>    
<button type="button" onClick={startValue}>Start Value </button>
<button type="button" onClick={reset}>Reset Counter</button>
</div>
</div>
</>
)

}
