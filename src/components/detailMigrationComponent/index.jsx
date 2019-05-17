import React from 'react';
import { Typography, Select, Row, Col, List } from 'antd';
import { getCurrent } from '../../actions'

const { Title, Text } = Typography;


class DetailMigration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dependencies: this.transformDependencies(this.props.dependencies),
            devDependencies: this.transformDependencies(this.props.devDependencies),
            newDependencies: this.transformDependencies(this.props.dependencies),
            newDevDependencies: this.transformDependencies(this.props.devDependencies),
        }
        this.updateVersion = async version=> {
            const newPackage = await getCurrent({name: this.props.packageInfo.name, version: version})
            
            this.setState({
                newDependencies: this.transformDependencies(newPackage.dependencies),
                newDevDependencies: this.transformDependencies(newPackage.devDependencies)
            })
        }
    }
    transformDependencies(dependencies) {
        return Object.keys(dependencies).map(dep=>{
            return {
                name: dep,
                version: dependencies[dep]
            }
        })
    }
    render() {
        console.log(this.props)
        return (
            <Row>
            
                <Row>
                
                    <Col span={12}>

                        <Title level={2}>Current version</Title>

                        <Title level={3}>{this.props.packageInfo.version}</Title>
                    
                    </Col>

                    <Col span={12}>
                    
                        <Title level={2}>New version</Title>
                    
                        <Select onChange={this.updateVersion} defaultValue={this.props.packageInfo.version} style={{width: '250px'}}>

                            {this.props.versions.map(version=>{
                                return (
                                    <Select.Option key={version.version} value={version.version}>{version.version}</Select.Option>
                                )
                            })}

                        </Select>

                    </Col>
                
                </Row>
            
                <Row style={{marginTop: '20px'}}>

                    <Title level={3}>Dependencies</Title>

                    <Col span={12}>
                    
                        <List
                            size="small"
                            dataSource={this.state.dependencies}
                            renderItem={item=> {
                                return (
                                    <List.Item>
                                        <Col span={20}>
                                            <Text>
                                                {item.name}
                                            </Text>
                                        </Col>
                                        <Col span={4}>
                                            <Text code>
                                                {item.version}
                                            </Text>
                                        </Col>
                                    </List.Item>
                                )
                            }}
                        ></List>
                    
                    </Col>
                    <Col span={12}>
                    
                        <List
                            size="small"
                            dataSource={this.state.newDependencies}
                            renderItem={(item, index)=> {
                                return (
                                    <List.Item>
                                        <Col span={20}>
                                            <Text>
                                                {item.name}
                                            </Text>
                                        </Col>
                                        <Col span={4}>
                                            <Text code>
                                                {item.version}
                                            </Text>
                                        </Col>
                                    </List.Item>
                                )
                            }}
                        ></List>
                    
                    </Col>

                </Row>

                <Row style={{marginTop: '20px'}}>

                    <Title level={3}>Dev Dependencies</Title>

                    <Col span={12}>
                    
                        <List
                            size="small"
                            dataSource={this.state.devDependencies}
                            renderItem={item=> {
                                return (
                                    <List.Item>
                                        <Col span={20}>
                                            <Text>
                                                {item.name}
                                            </Text>
                                        </Col>
                                        <Col span={4}>
                                            <Text code>
                                                {item.version}
                                            </Text>
                                        </Col>
                                    </List.Item>
                                )
                            }}
                        ></List>
                    
                    </Col>
                    <Col span={12}>
                    
                        <List
                            size="small"
                            dataSource={this.state.newDevDependencies}
                            renderItem={(item, index)=> {
                                return (
                                    <List.Item>
                                        <Col span={20}>
                                            <Text>
                                                {item.name}
                                            </Text>
                                        </Col>
                                        <Col span={4}>
                                            <Text code>
                                                {item.version}
                                            </Text>
                                        </Col>
                                    </List.Item>
                                )
                            }}
                        ></List>
                    
                    </Col>

                </Row>
            </Row>
        )
    }
}

export default DetailMigration
