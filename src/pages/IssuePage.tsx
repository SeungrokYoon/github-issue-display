import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { IssueContentResponseData, octokitApi } from '../api/issue'
import remarkGfm from 'remark-gfm'

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
      <h1>IssuePage</h1>
      <article>
        issue page section
        <div>
          {data.number}
          {data.title}
          {data.user?.login}
          {data.created_at}
          {data.comments}
          {data.user?.avatar_url}
        </div>
        <section>issue contents</section>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.body ? data.body : ''}</ReactMarkdown>
      </article>
      {issueNumber}
    </>
  )
}

export default IssuePage
