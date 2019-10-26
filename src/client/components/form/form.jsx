import React, {Fragment} from 'react';
import style from './form.scss'

export default class Form extends React.Component{
    constructor(){
        super()
        this.state = {
            loading: false,
            title: '',
            image: '',
            quantity: [],
            quantityType: [],
            ingredient: [],
            ingredientType: [],
            instruction: [],
            recipe: []
        }
    }

    removeIngHandler(index){
        console.log(index)
        let quantity = this.state.quantity
        let quantityType = this.state.quantityType
        let ingredient = this.state.ingredient
        let ingredientType = this.state.ingredientType
        quantity.splice(index,1);
        quantityType.splice(index,1);
        ingredient.splice(index,1);
        ingredientType.splice(index,1);
        this.setState({quantity: quantity, quantityType: quantityType, ingredient:ingredient, ingredientType: ingredientType})
    }

    recipeNameHandler(event){
        this.setState({title: event.target.value})
    }

    uploadImageHandler(event){
        let url =   `https://api.cloudinary.com/v1_1/kinskin/image/upload`
        const files = event.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'recipekeeper')
        this.setState({loading: true}, ()=>{
            fetch(url,
                {
                    method: 'POST',
                    body: data
                }
            )
            .then(response => response.json())
            .then(data => this.setState({image:data.secure_url,loading:false}))
            .catch(err => console.log('err: ', err))
        })
    }

    addIngredient(){
        this.setState({quantity:[...this.state.quantity,''], quantityType:[...this.state.quantityType,''], ingredient: [...this.state.ingredient, ''], ingredientType:[...this.state.ingredientType,'']})
    }

    quantityHandler(event,index){
        let quantity = this.state.quantity
        quantity[index]=event.target.value
    }

    handleQuantityTypeOption(event,index){
        let quantityType = this.state.quantityType
        quantityType[index] = event.target.value
    }

    ingredientHandler(event,index){
        let ingredient = this.state.ingredient
        ingredient[index] = event.target.value
    }

    handleIngredientTypeOption(event,index){
        let ingredientType = this.state.ingredientType
        ingredientType[index] = event.target.value
    }

    removeIstHandler(index){
        let instruction = this.state.instruction
        instruction.splice(index,1)
        this.setState({instruction: instruction})
    }

    addInstruction(){
        console.log('hello')
        this.setState({instruction: [...this.state.instruction,'']})
    }

    instructionHandler(event,index){
        console.log(index)
        console.log(event.target.value)
    }

    submitHandler(){
        console.log('submitting')
        console.log(this.state.quantity)
        console.log(this.state.quantityType)
        console.log(this.state.ingredient)
        console.log(this.state.ingredientType)
    }

    render(){
        let loading = this.state.loading
        let ingredientInput = this.state.ingredient.map((ingredient,index)=>{
            return (
                <div className={style.indivIng} key={index}>
                    <i className='bx bx-x' style={{fontSize:'20px'}} onClick={()=>this.removeIngHandler(index)}></i>
                    <input className={style.qtyInput} type='number' min='0' max='200000000' value={ingredient.qnty} onChange={(event)=>this.quantityHandler(event,index)} placeholder='Quantity'/>
                    <select onChange={(event)=>this.handleQuantityTypeOption(event,index)}>
                        <option>Select one</option>
                        <option value='pcs'>Pcs</option>
                        <option value='grams'>Grams</option>
                    </select>
                    <input onChange={(event)=>this.ingredientHandler(event,index)} placeholder='Ingredient'/>
                    <select onChange={(event)=>this.handleIngredientTypeOption(event,index)}>
                        <option>Select one</option>
                        <option value='dry'>Dry ingredient</option>
                        <option value='wet'>Wet ingredient</option>
                    </select>
                </div>
            )
        })

        let instructionInput = this.state.instruction.map((instruction,index)=>{
            return(
                <div className={style.instruction} key={index}>
                    <i className='bx bx-x' style={{fontSize:'20px'}} onClick={()=>this.removeIstHandler(index)}></i>
                    <input onChange={(event)=>this.instructionHandler(event,index)} placeholder='Instruction'/>
                </div>
            )
        })

        return(
            <div className={style.form}>
                <div className={style.formHeader}>
                    <p>New Recipe</p>
                </div>
                <div className={style.formBody}>
                    <div className={style.formBodyName}>
                        <label>Recipe name: </label>
                        <input className={style.inputTitle} placeholder="Recipe name" onChange={(event)=>this.recipeNameHandler(event)}/>
                    </div>
                    <div className='my-5'>
                        <input type="file" name="file" placeholder="Upload an image" onChange={(event)=>this.uploadImageHandler(event)}/>
                        { loading ?
                            ( <iframe src="https://giphy.com/embed/3oEjI6SIIHBdRxXI40" width="200" height="200" frameBorder="0" className="giphy-embed" allowFullScreen></iframe> ) : ( <img src={this.state.image} style={{ width: '300px' }} />
                        )}
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <div className={style.formBodyIngredient}>
                                <label>Ingredients</label>
                                {ingredientInput}
                                <br/>
                                <button onClick={()=>this.addIngredient()}>Add ingredient</button>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className={style.formBodyInstruction}>
                                <label>Instruction</label>
                                {instructionInput}
                                <br/>
                                <button onClick={()=>this.addInstruction()}>Add instruction</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.formSubmit}>
                    <button onClick={()=>this.submitHandler()}>Post recipe</button>
                </div>
            </div>
        )
    }
}