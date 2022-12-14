import React, { useState, useCallback, useMemo } from 'react';
import {Form, Input, Button} from 'antd';
import Link from "next/link";
import styled from 'styled-components';
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {login} from "../reducers/user";

const ButtonWrapper = styled.div`
    margin-top : 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = () => {

    const dispatch = useDispatch();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    },[]);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    },[]);

    //const style = useMemo(() => ({ marginTop: 10}),[]);

    const onSubmitForm = useCallback((e) => {
        console.log(id, password);
        dispatch(login(id, password));
    },[id, password]);

    return (
        <>
            <FormWrapper onFinish={onSubmitForm}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br />
                    <Input name="user-id" value={id} onChange={onChangeId} required />
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br />
                    <Input
                        name="user-password"
                        type="password"
                        value={password}
                        onChange={onChangePassword}
                        required
                    />
                </div>
                <ButtonWrapper>
                    <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                    <Link href="/signup"><a><Button>회원가입</Button></a></Link>
                </ButtonWrapper>
                <div></div>
            </FormWrapper>
        </>
    );
}

export default LoginForm;