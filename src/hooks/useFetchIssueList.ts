import { useEffect, useState } from 'react'
import { IssueListResponseData, octokitApi } from '../api/issue'

const useFetchIssueList = () => {
  const [issueList, setIssueList] = useState<IssueListResponseData>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [page, setPage] = useState(1)

  const getIssueList = async () => {
    setIsLoading(true)
    try {
      const res = await octokitApi.getIssueList({
        owner: 'facebook',
        repo: 'react',
        page: page,
      })
      console.info(page)
      setIssueList((prev) => {
        const pureNewIssues = res.data
          .filter((issue) => !issue.pull_request)
          .filter((issue) => !prev.find((prevIssue) => prevIssue.number === issue.number))
        console.info(pureNewIssues)
        return prev.concat(...pureNewIssues)
      })
      setPage(() => page + 1)
    } catch (e) {
      setIsError(true)
      console.error(e)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getIssueList()
  }, [])

  return { data: issueList, getIssueList, loading: isLoading, error: isError }
}

export { useFetchIssueList }
