import { animated, useSpring } from "@react-spring/web";
import React from "react";

type BoopProps = {
	rotation: number;
	timing: number;
	//type: "rotate" | "translate";
	children: any;
};

function Boop({ rotation, timing, children }: BoopProps) {
	const [isBooped, setIsBooped] = React.useState(false);

	const style = useSpring({
		display: "inline-block",
		transform: isBooped ? `rotate(${rotation}deg)` : `rotate(0deg)`,
		transition: `transform ${timing}ms`,
		config: { tension: 350, friction: 4 },
	});

	React.useEffect(() => {
		if (!isBooped) {
			return;
		}

		const timeoutId = window.setTimeout(() => {
			setIsBooped(false);
		}, timing);

		return () => {
			window.clearTimeout(timeoutId);
		};
	}, [isBooped, timing]);

	const trigger = () => {
		setIsBooped(true);
	};

	return (
		<animated.span onMouseEnter={trigger} style={style}>
			{children}
		</animated.span>
	);
}

export default Boop;
