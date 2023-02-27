
function Crousel() {
  return (
    <div
    style={{
      height: "420px",
        backgroundImage: "url('phone.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        position: 'relative',

    }}
    >
    
      <img src="ss1.png"
      height="300px"
      alt="" 
      style={{
        position: 'absolute',
          zIndex: 2,
        left: "102px",
        top: "17px",
        height: "366px"
      }}
      />
    </div>
  )
}

export default Crousel