import React from 'react'

 
 export default function Profile(props) {
   const styll={width: 100,
    height: 200
}
  
   return (
   
     <div className='profill'>
       <div style={styll}>{props.children}</div>
      <div className='detail'>
       <h1>{props.name}</h1>

<h2>{props.profession}</h2>
<h2>{props.bio}</h2>
</div>

       <button onClick={() => props.alertMyInput( props.name)}>
     HELLO
   </button>
   <span>{props.num}</span>
     </div>
   
   )

   

 }

 


 Profile.defaultProps = {
  name: "none"
 };