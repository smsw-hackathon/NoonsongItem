import React, { useState } from 'react'
import Axios from 'axios'
import { useDispatch } from 'react-redux'

function RegisterPage(props){
    const dispatch = useDispatch()

    const [Nickname, setNickname] = useState("")
    const [Email, setEmail] =useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const onNicknameHandler = (event) =>{
        setEmail(event.currentTarget.value)
    }
    const onEmailHandler = (event) =>{
        setEmail(event.currentTarget.value)
    }
    const onPasswordHandler = (event) =>{
        setPassword(event.currentTarget.value)
    }
    const onConfirmPasswordHandler = (event) =>{
        setPassword(event.currentTarget.value)
    }
/*
    const onSubmitHandler = (event) => {
        event.preventDefault();
        if(Password !== ConfirmPassword){
            return alert("!!!!!!!");
        }
        console.log('Nickname', Nickname)
        console.log('Email', Email)
        console.log('Password', Password)

        let body = {
            nickname: Nickname,
            email: Email,
            password: Password
        }
        /*
        dispatch(loginUser(body))
            .then(response => {
                if (response.payload.loginSuccess) {
                    props.history.push('/')
                } 
                else{
                    alert('Error')
                }
            })
    }*/

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            <form style={{ display: 'flex', flexDirection: 'column'}}
            >
                <label>Nickname</label>
                <input type="nickname" value={Nickname} onChange={onNicknameHandler} />
                <label>Sookmyung Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <label>Confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />

                <br />
                <button>
                    Login
                </button>
            </form>
        </div>
    )
}

export default RegisterPage
