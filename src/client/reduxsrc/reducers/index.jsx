import isSearchReducer from './isSearch.jsx';
import isAddRecipeReducer from './isAddRecipe.jsx';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    search: isSearchReducer,
    addRecipe: isAddRecipeReducer
})

export default allReducers;