import { Menu, Button } from 'antd';
import { NavLink, Link } from "umi"
import "./index.less"
import React from "react"
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
    PlusCircleOutlined,
    EditOutlined,
    OrderedListOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

class App extends React.Component {
    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div style={{ width: "100%" }}>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                >
                    <Menu.Item key="1" icon={<OrderedListOutlined />}>
                        <Link to="/movielist">电影列表</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<PlusCircleOutlined />}>
                        <Link to="/addmovie">添加电影</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<EditOutlined />}>
                        <Link to="/editmovie">修改电影</Link>
                    </Menu.Item>

                </Menu>
            </div>
        );
    }
}
export default App