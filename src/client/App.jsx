import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import style from './style.scss'
import Banner from './components/banner/banner.jsx'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
          message: 'Vegan Recipe'
        };
    }

    render() {
        return (
            <Fragment>
                <Banner />
                <h1>{this.state.message}</h1>
            </Fragment>
        );
    }
}

export default hot(module)(App);