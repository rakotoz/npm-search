import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import {MyContext} from '../../context';

import Detail from '../detailComponent';
import SearchComponent from '../searchComponent'

class Main extends React.Component {
    constructor(props) {
        super(props);
        
        this.updateList = value=> {
            this.setState({
                packages: value.objects
            })
        }
        this.state = {
            packages: [],
            updateList: this.updateList
        }
    }
    render() {
        return (
            <MyContext.Provider value={this.state}>
                <BrowserRouter>
                    <Route exact path="/" component={SearchComponent} />
                    <Route path="/detail/*" component={Detail} />
                </BrowserRouter>
            </MyContext.Provider>
        )
    }
}

export default Main
