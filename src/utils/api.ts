import { Octokit } from 'octokit';

const octokit = new Octokit({});

export const getRepositoriesApi = async (
	name: string,
	page: number,
	perPage: number
) => {
	return await octokit.request('GET /search/repositories', {
		q: name,
		page: page,
		per_page: perPage,
		headers: {
			'X-GitHub-Api-Version': '2022-11-28',
		},
	});
};

// const issueData = await octokit.rest.search.repos({
// 	q: 'name',
// })
