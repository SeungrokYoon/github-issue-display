import App from '../App'
import { createBrowserRouter } from 'react-router-dom'
import IssueListPage from './IssueListPage'
import IssuePage from './IssuePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'issues',
        element: <IssueListPage />,
      },
      {
        path: 'issues/:id',
        element: <IssuePage />,
      },
    ],
  },
])
