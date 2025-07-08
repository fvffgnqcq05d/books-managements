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
                    getItem('English', '/class-1/english'),
                    getItem('Math', '/class-1/math'),
                    getItem('Hindi', '/class-1/hindi'),
                ]),
            getItem(
                'Class 2',
                'class2',
                <DesktopOutlined />,
                [
                    getItem('Hindi', '/class-2/hindi'),
                    getItem('English', '/class-2/english'),
                    getItem('Math', '/class-2/math'),
                ]),
            getItem(
                'Class 3',
                'class 3',
                <DesktopOutlined />,
                [
                    getItem('English', '/class-3/english'),
                    getItem('Math', '/class-3/math'),
                    getItem('Hindi', '/class-3/hindi'),
                ]),
            getItem(
                'Class 4',
                'class 4',
                <DesktopOutlined />,
                [
                    getItem('English', '/class-4/english'),
                    getItem('Math', '/class-4/math'),
                    getItem('Hindi', '/class-4/hindi'),
                ]),
            getItem(
                'Class 5',
                'class 5',
                <DesktopOutlined />,
                [
                    getItem('English', '/class-5/english'),
                    getItem('Math', '/class-5/math'),
                    getItem('Hindi', '/class-5/hindi'),
                ]),
            getItem(
                'Class 6',
                'class 6',
                <DesktopOutlined />,
                [
                    getItem('English', '/class-6/english'),
                    getItem('Math', '/class-6/math'),
                    getItem('Hindi', '/class-6/hindi'),
                    getItem('Science', '/class-6/science'),
                    getItem('Sanskrit', '/class-6/sanskrit'),
                    getItem('Socialscience', '/class-6/socialscience'),
                ]),

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