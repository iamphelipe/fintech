import type React from "react";

const style: React.CSSProperties = {
   textTransform: "capitalize",
   padding: "var(--gap) var(--gap-s)",
   backgroundColor: "var(--color-3)",
   border: "none",
   borderRadius: "var(--gap)",
   color: "var(--color-4)",
   fontWeight: "600"
}

function getMonth(n: number) {
  const data = new Date();
  data.setMonth(data.getMonth() + n);
  return new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(data);
}

const MesBtn = ({ n }: { n: number }) => {
  getMonth(n);
  return (
      <button style={style}>{getMonth(n)}</button>
  );
};

export default MesBtn;
