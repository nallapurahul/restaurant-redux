import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux';
import {settablenumber} from "../Action"
const Table = ({tablenumber,settablenumber}) => {
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const inActiveBtn='btn btn-outline-primary m-2';
    const activeBtn='btn btn-outline-primary m-2 active';

    return (
    <div>
        <center className="mt-2">
            <h4>
                Please Select your table number:
            </h4>
            {numbers.map((num,index)=>(
                <div style={{display:'inline'}} key={index}>
                    <button className={tablenumber===num? activeBtn : inActiveBtn} onClick={()=>settablenumber(num)}>
                        {num}
                    </button>
                </div>
            ))}
        </center>
    </div>
  )
}

const mapStateToProps = state=> ({
    tablenumber:state.tablereducer.tablenumber
})

export default connect(mapStateToProps,{settablenumber})(Table);