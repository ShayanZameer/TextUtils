import React from 'react'

function Alert(props) {


  return (

    <div style={{height:'50px'}}>
    {props.alertMessage && <div className={`alert alert-${props.alertMessage.type} alert-dismissible fade show`} role="alert">
 <strong >{props.alertMessage.type} </strong>:{props.alertMessage.message}  


 </div>}
 
</div>
  )
}

export default Alert
