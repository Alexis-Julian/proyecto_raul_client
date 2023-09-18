"use client";
import { useEffect } from "react";

interface PropsLogin {
	html: XMLDocument;
}

function RenderLogin({ html }: PropsLogin) {
	function handeFormSubmit(e: SubmitEvent): any {
		e.preventDefault();
	}

	/* UseEffect para recuperar los datos del html */
	useEffect(() => {
		if (html) {
			const form = document.getElementById("form");
			if (form) {
				form.addEventListener("submit", (e) => handeFormSubmit(e));
			}
		}
	});

	return (
		<main className="h-full" dangerouslySetInnerHTML={{ __html: html }}></main>
	);
}

export default RenderLogin;
