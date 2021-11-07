import React, {useEffect} from 'react'
import { Layout,Menu,Breadcrumb } from 'antd';
import styled from 'styled-components';
import logo from '../mark.png'
import axios from 'axios'

import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
const { Header, Footer, Content } = Layout;

  const CreatePage = () =>{
    return(
      <Layout className="layout">
            <StyledHeader>
            <img src={logo} width="30px"/>
            <StyledMenu theme="dark" mode="horizontal" defaultSelectedKeys={['']}>
                <Item>
                    Home
                </Item>
                <Item>
                    MyPage
                </Item>
                <Item>
                    Create
                </Item>
            </StyledMenu>
            </StyledHeader>
            <Content style={{ padding: '0 50px' }}>
                
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ?2018 Created by Ant UED</Footer>
        </Layout>
    )
}

const StyledHeader = styled(Header)`
    color: #011F48;
`
const StyledMenu = styled(Menu)`
    float : right;
    padding : 0px;
`

const Item = styled(Menu.Item)`
    margin : 30px;
    float : right;
`

export default CreatePage
