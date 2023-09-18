import Image from "next/image";

interface LoadingProps {
	height: number;
	width: number;
}

export default function Loading({ height, width }: LoadingProps) {
	return (
		<Image
			src="/svg/icon.svg"
			className="animate-spin"
			alt={""}
			height={height}
			width={width}
		/>
	);
}
