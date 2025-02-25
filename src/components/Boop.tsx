"use client";
import React from "react";

export default function Boop({ rotation = 0, timing = 150, children }) {
	const [isBooped, setIsBooped] = React.useState(false);

	const style = {
		display: "inline-block",
		backfaceVisibility: "hidden",
		transform: isBooped ? `rotate(${rotation}deg)` : `rotate(0deg)`,
		transition: `transform ${timing}ms`,
	};

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
		<span onMouseEnter={trigger} style={style}>
			{children}
		</span>
	);
}
