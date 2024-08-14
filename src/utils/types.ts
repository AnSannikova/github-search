export type TRepository = {
	id: number;
	name: string;
	description: string | null;
	updated_at: string;
	stargazers_count: number;
	language: string | null;
	forks_count: number;
	topics?: string[] | undefined;
	license: TLicense | null;
	html_url: string;
};

type TLicense = {
	key: string;
	name: string;
	url: string | null;
	spdx_id: string | null;
	node_id: string;
	html_url?: string | undefined;
};

export type TSortType = 'stars' | 'forks' | 'updated';

export type TOrder = 'desc' | 'asc';

export type TGetRepositoriesApi = {
	name: string;
	page?: number;
	perPage?: number;
	sortType?: TSortType | undefined;
	order?: TOrder;
};

export type TCellOrder = {
	stars: TOrder;
	forks: TOrder;
	updated: TOrder;
};
