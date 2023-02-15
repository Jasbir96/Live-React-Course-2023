import React from 'react'
import { ContextObj } from "./Page";

function Header() {
  return (
    <>
      <h3>Header</h3>
      <div>⬇️</div>
      <Option></Option>
      <Option ></Option>
      <Option ></Option>
    </>
  )
}

function Option() {
  const theme=React.useContext(ContextObj);
  return <div className={theme}> Option </div>
}
export default Header