import React from 'react'

const style: React.CSSProperties = {
   display: "flex",
   flexDirection: "column",
   gap: "var(--gap-s)"
}

type InputProps = React.ComponentProps<"input"> & {
   label: string
}

const Input = ({label, ...rest} : InputProps) => {

  return (
   <div style={style}>
      <label htmlFor={label}>{label}</label>
      <input type="date" name={label} {...rest} />
   </div>
  );
}

export default Input