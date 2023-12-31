import { useState, useEffect, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { IssueContentResponseData, octokitApi } from '../api/issue'
import remarkGfm from 'remark-gfm'
import { styled } from 'styled-components'
import { Comments } from '../components/ErrorNotice/Error.styled'
import { dateStringToKoreanString } from '../utils/dateConverter'
import rehypeRaw from 'rehype-raw'
import AsyncErrorPage from './AsyncErrorPage'
import Loading from '../components/Loading'

function IssuePage() {
  const { issueNumber } = useParams()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [isAsyncError, setIsAsyncError] = useState(false)
  const [data, setData] = useState<IssueContentResponseData>()

  const getIssueContent = useCallback(async (issueNumber: string | undefined) => {
    if (issueNumber === undefined) return
    setIsLoading(true)
    try {
      const res = await octokitApi.getIssueContent({
        owner: 'facebook',
        repo: 'react',
        issueNumber: parseInt(issueNumber),
      })
      setData(res.data)
      if (issueNumber.startsWith(res.data.number.toString())) {
        navigate(`/issues/${res.data.number}`, { replace: true })
      }
    } catch (e) {
      setIsAsyncError(true)
      console.error(e)
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    getIssueContent(issueNumber)
  }, [])

  if (isLoading) return <Loading height="100px" width="100px" />
  if (isAsyncError || !data) return <AsyncErrorPage errorType="DATA_FETCH_FAIL" />
  return (
    <>
      <article>
        <StyledTitleArea>
          <LeftPart>
            <ProfileImage alt="profile_img" src={data.user?.avatar_url} />
            <NumberTitleWrapper>
              <div>
                <span>#{data.number}</span>
                <span>
                  <strong>{data.title}</strong>
                </span>
              </div>
              <div>
                <span className="author">작성자: {data.user?.login}</span>
                <span>작성일: {dateStringToKoreanString(data.created_at)}</span>
              </div>
            </NumberTitleWrapper>
          </LeftPart>
          <Comments>코멘트: {data.comments}</Comments>
        </StyledTitleArea>
        <MarkdownWrapper>
          <ReactMarkdown
            className="markdown"
            components={{
              img: ({ ...props }) => <img style={{ maxWidth: '100%' }} {...props} alt="" />,
              pre: ({ ...props }) => (
                <pre
                  style={{
                    maxWidth: '100%',
                    padding: '8px',
                    overflow: 'auto',
                    border: '0.5px solid gray',
                  }}
                  {...props}
                />
              ),
            }}
            rehypePlugins={[rehypeRaw as any, remarkGfm]}
          >
            {data.body ? data.body : ''}
          </ReactMarkdown>
        </MarkdownWrapper>
      </article>
    </>
  )
}

export default IssuePage

const StyledTitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.bgColor_canvas_main};
  border-bottom: 1px solid ${({ theme }) => theme.border_default};
`

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`

const NumberTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  & .author {
    margin-right: 20px;
  }
`

const LeftPart = styled.div`
  display: flex;
  align-items: center;
`

const MarkdownWrapper = styled.div`
  h2 {
    margin: 3px 0px;
    border-bottom: 1px solid ${({ theme }) => theme.border_default};
  }
  p {
    font-weight: 400;
    margin: 1rem 0;
  }

  li {
    list-style: none;
  }

  pre {
    background-color: ${({ theme }) => theme.bgColor_canvas_code};
    border-color: ${({ theme }) => theme.border_default};
    border-radius: 1rem;
  }
`
