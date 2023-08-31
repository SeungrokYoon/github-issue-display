import { Suspense } from 'react'

import styled from 'styled-components'
import { useIntersect } from '../hooks/useIntersect'
import { useNavigate } from 'react-router-dom'
import { useIssueListContext } from '../store/IssueListContext'
import { dateStringToKoreanString } from '../utils/dateConverter'
import { NumberTitleWrapper, Comments, StyledIssueItem } from './styles'
import ImageBanner from '../components/ImageBanner'
import { advertisement } from '../constants/advertisement'

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

  const isAdPosition = (index: number) => (index + 1) % 4 === 0

  return (
    <>
      <section>
        <Suspense fallback={<div>Loading Issue List...</div>}>
          {data.map((v, index) => (
            <>
              <StyledIssueItem key={v.number} onClick={() => navigate(`/issues/${v.number}`)}>
                <div>
                  <NumberTitleWrapper>
                    <span>#{v.number}</span>
                    <span>
                      <strong>{v.title}</strong>
                    </span>
                  </NumberTitleWrapper>
                  <div>
                    <span className="author">작성자: {v.user?.login}</span>
                    <span>작성일: {dateStringToKoreanString(v.created_at)}</span>
                  </div>
                </div>
                <Comments>
                  <span>코멘트: {v.comments}</span>
                </Comments>
              </StyledIssueItem>
              {isAdPosition(index) && (
                <ImageBanner
                  alt={advertisement.banner.ALT}
                  link={advertisement.banner.LINK}
                  src={advertisement.banner.IMG}
                />
              )}
            </>
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
