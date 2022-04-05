import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const HeaderComponent = () => {
    return(
        <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/about">about</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/contact">Contact Us</Link>
                </Menu.Item>
            </Menu>
        </Header>
    )
}

export default HeaderComponent;