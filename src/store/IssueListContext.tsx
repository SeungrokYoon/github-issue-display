import { createContext, useContext, PropsWithChildren } from 'react'
import { IssueListResponseData } from '../api/issue'
import { useFetchIssueList } from '../hooks/useFetchIssueList'

interface IssueListCtx {
  data: IssueListResponseData
  getIssueList: () => void
  loading: boolean
  error: boolean
}

export const IssueListContext = createContext<IssueListCtx | null>(null)

export const useIssueListContext = () => {
  const ctx = useContext(IssueListContext)
  if (!ctx) throw new Error('Issue List Context is null!')
  return ctx
}

export function IssueListContextProvider({ children }: PropsWithChildren) {
  const issueData = useFetchIssueList()

  return <IssueListContext.Provider value={issueData}>{children}</IssueListContext.Provider>
}
