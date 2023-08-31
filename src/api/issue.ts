import { Endpoints, OctokitResponse } from '@octokit/types'
import { octokit } from '../utils/octokitInstance'

export interface IssueListQuery {
  owner: 'facebook'
  repo: 'react'
  state?: 'open' | 'closed' | 'all'
  direction?: 'asc' | 'desc'
  per_page?: number
  page?: number
  sort?: 'created' | 'updated' | 'comments'
}
export interface IssueQuery extends IssueListQuery {
  issueNumber: number
}
export type IssueListResponseData =
  Endpoints['GET /repos/{owner}/{repo}/issues']['response']['data']
export type IssueContentResponseData =
  Endpoints['GET /repos/{owner}/{repo}/issues/{issue_number}']['response']['data']
type IssueListQueryParam = Omit<IssueListQuery, 'owner' | 'repo'>

const genIssueListQueryParam = (params: IssueListQueryParam) => {
  return (
    '?' +
    Object.keys(params)
      .filter((key) => key !== 'owner' && key !== 'repo')
      .map((key) => `${key}=${params[key as keyof IssueListQueryParam]}`)
      .join('&')
  )
}

export const octokitApi = {
  getIssueList: async ({
    owner,
    repo,
    state = 'open',
    direction = 'desc',
    per_page = 30,
    page = 1,
    sort = 'comments',
  }: IssueListQuery): Promise<OctokitResponse<IssueListResponseData>> =>
    await octokit.request(
      `GET /repos/${owner}/${repo}/issues${genIssueListQueryParam({
        state,
        direction,
        per_page,
        page,
        sort,
      })}`,
      {
        owner: owner,
        repo: repo,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      }
    ),
  getIssueContent: async ({
    owner,
    repo,
    issueNumber,
  }: IssueQuery): Promise<OctokitResponse<IssueContentResponseData>> =>
    await octokit.request(`GET /repos/${owner}/${repo}/issues/${issueNumber}`, {
      owner: owner,
      repo: repo,
      issue_number: issueNumber,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    }),
}
