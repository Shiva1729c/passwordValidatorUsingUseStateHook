// Write your code here
import {useState} from 'react'
import {
  AppContainer,
  PasswordContainer,
  Heading,
  Description,
  InputField,
  ErrorText,
} from './styledComponents'

const PasswordValidator = () => {
  const [inputPassword, setInputPassword] = useState('')
  const showErrorMsg = inputPassword.trim().length < 8

  const onChangeInput = event => {
    setInputPassword(event.target.value)
  }

  return (
    <AppContainer>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <Description>Check how strong and secure is your password</Description>
        <InputField
          type="password"
          onChange={onChangeInput}
          value={inputPassword}
        />
        {showErrorMsg && (
          <ErrorText>Your password must be at least 8 characters</ErrorText>
        )}
      </PasswordContainer>
    </AppContainer>
  )
}

export default PasswordValidator
