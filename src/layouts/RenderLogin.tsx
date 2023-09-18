"use client";
import { useEffect, useState } from "react";

interface PropsLogin {
	html: XMLDocument;
}

function RenderLogin({ html }: PropsLogin) {
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
			const user = {
				email: e.target["email"].value,
				password: e.target["password"].value,
			};

			svg_charge?.classList.add("animate-spin");

			await new Promise((resolve) => setTimeout(resolve, 6000));

			svg_charge?.classList.remove("animate-spin");
		}
	}

	return (
		<main className="h-full" dangerouslySetInnerHTML={{ __html: html }}></main>
	);
}

export default RenderLogin;
