import { Octokit } from 'octokit';

const octokit = new Octokit({});

const word = 'tetris';

export const request = async () => {
	return await octokit.request('GET /search/repositories', {
		q: word,
		per_page: 10,
		headers: {
			'X-GitHub-Api-Version': '2022-11-28',
		},
	});
};
