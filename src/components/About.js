import React from 'react'
export default function About(props) {
  return (
    <div className={`container bg-${props.mode==='dark'?'black':'white'} text-${props.mode==='dark'?'white':'black'}`} >
      <h2 >About us</h2>
      <div className="accordion" id="accordionExample">
      <div className={`accordion-item bg-${props.mode==='dark'?'black':'white'} text-${props.mode==='dark'?'white':'black'} `}>
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Developer Details
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          <strong>{props.owner} </strong> is well known for his Web Development skills and the ability to grasp at a faster rate than any of his competitors.
          He has been practicing <strong>Data structures and Algorithms</strong> for more than an year. 
          </div>
        </div>
      </div>
      <div className={`accordion-item bg-${props.mode==='dark'?'black':'white'} text-${props.mode==='dark'?'white':'black'}`} >
        <h2 className="accordion-header" id="headingTwo">
          <button className={`accordion-button collapsed bg-${props.mode==='dark'?'black':'white'} text-${props.mode==='dark'?'white':'black'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Contact 
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="container">
            <div className="accordion-body">
            Phone: <strong>{props.phone}</strong>
            </div>
            <div className="accordian-body pb-3 mx-3">
            Email: <strong>{props.email}</strong>
            </div>
          </div>
        </div>
      </div>
      <div className={`accordion-item bg-${props.mode==='dark'?'black':'white'} text-${props.mode==='dark'?'white':'black'}`}>
        <h2 className="accordion-header" id="headingThree">
          <button className={`accordion-button collapsed bg-${props.mode==='dark'?'black':'white'} text-${props.mode==='dark'?'white':'black'}`} type="button"  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Send a birthday gift here
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            {props.address}
          </div>
        </div>
      </div>
    </div>
    <div className="container my-3">
    {/* <button type="button" onClick={toggleStyle} className="btn btn-primary">{mode}</button> */}
    </div>
    </div>
  )
}
