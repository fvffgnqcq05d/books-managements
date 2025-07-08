import { Card, Col, Flex, Row } from "antd"
import Banner from "../components/home/Banner"
import { Link } from "react-router-dom"

const HomePage = () => {

    return <Flex vertical gap={"large"}>
        <Banner />
        <Row gutter={[10, 10]}>
            <Col span={8}>
                <Card title="Class 1"
                    hoverable>
                    <Row gutter={[20, 20]}>
                        <Col span={12}><Link to={"/class-1/english"}>English</Link></Col>
                        <Col span={12}>Hindi</Col>
                        <Col span={12}>Math</Col>
                    </Row>
                </Card>
            </Col>
            <Col span={8}>

                <Card title="Class 2">

                    <Row gutter={[20, 20]}>
                        <Col span={12}><Link to={"/class-2/english"}>English</Link></Col>
                        <Col span={12}><Link to={"/class-2/hindi"}>Hindi</Link></Col>
                        <Col span={12}><Link to={"/class-2/math"}>Math</Link></Col>

                    </Row>
                </Card>
            </Col>
            <Col span={8}>

                <Card title="Class 3">

                    <Row gutter={[20, 20]}>
                        <Col span={12}><Link to={"/class-3/english"}>English</Link></Col>
                        <Col span={12}><Link to={"/class-3/hindi"}>Hindi</Link></Col>
                        <Col span={12}><Link to={"/class-3/math"}>Math</Link></Col>

                    </Row>
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Class 4">

                    <Row gutter={[20, 20]}>
                        <Col span={12}><Link to={"/class-4/english"}>English</Link></Col>
                        <Col span={12}><Link to={"/class-4/hindi"}>Hindi</Link></Col>
                        <Col span={12}><Link to={"/class-4/math"}>Math</Link></Col>

                    </Row>
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Class 3">

                </Card>
            </Col>
        </Row>
    </Flex>

}

export default HomePage