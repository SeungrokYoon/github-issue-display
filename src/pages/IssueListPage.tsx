import { Suspense } from 'react'

import styled from 'styled-components'
import { useIntersect } from '../hooks/useIntersect'
import { useIssueListContext } from '../store/IssueListContext'
import ImageBanner from '../components/ImageBanner'
import { advertisement } from '../constants/advertisement'
import IssueListItem from '../components/IssueListItem'
import Loading from '../components/Loading'

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
  const isAdPosition = (index: number) => (index + 1) % 4 === 0

  return (
    <>
      <section>
        <Suspense fallback={<div>Loading Issue List...</div>}>
          {data.map((v, index) => (
            <>
              <IssueListItem
                comments={v.comments}
                createdAt={v.created_at}
                issueNumber={v.number}
                title={v.title}
                userId={v.user ? v.user.login : 'unknown user'}
              />
              {isAdPosition(index) && (
                <ImageBanner
                  alt={advertisement.banner.ALT}
                  link={advertisement.banner.LINK}
                  src={advertisement.banner.IMG}
                />
              )}
            </>
          ))}
        </Suspense>
      </section>
      {loading && <Loading height="100px" width="100px" />}
      <Target ref={ref}></Target>
    </>
  )
}

export default IssueListPage

const Target = styled.div`
  height: 1px;
`
