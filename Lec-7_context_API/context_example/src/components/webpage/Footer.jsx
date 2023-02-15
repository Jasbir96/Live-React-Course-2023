import React from 'react'
import { ContextObj } from "./Page";
function Footer() {
  return (
    <>
      <h3>Footer</h3>
      <div>⬇️</div>
      <Option ></Option>
      <Option ></Option>
      <Option ></Option>
    </>
  )
}

function Option() {
  const theme = React.useContext(ContextObj);
  return <div className={theme}> Option </div>
}
export default Footer;