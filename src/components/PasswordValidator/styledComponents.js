// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #24263c;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PasswordContainer = styled.div`
  background-color: #383a4e;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 0px #434451;
  @media screen and (min-width: 768px) {
    padding: 16px 48px 16px 48px;
  }
`

export const Heading = styled.h1`
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 0px;
  color: #f8fafc;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`

export const Description = styled.p`
  font-size: 10px;
  font-weight: 400;
  margin-bottom: 30px;
  color: #ffffff;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const InputField = styled.input`
  width: 80%;
  padding: 4px 12px 4px 12px;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    padding: 8px 16px 8px 16px;
  }
`

export const ErrorText = styled.p`
  font-size: 8px;
  font-weight: 400;
  margin-bottom: 30px;
  color: #ef4444;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 10px;
  }
`
