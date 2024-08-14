import { Octokit } from 'octokit';
import { TGetRepositoriesApi } from './types';

const octokit = new Octokit({});

export const getRepositoriesApi = async ({
	name,
	page = 1,
	perPage = 10,
	sortType = undefined,
	order = 'desc',
}: TGetRepositoriesApi) => {
	return octokit.rest.search.repos({
		q: name,
		page,
		per_page: perPage,
		sort: sortType,
		order,
	});
};
