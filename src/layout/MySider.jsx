import React, { useState } from 'react';
import {
    CaretRightOutlined,
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const MySider = () => {
    const navigate = useNavigate()
    const [collapsed, setCollapsed] = useState(false);
    const [pdfPath, setPdfPath] = useState("https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")


    const items = [
        getItem('Home', '/', <PieChartOutlined />),
        // getItem('Option 2', '2', <DesktopOutlined />),
        getItem('Classes', 'classes', <UserOutlined />, [
            getItem(
                'Class 1',
                'class1',
                <DesktopOutlined />,
                [
                    getItem('English', '/assets/pdf/class1/english.pdf'),
                    getItem('Math', '/assets/pdf/class1/math.pdf'),

                ]),
            getItem(
                'Class 2',
                'class2',
                <DesktopOutlined />,
                [
                    getItem('Hindi', '/assets/pdf/class2/hindi.pdf'),

                ]
            ),
            getItem('Class 3', '5'),
        ]),
        // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
        getItem('Notice', '/notice', <FileOutlined />),
    ];


    return <Sider
        style={{ margin: 0, padding: 0 }}
        collapsible
        collapsed={collapsed}
        onCollapse={value => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu
            theme="dark"
            defaultSelectedKeys={['home']}
            mode="inline"
            onClick={(e) => {
                navigate(e.key)
            }}
            items={items} />
    </Sider>

}

export default MySider