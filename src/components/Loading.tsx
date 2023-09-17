import Image from "next/image";
import styled from "styled-components";

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
