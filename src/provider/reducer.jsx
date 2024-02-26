const reducer = (state, action) =>{
    switch(action.type){
        case 'SET_COMPLETED':
            console.log(action.payload)
            localStorage.setItem('completed', action.payload)
            return {
                ...state, completed: action.payload
            }
    }
}

export default reducer