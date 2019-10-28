import React, {Fragment} from 'react';

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

    render(){
        let displayRecipe;
        let filter = this.state.filter
        if(filter.length < 0){
            displayRecipe = this.props.recipe.map((recipe,index)=>{
                return(
                    <div>
                        <p>{recipe.title}</p>
                    </div>
                )
            })
        }
        else{
            displayRecipe = filter.map((recipe,index)=>{
                return(
                    <div>
                        <p>{recipe.title}</p>
                    </div>
                )
            })
        }

        return(
            <div>
                <h1>Hello Search</h1>
                <div>
                    <input onChange={(event)=>this.searchHandler(event)}/>
                </div>
                {displayRecipe}
            </div>
        )
    }
}