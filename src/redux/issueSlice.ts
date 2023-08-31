import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { octokit } from '../api/octokit';

type Issue = {
  number: number;
  title: string;
  user: string;
  updatedAt: string;
  comments: number;
  body: string;
  avatarUrl: string;
};
interface IssuesState {
  issueList: object[];
  issue: Issue;
  isLoading: boolean;
  error: null | string;
}

const initialState: IssuesState = {
  issueList: [],
  issue: { number: -1, title: '', user: '', updatedAt: '', comments: -1, body: '', avatarUrl: '' },
  isLoading: false,
  error: null,
};

export const getIssues = createAsyncThunk('issues/getIssues', async (page: number) => {
  const response = await octokit.request('GET /repos/facebook/react/issues', {
    owner: 'facebook',
    repo: 'react',
    headers: {
      accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
    page: page,
    sort: 'comments',
  });

  return response.data;
});

export const getIssueDetail = createAsyncThunk('issues/getIssueDetail', async (issueId: number) => {
  const response = await octokit.request(`GET /repos/facebook/react/issues/${issueId}`, {
    owner: 'OWNER',
    repo: 'REPO',
    issue_number: issueId,
    headers: {
      accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  return response.data;
});

const issueSlice = createSlice({
  name: 'issue',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getIssues.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getIssues.fulfilled, (state, action) => {
      state.isLoading = false;
      action.payload.forEach((ele: any) => {
        state.issueList.push(ele);
      });
    });
    builder.addCase(getIssues.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message as string;
    });

    builder.addCase(getIssueDetail.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getIssueDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.issue = {
        number: action.payload.number,
        title: action.payload.title,
        user: action.payload.user.login,
        updatedAt: action.payload.updated_at,
        comments: action.payload.comments,
        body: action.payload.body,
        avatarUrl: action.payload.user.avatar_url,
      };
    });
    builder.addCase(getIssueDetail.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message as string;
    });
  },
});

export default issueSlice;
