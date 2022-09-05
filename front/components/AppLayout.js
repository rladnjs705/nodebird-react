import React, { useState } from 'react';
import PropTypes from "prop-types";
import Link from "next/link";
import {Input, Menu, Row, Col} from "antd";
import styled from 'styled-components';
import UserProfile from "../components/UserProfile";
import LoginForm from "../components/LoginForm";

const SearchInput = styled(Input.Search)`
  verticalAlign: 'middle';
`;

//일부 컴포넌트의 공통부분처리
const AppLayout = ({children}) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    const items = [
        {
            label: <Link href="/">노드버드</Link>,
            key: "home",
        },
        {
            label: <Link href="/profile">프로필</Link>,
            key: "profile",
        },
        {
            label: <SearchInput enterButton />,
            key: "search",
        },
        {
            label: <Link href="/signup">회원가입</Link>,
            key: "signup",
        },
    ];

    return (
        <>
            <div>
                <Menu items={items} mode="horizontal" />
                <Row gutter={8}>
                    <Col xs={24} md={6} >
                        {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
                    </Col>
                    <Col xs={24} md={12} >
                        {children}
                    </Col>
                    <Col xs={24} md={6} >
                        <a href="https://github.com/rladnjs705" target="_blank" rel="noreferrer noopener">Made by Jaewon</a>
                    </Col>
                </Row>
            </div>
        </>
    )
}

AppLayout.prototypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;