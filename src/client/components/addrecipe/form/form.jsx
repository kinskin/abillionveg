import React, {Fragment} from 'react';
import style from './form.scss'

export default class Form extends React.Component{
    constructor(){
        super()
        this.state = {
            title: '',
            ingredients: [],
            instruction: [],
        }
    }

    changeHandler(event){
        console.log('this is the title: ', event.target.value)
    }

    addIngredient(){
        this.setState({ingredients: [...this.state.ingredients, '']})
    }

    render(){
        let ingredientInput = this.state.ingredients.map((ingredient,index)=>{
            return (
                <div className={style.indivIng} key={index}>
                    <input id='ingredient' value={ingredient.ingredient} placeholder='Ingredient'/>
                    <input id='quantity' value={ingredient.qnty} placeholder='quantity'/>
                </div>
            )
        })

        return(
            <div className={'text-center'}>
                <div className={style.formHeader}>
                    <p>New Recipe</p>
                </div>
                <div className={style.formBody}>
                    <div className={style.formBodyName}>
                        <label>Recipe name: </label>
                        <input className={style.inputTitle} placeholder="Recipe name" onChange={(event)=>this.changeHandler(event)}/>
                    </div>
                    <div className={style.formBodyIngredient}>
                        <label>Ingredients</label>
                        {ingredientInput}
                        <br/>
                        <button onClick={()=>this.addIngredient()}>Add ingredient</button>
                    </div>
                    <div className={style.formBodyInstruction}>
                        <button>Add instruction</button>
                    </div>
                </div>
                <div className={style.formSubmit}>
                    <button>Post recipe</button>
                </div>
            </div>
        )
    }
}