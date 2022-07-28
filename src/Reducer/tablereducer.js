const initialstate ={
    tablenumber: null
}

export default function tablereducer(state=initialstate,action){
    const {type,payload}=action;
    switch(type){
        case "SETTABLENUMBER":
            return {...state,tablenumber:payload}
        case "RESETTABLENUMBER":
            return {...state,tablenumber:null}
        default:
            return state
    }
}