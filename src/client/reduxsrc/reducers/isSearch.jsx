const isSearchReducer = (state=false,action) => {
    if(state === true){
        return false
    } else {
        return true
    }
}

export default isSearchReducer;