import React from 'react';

export default function Alert(props) {
  // Check if props.alert exists before accessing its properties
  const capitalize=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  if (!props.alert) {
    return null; // or render a default message
  }

  return (
    <div>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        {capitalize(props.alert.type)} {props.alert.msg}
           </div>
    </div>
  );
}
