import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import styled from 'styled-components'

function PageLayout() {
  return (
    <PageWrapper className="page-wrapper">
      <Header owner="facebook" repo="react" />
      <Main>
        <Suspense fallback={<div>loading</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </PageWrapper>
  )
}

export default PageLayout

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.textColor};
`
const Main = styled.main`
  --header-height: 50px;
  min-height: calc(100% - var(--header-height));
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.bgColor_canvas_main};
`
