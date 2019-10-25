import React, {Fragment} from 'react';
import style from './addrecipe.scss';

import Form from './form/form.jsx';
import Preview from './preview/preview.jsx'

export default class AddRecipe extends React.Component{

    render(){

        return(
            <div className='container-fluid'>
                <div className={style.header}>
                    <p>Add Recipe</p>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <Form/>
                    </div>
                    <div className='col-6'>
                        <Preview/>
                    </div>
                </div>
            </div>
        )
    }
}