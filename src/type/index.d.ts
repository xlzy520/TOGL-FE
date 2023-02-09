export {};
declare global {
	interface IResponse<T = any> {
		result: string;
		out: string;
		result_code: string;
		Code: number;
		Msg: string;
		errMsg: string;
		Data: T;
	}
	type IObject<T> = Record<string, T>;

	interface ITable<T = any> {
		data: Array<T>;
		total: number;
		page: number;
		size: number;
	}
	interface ImportMetaEnv {
		VITE_APP_TITLE: string;
		VITE_PORT: number;
		VITE_PROXY: string;
	}
}
