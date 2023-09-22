"use client";
import { useEffect } from "react";
import { PostLogin } from "@/app/utils/page";
import { useRouter } from "next/navigation";

import { LoginInterface } from "@/interfaces/auth-interfaces";
interface PropsLogin {
	html: XMLDocument;
}

function RenderLogin({ html }: PropsLogin) {
	const router = useRouter();
	/* UseEffect para recuperar los datos del html */

	useEffect(() => {
		if (html) {
			const form = document.getElementById("form");
			if (form) {
				form.addEventListener("submit", (e: any) => handeFormSubmit(e));
			}
		}
	});

	async function handeFormSubmit(e: React.ChangeEvent<HTMLFormElement>) {
		e.preventDefault();
		const svg_charge = document.getElementById("charge");

		if (e.target) {
			/* Payload para el backend */
			const user: LoginInterface = {
				email: e.target["email"].value,
				password: e.target["password"].value,
			};

			svg_charge?.classList.add("animate-spin");

			const response = await PostLogin(user);

			if (response) {
				router.push("/");
			}

			svg_charge?.classList.remove("animate-spin");
		}
	}

	return (
		<main className="h-full" dangerouslySetInnerHTML={{ __html: html }}></main>
	);
}

export default RenderLogin;
