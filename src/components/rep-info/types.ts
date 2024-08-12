import { TRepository } from '../../utils/types';

// type TLicense = {
// 	name: string;
// };

// type TCurrentRep = {
// 	name: string;
// 	language: string;
// 	stargazers_count: number;
// 	description: string;
// 	topics: string[];
// 	license: TLicense | null;
// };

export type TRepInfo = {
	currentRep?: TRepository;
};
