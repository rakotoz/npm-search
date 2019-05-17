import React from 'react';
import { Row, List, Col } from 'antd';
import Text from 'antd/lib/typography/Text';

class DetailVersions extends React.Component {
    constructor(props) {
        super(props)
        this.versions = this.props.versions;
    }
    render() {
        return (
            <Row>
            
                <List
                    size="small"
                    dataSource={this.versions}
                    renderItem={item=> {
                        return (
                            <List.Item>
                                <Col span={18}>
                                    <a href={item.url}>
                                        <Text>
                                            {item.version}
                                        </Text>
                                    </a>
                                </Col>  
                                <Col span={6}>
                                    <Text>{item.date}</Text>
                                </Col>  
                            </List.Item>
                        )
                    }}
                ></List>

            </Row>
        )
    }
}

export default DetailVersions
