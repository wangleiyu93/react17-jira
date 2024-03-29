import React from "react";
import { ProjectListScreen } from "screens/project-list";
import { useAuth } from "context/auth-context";
import styled from "@emotion/styled";
import { Row } from "components/lib";
import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";
import { Dropdown, Button } from "antd";
import type { MenuProps } from "antd";

export const AuthenticatedApp = () => {
  const { logout, user } = useAuth();
  const DropdownOnClick: MenuProps["onClick"] = ({ key }) => {
    switch (key) {
      case "0": {
        logout();
        break;
      }
      default: {
      }
    }
  };
  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <SoftwareLogo width={"18rem"} color="rgb(38,132,255)" />
          <h2>项目</h2>
          <h2>用户</h2>
        </HeaderLeft>
        <HeaderRight>
          <Dropdown
            menu={{
              items: [{ label: "登出", key: "0" }],
              onClick: DropdownOnClick,
            }}
          >
            <Button type="link" onClick={(e) => e.preventDefault()}>
              Hi,{user?.name}
            </Button>
          </Dropdown>
        </HeaderRight>
      </Header>

      <Main>
        <ProjectListScreen />
      </Main>
    </Container>
  );
};
const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;
const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
const Main = styled.main``;
