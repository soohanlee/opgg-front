import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Header = () => {
  const [input, setInput] = React.useState<string>("");
  const { t } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <Container>
      <Nav>
        <InputContainer>
          <Input
            placeholder={t("header.placeholder") || ""}
            value={input}
            onChange={handleChange}
          />
          <Button>.GG</Button>
        </InputContainer>
      </Nav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  padding: 5.3rem 0 ${({ theme }) => theme.spacing.lg} 0;
  background: #1ea1f7;
`;

const Nav = styled.div`
  margin: auto;
  max-width: ${({ theme }) => theme.maxWidth};
`;

const InputContainer = styled.div`
  width: 26rem;
  height: 3.2rem;
  padding: 0.9rem 1.2rem 0.8rem 1.4rem;
  border-radius: 0.2rem;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 0 0 auto;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border: none;
  :focus {
    outline: 0;
  }
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  border: 0;
  color: ${({ theme }) => theme.colors.skyblue};
  font-weight: 900;
`;
