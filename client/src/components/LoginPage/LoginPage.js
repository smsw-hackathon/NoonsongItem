import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../_actions/user_actions';
import { Form, Input, Button, Checkbox } from 'antd';
import logo from '../mark.png';
import ColumnGroup from 'rc-table/lib/sugar/ColumnGroup';
import { withRouter } from 'react-router';
export default LoginPage

function LoginPage() {
    <img src={logo}></img>

    const dispatch=useDispatch();
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onsubmitHandler = (event)=>{
        event.preventDefault();

        let body = {
            email: Email,
            password: Password
        }
        dispatch(loginUser(body))
    }
    //<img src={require("../public/img/mark.png").default}/>

    return (

          <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh', backgroundColor:'#012F48', fontColor:'white'
        }}>
        <Form
        name="basic"
        font={{color:'white'}}
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 20 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        >
    
        <Form.Item
          label="Email" 
          name="Email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
        <Input type="email" value={Email} onChange={onEmailHandler} size={50}/>
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"          
          rules={[{required: true, message: 'Please input your password!'}]}
        >
          <Input.Password type="password" size={"large"} value={Password} size={50} onChange={onPasswordHandler}  />
        </Form.Item>
  
        <Form.Item wrapperCol={{ offset: 12, span: 16 }}>
          <Button type="text" htmlType="submit">
              <p style={{color:'white'}}>Login</p>
          </Button>
        </Form.Item>
      </Form>
      </div>

   /*     <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh', backgroundColor:'#012F48'
        }}>
            <form style={{ display: 'flex',border:'none', flexDirection: 'column', color: 'white'}}
                onSubmit={onsubmitHandler}>    
                <label  style={{color:"white"}}>Email:
                <input type="email" value={Email} onChange={onEmailHandler} size={50} /></label>
                <label style={{color:"white"}}>Password:              
                <input type="password" size={"large"} value={Password} size={50} onChange={onPasswordHandler} /> </label>
                <br />
                <br />
                <Button type="text" style={{color:"white"}}>Get Start</Button> 
                <br />
                <br />
            </form>
            <p style={{align:'right'},{color:'white'}}><br />아직 회원이 아니신가요?</p>   

        </div>*/
    )
}
