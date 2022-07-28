import React from 'react'
import { useState,useEffect } from 'react'
import { connect } from 'react-redux';
import { addorder, resetfilter, resettablenumber } from './Action';

const Card = ({filter_name,addorder,tablenumber}) => {
    const [data, setdata] = useState([]);
    const [clonedata, setclonedata] = useState([]);
    useEffect(()=>{
        fetch('https://my-json-server.typicode.com/nallapurahul/restaurant/db')
        .then((response) =>{
          return response.json();
        }).then((list) =>{
          setdata(list.blogs);
          setclonedata(list.blogs);
        })

    },[]);

    useEffect(() => {
      if(filter_name!="All Items"){
        let specific=clonedata.filter(item => item.category===filter_name);
        setdata(specific);
      }
      else{
        setdata(clonedata);
      }
    }, [filter_name])
    
    const Handler = async (id,name,price,url) =>{
      if(tablenumber!=null){
        await addorder(id,name,price,tablenumber,url);
        
        await resettablenumber
        await resetfilter
        alert('Order Placed Successfully')
      }
      else{
        alert('Please Select the table number first');
      }
    }

  return (
    <div>
        <center>
          {data.length>0?
            <div className='container m-3'>
              <div className='row ' >
                {data.map((item)=>
  
                  <div className='col-md-4' style={{padding:"5"}} key={item.id}>
                    <div className='card m-1 img-fluid' style={{width:"18rem",padding:"3px"}}>
                      <img src={item.url} className='card-img-top  img-fluid'/>
                      <div className='card-body m-2'>
                        <h5 className='card-title'>{item.name}</h5>
                        <div className='card-text'>Rs.{item.price}</div>
                        <button className='btn btn-primary' onClick={()=> Handler(item.id,item.name,item.price,item.url)}>
                          Order
                        </button>
                    </div>
                  </div>
                  </div>

                )}
              </div>
            </div>  
            : 
            <div className='spinner-border text-primary'>
              Loading
            </div>
          }
        </center>
    </div>
  )
}

const mapStateToProps =(state)=>({
  filter_name:state.filterreducer.filter_name,
  tablenumber:state.tablereducer.tablenumber
})

export default connect(mapStateToProps,{addorder})(Card);