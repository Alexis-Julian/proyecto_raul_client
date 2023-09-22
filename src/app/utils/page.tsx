"use server";

import { cookies } from "next/headers";
import axios from "axios";
import { ApiRaul } from "@/projectUtils";
import { LoginInterface } from "@/interfaces/auth-interfaces";
import { AxiosResponse } from "axios";

export async function getLogin() {
	let response = await fetch("htpp://localhost:3000/view/auth/login");
	return response;
}

export default async function fetchlogin() {
	let response = await axios.get(ApiRaul(`view/auth/login`));
	let html = response.data;
	return html;
}

export async function PostLogin(data: LoginInterface) {
	let response: AxiosResponse = await axios.post(
		ApiRaul("api/auth/login"),
		data
	);

	if (!response) return null;

	if (response.status === 201) {
		cookies().set("token", response.data);
		return response.data;
	}

	return response.data;
}
