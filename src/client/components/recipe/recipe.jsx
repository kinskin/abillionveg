import React, {Fragment} from 'react'
import style from './recipe.scss'

export default class Recipe extends React.Component{


    handleBackButton(){
        this.props.handleBackButton()
    }

    render(){
        let ingredients;
        let instruction;
        if(this.props.selectedRecipe !== ''){
            ingredients = this.props.selectedRecipe.ingredients.map((ingredient,index)=>{
                return(
                    <li>
                        <p>{ingredient.quantity} {ingredient.quantityType} {ingredient.ingredient}</p>
                    </li>
                )
                console.log(ingredient.ingredient)
            })
        }

        if(this.props.selectedRecipe !== ''){
            instruction = this.props.selectedRecipe.instruction.map((instruction,index)=>{
                return(
                    <li>
                        <p>Step {index+1}: {instruction}</p>
                    </li>
                )
            })
        }


        return(
            <div className={style.recipe}>
                <div className={style.recipeHeader}>
                    <div className={style.recipeTitle}>
                        <p>{this.props.selectedRecipe.title}</p>
                    </div>
                    <div className={style.recipeBackButton}>
                        <i class='bx bx-x' onClick={()=>this.handleBackButton()}></i>
                    </div>
                </div>
                <div className={style.recipeBody}>
                    <div className={style.recipeImage}>
                        <img src={this.props.selectedRecipe.image} style={{width:'50%'}}/>
                    </div>
                    <p className={style.heading}>Ingredient</p>
                    <ul>
                        {ingredients}
                    </ul>
                    <p className={style.heading}>Instruction</p>
                    <ul>
                        {instruction}
                    </ul>
                </div>
            </div>
        )
    }
}