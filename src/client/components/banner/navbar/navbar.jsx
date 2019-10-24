import React, {Fragment} from 'react';
import style from './navbar.scss';

export default class Navbar extends React.Component{

    searchClickHandler(){
        this.props.searchClickHandler()
    }

    addRecipeClickHandler(){
        this.props.addRecipeClickHandler()
    }

    render(){

        return(
            <div className={style.navbar}>
                <div className={style.search}>
                    <p onClick={()=>this.searchClickHandler()}>Search</p>
                </div>
                <div className={style.add}>
                    <p onClick={()=>this.addRecipeClickHandler()}>Add Recipe</p>
                </div>
            </div>
        )
    }
}