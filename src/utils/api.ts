import { Octokit } from 'octokit';

const octokit = new Octokit({});

export const getRepositoriesApi = async (name: string) => {
	return await octokit.request('GET /search/repositories', {
		q: name,
		// per_page: 12,
		headers: {
			'X-GitHub-Api-Version': '2022-11-28',
		},
	});
};
