import React, {Fragment} from 'react';
import style from './form.scss'

import ImageUpload from './imageupload/imageupload.jsx'

export default class Form extends React.Component{
    constructor(){
        super()
        this.state = {
            title: '',
            ingredients: [],
            instruction: [],
            recipe: []
        }
    }

    removeIngHandler(index){
        console.log(index)
        let ingredients = this.state.ingredients
        ingredients.splice(index,1);
        this.setState({ingredients:ingredients})
    }

    recipeNameHandler(event){
        this.setState({title: event.target.value})
    }

    addIngredient(){
        this.setState({ingredients: [...this.state.ingredients, '']})
    }

    quantityHandler(event,index){
        console.log(index)
        console.log('this is the quantity: ', event.target.value)
    }

    handleTypeOption(event,index){
        console.log(index)
        console.log(event.target.value)
    }

    ingredientHandler(event,index){
        console.log(index)
        console.log('this.is the ingredient: ', event.target.value)
    }

    handleSelectOption(event,index){
        console.log(index)
        console.log(event.target.value)
    }

    submitHandler(){
        console.log('submitting')
    }

    render(){
        let ingredientInput = this.state.ingredients.map((ingredient,index)=>{
            return (
                <div className={style.indivIng} key={index}>
                    <i className='bx bx-x' style={{fontSize:'20px'}} onClick={()=>this.removeIngHandler(index)}></i>
                    <input className={style.qtyInput} type='number' min='0' max='200000000' value={ingredient.qnty} onChange={(event)=>this.quantityHandler(event,index)} placeholder='Quantity'/>
                    <select onChange={(event)=>this.handleTypeOption(event,index)}>
                        <option>Select one</option>
                        <option value='pcs'>Pcs</option>
                        <option value='g'>Gram</option>
                    </select>
                    <input value={ingredient.ingredient} onChange={(event)=>this.ingredientHandler(event,index)} placeholder='Ingredient'/>
                    <select onChange={(event)=>this.handleSelectOption(event,index)}>
                        <option>Select one</option>
                        <option value='dry'>Dry ingredient</option>
                        <option value='wet'>Wet ingredient</option>
                    </select>
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
                        <input className={style.inputTitle} placeholder="Recipe name" onChange={(event)=>this.recipeNameHandler(event)}/>
                    </div>
                    <ImageUpload/>
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
                    <button onClick={()=>this.submitHandler()}>Post recipe</button>
                </div>
            </div>
        )
    }
}

export const ReactExample = (props) => (
  <select name={props.name} value={props.value} onChange={props.handleChange}>
    <option value="A">Apple</option>
    <option value="B">Banana</option>
    <option value="C">Cranberry</option>
  </select>
)