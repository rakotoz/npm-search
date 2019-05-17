import React from 'react';
import { Row, Col, Typography, Tabs } from 'antd';

import DetailInfo from '../detailInfoComponent'
import DetailDependencies from '../dependenciesComponent'
import DetailVersions from '../versionsComponent'
import DetailMigration from '../detailMigrationComponent'
import moment from 'moment';

import {MyContext} from '../../context';
import { getDetail } from '../../actions'

const { Title, Text } = Typography;
const TabPane = Tabs.TabPane;

class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    static contextType = MyContext;

    transformVersions(versions, times) {
        const now = moment();
        return Object.values(versions).map(version=> {
            let diff = now.diff(moment(times[version.version]), 'months');
            return {
                version: version.version,
                date: diff > 11 ? `${Math.round(diff / 12)} years ago` : diff > 0 ? `${diff} months ago` : `${now.diff(moment(times[version.version]), 'days')} days ago`,
                url: `https://www.npmjs.com/package/${version.name}/v/${version.version}`
            }
        }).reverse();
    }

    async componentDidMount() {
        const currentPackageName = this.props.match.params[0].split('/')[0];
        const currentVersion = this.props.match.params[0].split('/')[1];
        const currentPackage = await getDetail(currentPackageName);
        
        this.setState({
            packageInfo: {
                name: currentPackage.name,
                description: currentPackage.description,
                version: currentVersion,
                homepage: currentPackage.homepage,
                keywords: currentPackage.keywords,
                repository: currentPackage.repository,
                license: currentPackage.license,
                published: currentPackage.time.modified
            },
            dependencies: currentPackage.versions[currentVersion].dependencies,
            devDependencies: currentPackage.versions[currentVersion].devDependencies,
            versions: this.transformVersions(currentPackage.versions, currentPackage.time)
        })
        // console.log(currentPackage)
    }
    render() {
        const packageInfo = this.state.packageInfo;
        if (packageInfo) {
            return  (
                <Row>
                    <Row style={{marginTop: '20px'}}>
                        <Col span={6} offset={3}>
                            <Title level={1} style={{marginBottom: 0}}>{packageInfo.name}</Title>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '20px'}}>
                        <Col span={2} offset={3}>
                            <Text code>{packageInfo.version}</Text>
                        </Col>
                        <Col span={5}>
                            <Text>{packageInfo.license}</Text>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '20px'}}>
                        <Col span={18} offset={3}>
                            <Tabs defaultActiveKey="4">
                                <TabPane tab="Info" key="1">
                                    {this.state.packageInfo ? (<DetailInfo info={this.state.packageInfo} />) : null}
                                </TabPane>
                                <TabPane tab="Dpendencies" key="2">
                                    {this.state.dependencies && this.state.devDependencies ? (
                                        <DetailDependencies dependencies={this.state.dependencies} devDependencies={this.state.devDependencies}/>
                                    ) : null}
                                </TabPane>
                                <TabPane tab="Versions" key="3">
                                    {this.state.versions ? (<DetailVersions versions={this.state.versions} />) : null}
                                </TabPane>
                                <TabPane tab="Migration Info" key="4">
                                    <DetailMigration packageInfo={this.state.packageInfo} versions={this.state.versions} dependencies={this.state.dependencies} devDependencies={this.state.devDependencies}/>
                                </TabPane>
                            </Tabs>
                        </Col>
                    </Row>
                </Row>
            )
        } else {
            return null
        }
    }
}

export default Detail
