import styled from "styled-components";
import logo from "../assets/Logo.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <img src={logo} onClick={() => navigate("/")} />
        <Button onClick={() => navigate("/login")}>로그인</Button>
      </HeaderWrapper>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: sticky; */
  /* top: 0; */
  background-color: var(--background-primary);
  z-index: 1000;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 74.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1.6rem 1.2rem 2rem;

  > svg {
    /* 로고 svg */
    cursor: pointer;
  }
`;
const Button = styled.button`
  display: flex;
  padding: 0.7rem 1.4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--line-secondary);
  background-color: transparent;
  cursor: pointer;

  //Text
  color: var(--text-brand);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.429; /* 2rem */
  letter-spacing: 0.0203rem;

  &:hover {
    background-color: var(--background-secondary);
  }
`;

