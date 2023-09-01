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

export const StyledNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  height: 100vh;
`

export const StyledTitle = styled.span`
  font-size: 4rem;
`

export const StyledSubTitle = styled.span`
  font-size: 1.5rem;
`

export const StyledComment = styled.span`
  font-size: 1rem;
`

export const StyledButton = styled.button`
  margin: 10px;
  padding: 5px 10px;
  border: 0.5px solid black;
  border-radius: 10px;
  color: black;
  cursor: pointer;
`

export { StyledIssueItem, NumberTitleWrapper, Comments }
