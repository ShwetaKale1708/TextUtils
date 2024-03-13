import React from 'react'

export default function Alert(props) {
  return (
  <div style={{height:'40px'}}>
   {props.alert && <div class={`alert alert-${props.alert.type} d-flex align-items-center" role="alert`}>
  
  <div>
    {props.alert.message}
  </div>
</div>}
</div>
  )
}
