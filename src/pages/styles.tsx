import styled from 'styled-components'

const StyledIssueItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.bgColor_gray};
  border: 1px solid ${({ theme }) => theme.border_default};
  border-radius: 0.5rem;
  &:hover {
    transform: translateY(-0.25rem);
    transition: transform ease-in-out 0.5s;
  }
  cursor: pointer;
`

const NumberTitleWrapper = styled.div`
  display: flex;
  gap: 20px;
  & .author {
    margin-right: 20px;
  }
`
const Comments = styled.div`
  margin-left: 10%;
  white-space: nowrap;
`
export { StyledIssueItem, NumberTitleWrapper, Comments }
