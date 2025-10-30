import React from 'react'
import "./Input.css"

const style: React.CSSProperties = {
   display: "grid",
   gridTemplateColumns: "250px",
   gap: "var(--gap-s)",
}

type InputProps = React.ComponentProps<"input"> & {
   label: string
}

const Input = ({label, ...rest} : InputProps) => {

  return (
   <div style={style}>
      <label htmlFor={label}>{label}</label>
      <input className='input-control' type="date" name={label} {...rest} />
   </div>
  );
}

export default Input