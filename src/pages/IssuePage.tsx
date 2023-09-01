import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { IssueContentResponseData, octokitApi } from '../api/issue'
import remarkGfm from 'remark-gfm'
import { styled } from 'styled-components'
import { Comments, NumberTitleWrapper, StyledIssueItem } from './styles'
import { dateStringToKoreanString } from '../utils/dateConverter'
import rehypeRaw from 'rehype-raw'

function IssuePage() {
  const { issueNumber } = useParams()
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
      if (!res.data.body) {
        throw new Error('Empty markdown')
      }
      setData(res.data)
    } catch (e) {
      setIsAsyncError(true)
      console.error(e)
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    getIssueContent(issueNumber)
  }, [])

  if (isLoading) return <>Loading An Issue</>
  if (isAsyncError) return <>Error</>
  if (!data) return <>data is null</>

  return (
    <>
      <article>
        <StyledIssueItem>
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
          <Comments>코멘트: {data.comments}</Comments>
        </StyledIssueItem>
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
          \
        </MarkdownWrapper>
      </article>
      {issueNumber}
    </>
  )
}

export default IssuePage

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
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
