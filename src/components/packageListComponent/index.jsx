import React from 'react';
import { Link } from "react-router-dom";
import { Typography, Button, Row, Col, List } from 'antd';

import {MyContext} from '../../context'

const { Title, Text } = Typography;

class PackageList extends React.Component {
    static contextType = MyContext;
    render() {
        const packages = this.context.packages;
        console.log(packages)
        return (
            <List
                dataSource={packages}
                renderItem={item=> {
                    return (
                        <List.Item>
                            <Row style={{width: '100%'}} type="flex" align="middle">
                                <Col span={5}>
                                    <Title level={4} style={{marginBottom: 0}}>{item.package.name}</Title>
                                </Col>
                                <Col span={9}>
                                    <Text type="secondary">{item.package.description}</Text>
                                </Col>
                                <Col span={2} offset={5}>
                                    <Text code>{item.package.version}</Text>
                                </Col>
                                <Col span={3}>
                                    <Button type="primary">
                                        <Link to={`/detail/${item.package.name}/${item.package.version}`}>
                                            show details
                                        </Link>
                                    </Button>
                                </Col>
                            </Row>
                        </List.Item>
                    )
                }}
            >
            </List>
        )
    }
}

export default PackageList
