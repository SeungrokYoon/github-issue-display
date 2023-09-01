import { useNavigate } from 'react-router-dom'
import {
  StyledTitle,
  StyledSubTitle,
  StyledComment,
  StyledButton,
  StyledNotFound,
} from './Error.styled'

interface ErrorNoticeProps {
  title: string
  subtitle: string
  comment: string
}

function ErrorNotice(props: ErrorNoticeProps) {
  const navigate = useNavigate()
  return (
    <StyledNotFound>
      <StyledTitle>{props.title}</StyledTitle>
      <StyledSubTitle>{props.subtitle}</StyledSubTitle>
      <StyledComment>{props.comment}</StyledComment>
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

export default ErrorNotice
