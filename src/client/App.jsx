import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { useSelector } from 'react-redux';


import style from './style.scss'
import Banner from './components/banner/banner.jsx'
import Search from './components/search/search.jsx'
import Form from './components/form/form.jsx'
import Recipe from './components/recipe/recipe.jsx'


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            showSearch: true,
            showAddRecipe: false,
            showRecipe:false,
            selectedRecipe:'',
            recipe:{
                id:1,
                title: 'Beef rendang',
                image: `https://res.cloudinary.com/kinskin/image/upload/v1572234198/recipekeeper/cwcgjmeimapfcwlgoa87.jpg`,
                ingredients: [{
                    quantity: '100',
                    quantityType: 'Pcs',
                    ingredient: 'Chopped Beef',
                    ingredientType: 'wet'
                },
                {
                    quantity: '100',
                    quantityType: 'Gram',
                    ingredient: 'Cooking oil',
                    ingredientType: 'wet'
                },
                {
                    quantity: '1',
                    quantityType: 'Pcs',
                    ingredient: 'Cinnamon, about 2-inch length',
                    ingredientType: 'dry'
                },
                {
                    quantity: '3',
                    quantityType: 'Pcs',
                    ingredient: 'Cloves',
                    ingredientType: 'dry'
                },
                {
                    quantity: '3',
                    quantityType: 'Pcs',
                    ingredient: 'Star anise',
                    ingredientType: 'dry'
                },
                {
                    quantity: '3',
                    quantityType: 'Pcs',
                    ingredient: 'Cardamom pods',
                    ingredientType: 'dry'
                },
                {
                    quantity: '1',
                    quantityType: 'Pcs',
                    ingredient: 'Lemongrass, cut into 4-inch length and pounded',
                    ingredientType: 'dry'
                },
                {
                    quantity: '100',
                    quantityType: 'Gram',
                    ingredient: 'Thick coconut milk, coconut cream',
                    ingredientType: 'wet'
                },
                {
                    quantity: '100',
                    quantityType: 'Gram',
                    ingredient: 'Water',
                    ingredientType: 'wet'
                },
                {
                    quantity: '50',
                    quantityType: 'Gram',
                    ingredient: 'Tamarind pulp, soaked in some warm water for the juice and discard the seeds',
                    ingredientType: 'wet'
                },
                {
                    quantity: '6',
                    quantityType: 'Pcs',
                    ingredient: 'Kaffir lime leaves, very finely sliced',
                    ingredientType: 'dry'
                },
                {
                    quantity: '600',
                    quantityType: 'Gram',
                    ingredient: 'Kerisik, roasted coconut',
                    ingredientType: 'dry'
                },
                {
                    quantity: '',
                    quantityType: '',
                    ingredient: 'Sugar or palm sugar to taste',
                    ingredientType: 'dry'
                },
                {
                    quantity: '',
                    quantityType: '',
                    ingredient: 'Salt to taste',
                    ingredientType: 'dry'
                }],
                instruction:['Chop the spice paste ingredients and then blend it in a food processor until fine.', 'Heat the oil in a stew pot, add the spice paste, cinnamon, cloves, star anise, and cardamom and stir-fry until aromatic.', 'Add the beef and the pounded lemongrass and stir for 1 minute.', 'Add the coconut milk, tamarind juice, water, and simmer on medium heat, stirring frequently until the meat is almost cooked.', 'Add the kaffir lime leaves, kerisik (toasted coconut), sugar or palm sugar, stirring to blend well with the meat.', 'Lower the heat to low, cover the lid, and simmer for 1 to 1 1/2 hours or until the meat is really tender and the gravy has dried up.', 'Add more salt and sugar to taste. ', 'Serve immediately with steamed rice and save some for overnight.']
            }
        };
    }

componentDidMount(){
        let savedRecipe = JSON.parse(localStorage.getItem('recipe'))
        let recipe = this.state.recipe
        if(savedRecipe === null){
            localStorage.setItem('recipe',JSON.stringify(this.state.recipe))
        }
    }

    searchClickHandler(){
        this.setState({showSearch:true, showAddRecipe:false})
    }

    addRecipeClickHandler(){
        this.setState({showSearch:false, showAddRecipe:true})
    }

    searchHandler(){
        this.setState({showSearch:true, showAddRecipe:false})
    }

    showRecipeHandler(recipe){
        this.setState({showRecipe:true, selectedRecipe:recipe})
    }

    render() {
        let display;
        let showSearch = this.state.showSearch
        let showAddRecipe = this.state.showAddRecipe
        let showRecipe = this.state.showRecipe
        if(showSearch === true && showAddRecipe === false){
            if(showRecipe === false){
                display = <Search recipe={[this.state.recipe]} showRecipeHandler={(recipe)=>this.showRecipeHandler(recipe)}/>
            }else{
                display =   <div className='row'>
                                <div className='col-6'>
                                    <Search recipe={[this.state.recipe]} showRecipeHandler={(recipe)=>this.showRecipeHandler(recipe)}/>
                                </div>
                                <div className='col-6'>
                                    <Recipe selectedRecipe={this.state.selectedRecipe}/>
                                </div>
                            </div>
            }
        } else {
            display = <Form searchHandler={()=>this.searchHandler()}/>
        }
        return (
            <Fragment>
                <Banner
                    searchClickHandler={()=>this.searchClickHandler()}
                    addRecipeClickHandler={()=>this.addRecipeClickHandler()}>
                </Banner>
                <div className={style.content}>
                    {display}
                </div>
            </Fragment>
        );
    }
}

export default hot(module)(App);