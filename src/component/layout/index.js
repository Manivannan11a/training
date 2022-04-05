import Footer from './Footer';
import './layout.css';
import HeaderComponent from './Header';
import SideNavBar from './SideNav';

import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout;

const LayoutComponent = ({ children }) => {
    return (
        <Layout>
            <HeaderComponent />
            <Layout>
                <SideNavBar />
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {children}
                    </Content>
                    <Footer />
                </Layout>
            </Layout>
        </Layout>
    )
}

export default LayoutComponent;