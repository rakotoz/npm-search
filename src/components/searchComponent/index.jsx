import React from 'react';

import PackageList from '../packageListComponent';
import { Row, Col, Input } from 'antd';
import { search } from '../../actions'
import {MyContext} from '../../context'

const Search = Input.Search;

class SearchComponent extends React.Component {
    static contextType = MyContext;
    async searchHandler(value) {
        const result = await search(value);
        this.context.updateList(result);
    }
    render() {
        return (
            <Row>
                <Row style={{marginTop: '20px'}}>
                    <Col span={6} offset={9}>
                        <Search
                            placeholder="Basic usage"
                            enterButton="Search"
                            size="large"
                            onSearch={value=>this.searchHandler(value)}
                        />
                    </Col>
                </Row>
                <Row style={{marginTop: '20px'}}>
                    <Col span={18} offset={3}>
                        <PackageList />
                    </Col>
                </Row>
                <Row style={{marginTop: '20px'}}>

                </Row>
            </Row>
        )
    }
}

export default SearchComponent
