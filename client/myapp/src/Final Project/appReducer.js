const appReducer=(state={dataSubs:[],dataMovies:[],dataMembers:[]},action)=>
{
    switch(action.type)
    {
        case "LOADDATA":
            return{...state,dataSubs:action.payload};
            
            case "LOADDATA2":
                return{...state,dataMovies:action.payload};

            case "LOADDATA3":
                return{...state,dataMembers:action.payload};
        
            // case "ADD":
            //     return {...state,products:[...state.products,action.payload]}

            case "DELITE_MOVIE":
                let arr=[...state.dataMovies]
                let index=arr.findIndex(x=>x._id==action.payload)
                if(index>=0)
                {
                    arr.splice(index,1)
                }
                return {...state,dataMovies:arr}
                

        default:
            return state;
    }

}
export default appReducer
