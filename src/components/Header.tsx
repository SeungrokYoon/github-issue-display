import styled from 'styled-components'

function Header({ owner, repo }: { owner: string; repo: string }) {
  return (
    <StyledHeader>
      {owner} / {repo}
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  padding: auto;
  height: 50px;
  background-color: ${({ theme }) => theme.bgColor_canvas_default};
  border-bottom: 1px solid ${({ theme }) => theme.border_default};
`
