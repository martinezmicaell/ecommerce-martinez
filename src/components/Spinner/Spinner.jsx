import React from 'react'

//spinner loader
import RiseLoader from 'react-spinners/RiseLoader'

const styles = {
    marginTop: 100,
    textAlign: "center"
}

const Spinner = () => {
  return (
    <div style={styles}>
        <RiseLoader size={15} margin={15} color={"#EDD2A7"} speedMultiplier={1}/>
    </div>
  )
}

export default Spinner