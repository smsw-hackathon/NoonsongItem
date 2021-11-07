import React, {useEffect} from 'react'
import { Layout,Menu,Breadcrumb } from 'antd';
import styled from 'styled-components';
import axios from 'axios'
const { Header, Footer, Content } = Layout;

const LandingPage = () =>{
    return(
        <Layout className="layout">
            <StyledHeader>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['']}>
                <Menu.Item>
                    Home
                </Menu.Item>
                <Menu.Item>
                    MyPage
                </Menu.Item>
                <Menu.Item>
                    Create
                </Menu.Item>
            </Menu>
            </StyledHeader>
            <Content style={{ padding: '0 50px' }}>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ?2018 Created by Ant UED</Footer>
        </Layout>
    )
}

const StyledHeader = styled(Header)`
    color: #012F48;
`

export default LandingPage
