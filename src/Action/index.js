export const settablenumber =(value) =>async dispatch =>{
    dispatch({
        type:"SETTABLENUMBER",
        payload:value
    })
}

export const resettablenumber =() => async dispatch =>{
    dispatch({
        type:"RESETTABLENUMBER"

    })
}

export const setfilter =(value) =>async dispatch=> {
    dispatch({
        type:"SETFILTER",
        payload:value
    })
}

export const resetfilter =() => async dispatch=>{
    dispatch({
        type:"RESETFILTER"
    })
}

export const addorder = (id,name,price,tablenumber,url) =>async dispatch=>{
    dispatch({
        type:"ADDORDER",
        payload:{
            id:id,
            name:name,
            price:price,
            tablenumber:tablenumber,
            url:url

        }
    })
}