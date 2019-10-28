import React, {Fragment} from 'react';
import style from './search.scss'

export default class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            recipe: props.recipe,
            filter:[]
        }
    }

    componentDidMount(){
        let savedRecipe = JSON.parse(localStorage.getItem('recipe'))
        if(savedRecipe !== null){
            savedRecipe[0] = JSON.parse(savedRecipe[0])
            this.setState({recipe: savedRecipe},()=>{
                console.log(this.state.recipe)
            })
        }
    }

    searchHandler(event){
        let recipe = this.state.recipe
        let result = recipe.filter(recipe=>recipe.title.includes(event.target.value))
        this.setState({filter: result})
    }

    showRecipeHandler(){
        let recipe = this.state.recipe
        let result = recipe.filter(recipe=>recipe.id==event.target.id)
        this.props.showRecipeHandler(result[0])
    }

    render(){

        let displayRecipe;
        let filter = this.state.filter
        if(filter.length < 0){
            displayRecipe = this.props.recipe.map((recipe,index)=>{
                return(
                    <div className={style.indivRecipe} key={index}>
                        <img src={recipe.image} style={{width:'200px'}}/>
                        <p>{recipe.title}</p>
                    </div>
                )
            })
        }
        else{
            displayRecipe = filter.map((recipe,index)=>{
                return(
                    <div className={style.indivRecipe} key={index}>
                        <img src={recipe.image} style={{width:'200px'}}/>
                        <p id={recipe.id} onClick={()=>this.showRecipeHandler()}>{recipe.title}</p>
                    </div>
                )
            })
        }

        return(
            <div className={style.search}>
                <div className={style.searchHeader}>
                    <p>Search for recipe</p>
                </div>
                <div className={style.searchInput}>
                    <input onChange={(event)=>this.searchHandler(event)} placeholder='Search recipe'/>
                </div>
                <div className={style.searchDisplay}>
                    {displayRecipe}
                </div>
            </div>
        )
    }
}