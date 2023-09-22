import { NextRequest } from "next/server";
export const AuthGuard = (
	request: NextRequest,
	ruta: string,
	callback: any
) => {
	if (request.nextUrl.pathname === ruta) {
		callback(request);
	}
};

export const ProductGuard = (
	request: NextRequest,
	ruta: string,
	callback: any
) => {
	if (request.nextUrl.pathname === ruta) {
		return callback(request);
	}
};

export const ProfileGuard = (require: NextRequest, ruta: string) => {};
