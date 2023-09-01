import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

function AsyncError() {
  const navigate = useNavigate()

  return (
    <StyledNotFound>
      <StyledNumber>Sorry...</StyledNumber>
      <StyledTitle>찾으시는 데이터를 찾을 수 없습니다.</StyledTitle>
      <StyledComment>잘못된 경로로 데이터를 요청했습니다.</StyledComment>
      <StyledButton
        onClick={() => {
          navigate('/')
        }}
      >
        홈으로 돌아가기
      </StyledButton>
    </StyledNotFound>
  )
}

const StyledNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  height: 100vh;
`

const StyledNumber = styled.span`
  font-size: 4rem;
`

const StyledTitle = styled.span`
  font-size: 1.5rem;
`

const StyledComment = styled.span`
  font-size: 1rem;
`

const StyledButton = styled.button`
  margin: 10px;
  padding: 5px 10px;
  border: 0.5px solid black;
  border-radius: 10px;
  color: black;
  cursor: pointer;
`

export default AsyncError
