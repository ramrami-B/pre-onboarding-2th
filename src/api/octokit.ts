import { Octokit } from '@octokit/core';

export const octokit = new Octokit({
  auth: process.env.access_token,
});