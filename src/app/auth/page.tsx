import LoginPage from "@/layouts/RenderLogin";
import axios from "axios";
import { ApiRaul } from "@/projectUtils";

export default async function Login() {
	/* Peticion del login  */
	let response = await axios.get(ApiRaul(`view/auth/login`));
	let html = response.data;

	/* TestCharge */
	await new Promise<void>((resolve) => setTimeout(resolve, 2000));

	return <LoginPage html={html} />;
}
