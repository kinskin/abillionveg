import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { useSelector } from 'react-redux';


import style from './style.scss'
import Banner from './components/banner/banner.jsx'
import Search from './components/search/search.jsx'
import AddRecipe from './components/addrecipe/addrecipe.jsx'


class App extends React.Component {
    constructor() {
        super();
        this.state = {
          showSearch: true,
          showAddRecipe: false
        };
    }

    searchClickHandler(){
        this.setState({showSearch:true, showAddRecipe:false})
    }

    addRecipeClickHandler(){
        this.setState({showSearch:false, showAddRecipe:true})
    }

    render() {
        let display;
        let showSearch = this.state.showSearch
        let showAddRecipe = this.state.showAddRecipe
        if(showSearch === true && showAddRecipe === false){
            display = <Search/>
        } else {
            display = <AddRecipe/>
        }
        return (
            <Fragment>
                <Banner
                    searchClickHandler={()=>this.searchClickHandler()}
                    addRecipeClickHandler={()=>this.addRecipeClickHandler()}>
                </Banner>
                {display}
            </Fragment>
        );
    }
}

export default hot(module)(App);