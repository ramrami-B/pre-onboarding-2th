import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { octokit } from '../api/octokit';

interface IssuesState {
  issueList: object[];
  issue: {};
  isLoading: boolean;
  error: null | string;
}

const initialState: IssuesState = {
  issueList: [],
  issue: {},
  isLoading: false,
  error: null,
};

export const getIssues = createAsyncThunk('issues/getIssues', async (page: number) => {
  const response = await octokit.request('GET /repos/facebook/react/issues', {
    owner: 'facebook',
    repo: 'react',
    headers: {
      accept: 'application/vnd.github+json',
    },
    page: page,
    per_page: 15,
    sort: 'comments',
  });

  return response.data;
});

// TODO: issue_id로 하나만 가져오기

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
  },
});

export default issueSlice;
