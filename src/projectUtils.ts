export const ApiRaul = (params?: string) => {
	return `http://localhost:3000/${params ? params : ""}`;
};
