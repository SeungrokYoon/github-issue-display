import { useState, useEffect, Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { IssueListResponseData, octokitApi } from '../api/issue'

function IssueListPage() {
  const navigate = useNavigate()
  const [issueList, setIssueList] = useState<IssueListResponseData>([])
  const [isLoading, setIsLoading] = useState(false)

  const getIssueList = async () => {
    setIsLoading(true)
    try {
      const res = await octokitApi.getIssueList({ owner: 'facebook', repo: 'react' })
      setIssueList(res.data.filter((issue) => !issue.pull_request))
    } catch (e) {
      console.error(e)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getIssueList()
  }, [])

  if (isLoading) return <>loading</>
  return (
    <>
      <h1>IssueListPage</h1>
      <section>
        <Suspense fallback={<div>Loading Issue List...</div>}>
          {issueList.map((v) => (
            <IssueItem key={v.number} onClick={() => navigate(`/issues/${v.number}`)}>
              <span>이슈번호{v.number}</span>
              <span>제목{v.title}</span>
              <span>작성자: {v.user?.login}</span>
              <span>댓글: {v.comments}</span>
              <span>생성일: {v.created_at}</span>
            </IssueItem>
          ))}
        </Suspense>
      </section>
    </>
  )
}

export default IssueListPage

const IssueItem = styled.div`
  width: 100%;
  margin: 10px;
  background-color: aliceblue;
`
