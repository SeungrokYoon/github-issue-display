import { OctokitResponse } from '@octokit/types'
import { Octokit } from 'octokit'

export const octokit = new Octokit({
  auth: process.env.REACT_APP_OCTOKIT_TOKEN,
})

export interface IssueListQuery {
  owner: 'facebook'
  repo: 'react'
}

export interface IssueQuery extends IssueListQuery {
  issueNumber: number
}

export interface Issue {
  title: string
  number: number
  avatar_url: string
  state: 'open' | 'close'
  created_at: string
  updated_at: string
  comments: number
  closed_at?: string | null
  url: string
  pull_request?: {
    url: string
    html_url: string
    diff_url: string
    patch_url: string
  }
}

export const octokitApi = {
  getIssueList: async ({ owner, repo }: IssueListQuery): Promise<OctokitResponse<Issue[]>> =>
    await octokit.request(`GET /repos/${owner}/${repo}/issues`, {
      owner: owner,
      repo: repo,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    }),
  getIssueContent: async ({
    owner,
    repo,
    issueNumber,
  }: IssueQuery): Promise<OctokitResponse<Issue[]>> =>
    await octokit.request(`GET /repos/${owner}/${repo}/issues`, {
      owner: owner,
      repo: repo,
      issue_number: issueNumber,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    }),
}
