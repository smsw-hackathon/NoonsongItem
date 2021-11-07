import React, {useEffect} from 'react'
import { Layout,Menu,Breadcrumb } from 'antd';
import styled from 'styled-components';
import axios from 'axios'

const { Header, Footer, Content } = Layout;
const CreatePage = () =>{
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
            <div className="site-layout-content">Content</div>

            </Content>
            <Footer style={{ textAlign: 'center' }}>2021 SMSW</Footer>
        </Layout>
    )
}

const StyledHeader = styled(Header)`
    color: #011F48;
`

export default CreatePage
