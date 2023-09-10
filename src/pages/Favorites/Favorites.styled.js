import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 50px 128px 150px 128px;
`;

export const Button = styled.button`
  color: #3470ff;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  padding: 0 20px;

  border: none;
  background-color: transparent;

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;

export const Text = styled.p`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #444888;
  background: #ffffff;
`;

export const Image = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  margin-bottom: 40px;
`;
