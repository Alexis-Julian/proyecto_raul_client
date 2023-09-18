import axios from "axios";
import { ApiRaul } from "@/projectUtils";

export async function getLogin() {
	let response = await fetch("htpp://localhost:3000/view/auth/login");
	console.log(1);
	return response;
}

export default async function fetchlogin() {
	let response = await axios.get(ApiRaul(`view/auth/login`));
	let html = response.data;
	//await new Promise<void>((resolve) => setTimeout(resolve, 2000));
	return html;
}
