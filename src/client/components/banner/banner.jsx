import React, {Fragment} from 'react';
import style from './banner.scss';

import Navbar from './navbar/navbar.jsx'

export default class Banner extends React.Component{

    searchClickHandler(){
        this.props.searchClickHandler()
    }

    addRecipeClickHandler(){
        this.props.addRecipeClickHandler()
    }

    render(){

        return(
            <div className={style.banner}>
                <div className={style.bannerOverlay}>
                    <p>Recipe Keeper</p>
                    <Navbar
                        searchClickHandler={()=>this.searchClickHandler()}
                        addRecipeClickHandler={()=>this.addRecipeClickHandler()}>
                    </Navbar>
                </div>
            </div>
        )
    }
}