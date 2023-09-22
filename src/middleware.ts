import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function validationToken(request: NextRequest) {}

export function middleware(request: NextRequest) {
	if (request.nextUrl.pathname == "/") {
		const token = request.cookies.get("token");
		if (!token) {
			const url = request.nextUrl.clone();
			console.log(1);
			url.pathname = "/auth";

			return NextResponse.rewrite(url);
		}
	}

	if (request.nextUrl.pathname == "/products") {
		const token = request.cookies.get("token");
		if (!token) {
			const url = request.nextUrl.clone();
			url.pathname = "/auth";
			return NextResponse.rewrite(url);
		}
	}

	return NextResponse.next();
}
