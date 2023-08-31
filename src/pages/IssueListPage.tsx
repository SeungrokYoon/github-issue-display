import { Suspense } from 'react'

import styled from 'styled-components'
import { useIntersect } from '../hooks/useIntersect'
import { useNavigate } from 'react-router-dom'
import { useIssueListContext } from '../store/IssueListContext'
import { dateStringToKoreanString } from '../utils/dateConverter'

function IssueListPage() {
  const { getIssueList } = useIssueListContext()
  const { data, loading } = useIssueListContext()
  const ref = useIntersect(
    async (entry, observer) => {
      observer.unobserve(entry.target)
      await getIssueList()
    },
    { root: null, rootMargin: '1px', threshold: 0.3 }
  )
  const navigate = useNavigate()

  return (
    <>
      <h1>IssueListPage</h1>
      <section>
        <Suspense fallback={<div>Loading Issue List...</div>}>
          {data.map((v) => (
            <IssueItem key={v.number} onClick={() => navigate(`/issues/${v.number}`)}>
              <span>이슈번호{v.number}</span>
              <span>제목{v.title}</span>
              <span>작성자: {v.user?.login}</span>
              <span>댓글: {v.comments}</span>
              <span>작성일: {dateStringToKoreanString(v.created_at)}</span>
            </IssueItem>
          ))}
          {loading && <>loading</>}
        </Suspense>
      </section>
      <Target ref={ref}></Target>
    </>
  )
}

export default IssueListPage

const Target = styled.div`
  height: 1px;
`

const IssueItem = styled.div`
  width: 100%;
  margin: 10px;
  background-color: aliceblue;
`
