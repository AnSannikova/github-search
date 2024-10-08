// описание получаемых данных репозитория
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

// варианты сортировки данных
export type TSortType = 'stars' | 'forks' | 'updated';

// варианты направления сортировки
export type TOrder = 'desc' | 'asc';

// типы данных для отправки запроса
export type TGetRepositoriesApi = {
	name: string;
	page?: number;
	perPage?: number;
	sortType?: TSortType | undefined;
	order?: TOrder;
};
