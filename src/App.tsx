import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header>App page header</header>
      <body>
        <Suspense fallback={<div>loading</div>}>
          <Outlet />
        </Suspense>
      </body>
    </div>
  )
}

export default App
