const isAddRecipeReducer = (state=true,action) => {
    if(state === false){
        return true
    } else {
        return false
    }
}

export default isAddRecipeReducer;