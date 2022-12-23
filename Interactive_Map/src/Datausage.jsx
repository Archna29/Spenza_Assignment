//This is the code of the div that will be used to show the data related details to user
import React from 'react'
const divStyle=
    {
        position: "relative",
        marginLeft:"1.8rem",
        marginRight:"1rem",
         marginTop: "1rem",
      border:"2px double ",
     fontFamily:"Georgia, serif"
      }

const Datausage = (props) => {
  return (
    <div className="card" style={divStyle}>
    <div className="card-body">
    <h4 className="card-title text-dark border-bottom border-secondary" >Details About Data Usage:</h4>
    <ul class="list-group list-group-flush bg-warning mt-5">
    <h5><li className="list-group-item text-danger bg-warning">Region : {props.title}</li></h5>
    <h5><li className="list-group-item text-danger bg-warning">Data Usage : {props.data}</li></h5>
    <h5><li className="list-group-item text-danger bg-warning">Other Details :   This is some text </li></h5>
  </ul>
    <h6 className="card-text text-secondary mt-5">This div is here to show the details of data usuage by differnt region with region name. 
    You just need to click on the markers to know about its data usage</h6>
  </div>
 
</div>
  )
}

export default Datausage