import React from 'react'
import { styled } from 'styled-components';
import {Wrapper, Title, Form, Inputs, Input} from "../components/Common";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//token X import { login } from '../apis/login';

import axios from 'axios';


// 로그인 화면

const Login = () => {
    //로그인 입력 받기
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    
    const [button, setButton] = useState(true);

    function changeButton() {
        id.includes('@') && pw.length >= 7 ? setButton(false) :setButton(true);
    }


    const navigate = useNavigate();
    
    const onChangeId = (e) => {
        setId(e.target.value);
        changeButton();
    };
    const onChangePw = (e) => {
        setPw(e.target.value);
        changeButton();
    };

    //토큰 없이 json-server 이용 로그인
    const onClick = async() => {

        //토큰 없이 json-server 이용 로그인
        axios.get('http://localhost:30/signup',{params:{id:id,pw:pw}})
        .then((Response)=>{
            if (Response.data.length>0 && Response.data[0].id === id && Response.data[0].pw === pw){
                localStorage.setItem('id', Response.data[0].id);
                localStorage.setItem('pw', Response.data[0].pw);
                navigate("/mypage");
            }else{
                alert('로그인 정보가 틀렸습니다.\n비회원은 회원가입을 부탁드립니다.');
            }});
            
    };


    //login.js에서 post 요청한 데이터 가져오기
    //const onClick = async() => {
        //로그인 api
        //token X const result = await login(id, pw);
        //token X console.log(result); //localstorage에 token 잘 들어감
        //구조분해할당으로 data.data에서 accessToken, refreshToken을 꺼냄
        //token X const {accessToken, refreshToken} = result;
        //localstorage에 저장 setItem(key, value)
        //token X localStorage.setItem('access', accessToken);
        //token X localStorage.setItem('refresh', refreshToken);
        //localStorage.setItem('id', id);
        //마이페이지로 이동
        //navigate("/mypage")
    //};





  return (
    <Wrapper>
        <Title>로그인하기</Title>
        <Form>
            <Inputs>
                <Input placeholder="이메일" value={id} onChange={onChangeId}/>
                <Input placeholder="비밀번호 8자리 이상" type="password" value={pw} onChange={onChangePw}/>
            </Inputs>
            <Button onClick={onClick} disabled={button}>Login</Button>
        </Form>
        <CustomLink to='/signup'>회원가입하기</CustomLink>
    </Wrapper>
  )
}

export default Login;

const Button = styled.button`
    background-color: black;
    color: white;
    padding: 20px;
    border-radius: 10px;
    &:disabled {
        background-color: rgba(0, 0, 0, 0.25);
      }
}
`;

//링크 css 수정
const CustomLink = styled(Link)`
    margin-top: 20px;
    color: black;
    text-decoration: none;
    &:visitied {
        color: black;
        text-decoration: none;
    }
`;