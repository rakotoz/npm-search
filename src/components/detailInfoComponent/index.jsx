import React from 'react';
import moment from 'moment';
import { Typography, Row, Col } from 'antd';

const { Title, Text } = Typography;

class DetailInfo extends React.Component {
    formatDate(date) {
        return moment(date).format('YYYY-MM-DD')
    }
    constructor(props) {
        super(props);
        this.info = this.props.info;
    }
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Text type="secondary" style={{fontSize: '20px'}}>{this.info.description}</Text>
                    </Col>
                </Row>
                <Row style={{marginTop: '20px'}}>
                    <Col span={6}>
                        <Title level={2} style={{marginBottom: 0}}>Version</Title>
                        <Title level={4} style={{marginBottom: 0}}>{this.info.version}</Title>
                    </Col>
                    <Col span={6}>
                        <Title level={2} style={{marginBottom: 0}}>License</Title>
                        <Title level={4} style={{marginBottom: 0}}>{this.info.license}</Title>
                    </Col>
                    <Col span={8}>
                        <Title level={2} style={{marginBottom: 0}}>Homepage</Title>
                        <Title level={4} style={{marginBottom: 0}}>
                            <a href={this.info.homepage}>
                                {this.info.homepage}
                            </a>
                        </Title>
                    </Col>
                </Row>
                <Row style={{marginTop: '20px'}}>
                    <Col span={6}>
                        <Title level={2} style={{marginBottom: 0}}>Last publish</Title>
                        <Title level={4} style={{marginBottom: 0}}>
                            {this.formatDate(this.info.published)}
                        </Title>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default DetailInfo
