import PageLayout from './PageLayout'
import { createBrowserRouter } from 'react-router-dom'
import IssueListPage from './IssueListPage'
import IssuePage from './IssuePage'
import NotFoundErrorPage from './NotFoundErrorPage'

export const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        path: '/',
        index: true,
        element: <IssueListPage />,
      },
      {
        path: 'issues/:issueNumber',
        element: <IssuePage />,
      },
      {
        path: '*',
        element: <NotFoundErrorPage errorType="NOT_FOUND" />,
      },
    ],
  },
])
