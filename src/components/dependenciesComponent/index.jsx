import React from 'react';
import { Typography, Row } from 'antd';

const { Title, Text } = Typography;

class DetailDependencies extends React.Component {
    constructor(props) {
        super(props)
        this.dependencies = Object.keys(this.props.dependencies);
        this.devDependencies = Object.keys(this.props.devDependencies);
    }
    render() {
        return (
            <div>
                <Row>
                    <Title level={3}>Dependencies ({this.dependencies.length})</Title>
                </Row>
                <hr />
                <Row>

                    {this.dependencies.map((dependency, index)=> {
                        return (
                            <Text key={index} style={{marginRight: '20px'}}>
                                <a
                                    style={{color: 'red', fontSize: '20px'}}
                                    href={`https://www.npmjs.com/package/${dependency}`}
                                >
                                    {dependency}
                                </a>
                            </Text>
                        )
                    })}

                </Row>
                <Row style={{marginTop: '50px'}}>
                    <Title level={3}>Dev Dependencies ({this.devDependencies.length})</Title>
                </Row>
                <hr />
                <Row>

                    {this.devDependencies.map((dependency, index)=> {
                        return (
                            <Text key={index} style={{marginRight: '20px'}}>
                                <a
                                    style={{color: 'red', fontSize: '20px'}}
                                    href={`https://www.npmjs.com/package/${dependency}`}
                                >
                                    {dependency}
                                </a>
                            </Text>
                        )
                    })}

                </Row>
            </div>
        )
    }
}

export default DetailDependencies
