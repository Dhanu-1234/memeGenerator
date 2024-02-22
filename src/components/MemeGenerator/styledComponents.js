import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  max-height: 120vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`

export const ContentContainer = styled(AppContainer)`
  flex-direction: column;
  width: 30%;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`

export const MemeContainer = styled.div`
  height: 280px;
  width: 32%;
  align-self: center;
  background-image: url(${props => `${props.bgImage}`});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const MobMemeContainer = styled.div`
  height: 200px;
  width: 32%;
  align-self: center;
  background-image: url(${props => `${props.bgImage}`});
  background-size: cover;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: flex;
    width: 90%;
  }
`

export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Open Sans';
  margin: 10px;
`

export const FormContainer = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
`

export const Label = styled.label`
  color: #7e858e;
  font-family: 'Open Sans';
  margin-top: 15px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  height: 40px;
  width: 100%;
  font-family: 'Open Sans';
  color: #5a7184;
  padding: 10px;
  border-style: solid;
  border-color: #d7dfe9;
  border-radius: 5px;
  outline: none;
`

export const Dropdown = styled.select`
  height: 40px;
  width: 100%;
  font-family: 'Open Sans';
  font-weight: 500;
  color: #1e293b;
  padding: 10px;
  border-style: solid;
  border-width: 2px;
  border-color: #d7dfe9;
  border-radius: 5px;
  outline: none;
`

export const Option = styled.option`
  color: #1e293b;
  font-family: 'Open Sans';
  font-weight: 500;
`

export const GenerateButton = styled.button`
  padding: 10px;
  margin: 20px 5px 10px;
  background-color: #0b69ff;
  color: #ffffff;
  font-family: 'Open Sans';
  font-weight: 500;
  font-size: 15px;
  border-width: 0px;
  border-radius: 5px;
  cursor: pointer;
`

export const MemeText = styled.p`
  color: #ffffff;
  font-family: 'Open Sans';
  font-weight: 500;
  font-size: ${props => `${props.fontSize}`}px;
`
