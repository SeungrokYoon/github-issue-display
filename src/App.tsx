import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header>App page header</header>
      <main>
        <Suspense fallback={<div>loading</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}

export default App
