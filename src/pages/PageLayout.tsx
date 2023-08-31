import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

function PageLayout() {
  return (
    <div>
      <header>header</header>
      <main>
        <Suspense fallback={<div>loading</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer>footer</footer>
    </div>
  )
}

export default PageLayout
