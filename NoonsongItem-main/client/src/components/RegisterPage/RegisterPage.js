import React, { useState } from 'react'
import {Image, Button, Form, Input } from 'antd'
import styled from 'styled-components';
import logo from '../mark.png'
import Axios from 'axios'


const RegisterPage = () =>{
    const [form] = Form.useForm();
    const [Nickname, setNickname] = useState("")
    const [Email, setEmail] =useState("")
    const [Password, setPassword] = useState("")

    const onNicknameHandler = (event) =>{
        setNickname(event.currentTarget.value)
    }
    const onEmailHandler = (event) =>{
        setEmail(event.currentTarget.value)
    }
    const onPasswordHandler = (event) =>{
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        console.log('Nickname', Nickname)
        console.log('Email', Email)
        console.log('Password', Password)

        let body = {
            nickname: Nickname,
            email: Email,
            password: Password
        }
        /*dispatch(loginUser(body))
            .then(response => {
                if (response.payload.loginSuccess) {
                    props.history.push('/')
                } 
                else{
                    alert('Error')
                }
            })
            */
    }

    return(
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh', background: '#011F48', flexDirection: 'column'
        }}>
            <img src={logo} width="250" height="300" mx-auto />
            <br />
            <br />
            <Form 
            form={form}
            name="register">
                <StyledItem
                Sname="email"
                label="E-mail"
                rules={[
                {
                type: 'email',
                message: '@sm.ac.kr',
                },
                {
                required: true,
                message: 'Please input your E-mail!',
                },
                ]}
                >
                    <Input 
                    value={Email}
                    onChange={onEmailHandler}
                    />
                </StyledItem>
                <StyledItem
                Sname="password"
                label="Password"
                rules={[
                {
                required: true,
                message: 'Please input your password!',
                },
                ]}
                hasFeedback
                >
                    <Input.Password 
                    value={Password}
                    onChange={onPasswordHandler}
                    />
                </StyledItem>
            
                <StyledItem
                Sname="nickname"
                label="Nickname"
                tooltip="What do you want others to call you?"
                rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                >
                    <Input 
                    value={Nickname}
                    onChange={onNicknameHandler}
                    />
                </StyledItem>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="text" htmlType="submit" onClick={onSubmitHandler}>
                      <p style={{color:'white'}}>Submit</p>
                    </Button>
                </Form.Item>
            </Form>           
        </div>
    )
}

const StyledItem = styled(Form.Item)`
    color: white;
`
const Sname = styled(Form.Item.name)`
    color: white;
`
const StyledButton = styled(Button)`
    color: white;
`
export default RegisterPage