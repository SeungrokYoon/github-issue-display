import styled from 'styled-components'
import { StyledIssueItem, NumberTitleWrapper, Comments } from '../pages/styles'
import { dateStringToKoreanString } from '../utils/dateConverter'
import IssueIcon from './IssueIcon'
import { useNavigate } from 'react-router-dom'

interface IssueListItemProps {
  issueNumber: number
  title: string
  userId: string
  createdAt: string
  comments: number
}

function IssueListItem({ issueNumber, title, userId, createdAt, comments }: IssueListItemProps) {
  const navigate = useNavigate()
  return (
    <StyledIssueItem
      key={issueNumber}
      tabIndex={0}
      onClick={() => navigate(`/issues/${issueNumber}`)}
    >
      <LeftPart>
        <IconWrapper>
          <IssueIcon open={true} />
        </IconWrapper>
        <div>
          <NumberTitleWrapper>
            <span>#{issueNumber}</span>
            <span>
              <strong>{title}</strong>
            </span>
          </NumberTitleWrapper>
          <div>
            <span className="author">작성자: {userId}</span>
            <span>작성일: {dateStringToKoreanString(createdAt)}</span>
          </div>
        </div>
      </LeftPart>
      <Comments>
        <span>코멘트: {comments}</span>
      </Comments>
    </StyledIssueItem>
  )
}

export default IssueListItem

const LeftPart = styled.div`
  display: flex;
  gap: 10px;
`
const IconWrapper = styled.div`
  padding-top: 0.25rem;
`
