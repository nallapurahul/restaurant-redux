import React from 'react'
import {connect} from 'react-redux'
import Header from './Container/Header'
import { Link } from 'react-router-dom'
const Orders = ({data}) => {
  return (
    <>
        <Header/>
        <div  style={{display:"flex",color:"red"}}>
        <center ><h3>This is Orders page</h3></center>
        </div>
        <br/>
        <center>
          {data.length>0?
            <div className='container'>
              <div className='row'>
                {data.map((item)=>
  
                  <div className='col-md-4' style={{padding:"5"}} key={item.id}>
                    <div className='card' style={{width:"18rem",padding:"3px"}}>
                      <img src={item.url} className='card-img-top'/>
                      <div className='card-body'>
                        <h5 className='card-title'>{item.name}</h5>
                        <div className='card-text'>Rs.{item.price}</div>
                        <p>Table Number : {item.tablenumber}</p>
                    </div>
                  </div>
                  </div>

                )}
              </div>
            </div>  
            : 
            <div className='h4'>
              No Order Placed 
            </div>
          }
        </center>
        <center>
          <button className='btn btn-primary' ><Link to="/" style={{color:"pink"}}>
            Go back to Home</Link>
          </button>
        </center>
    </>
  )
}

const mapStateToProps = state =>({
  data : state.orderreducer
})

export default connect(mapStateToProps)(Orders); 