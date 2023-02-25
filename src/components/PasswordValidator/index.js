import {useState} from 'react'

import {
  MainContainer,
  Container,
  Text,
  Para,
  Paragraph,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <MainContainer>
      <Container>
        <Text>Password Validator</Text>
        <Para>Check how strong and secure is your password</Para>
        <input type="password" value={password} onChange={onChangePassword} />
        {password.length < 8 && (
          <Paragraph>Your password must be at least 8 characters</Paragraph>
        )}
      </Container>
    </MainContainer>
  )
}
export default PasswordValidator
