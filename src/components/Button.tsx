import { ButtonObject } from "@/interfaces/button-interface";
import Image from "next/image";
export default function Button(configButton: ButtonObject) {
	function RenderImg(img: string) {
		return <Image src={img} alt="" />;
	}

	function Rendertxt(text: string) {
		return text;
	}

	return (
		<>
			<button>
				{configButton.img
					? RenderImg(configButton.img)
					: Rendertxt(configButton.txt)}
			</button>
		</>
	);
}
