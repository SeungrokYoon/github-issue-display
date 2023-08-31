import styled from 'styled-components'

function IssueIcon({ open = true }: { open?: boolean }) {
  return (
    <StyledSVG
      height="16"
      open={open}
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
    </StyledSVG>
  )
}

export default IssueIcon

const StyledSVG = styled.svg<{ open: boolean }>`
  & > path {
    fill: ${(props) => (props.open ? props.theme.issue_open : props.theme.issue_closed)};
  }
`
