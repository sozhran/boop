"use client";
import React from "react";
import Boop from "@/components/Boop";

export default function Home() {
	const emojis = [
		"\u{1F603}",
		"\u{1F608}",
		"\u{1F984}",
		"\u{1F9DF}",
		"\u{1F98A}",
		"\u{1F418}",
		"\u{1F344}",
		"\u{1F525}",
		"\u{1F63C}",
		"\u{1F333}",
		"\u{1F981}",
		"\u{1F977}",
		"\u{1FABA}",
		"\u{1F33E}",
		"\u{1FAD0}",
		"\u{1F950}",
		"\u{1F3D4}",
		"\u{1FA90}",
		"\u{1F37A}",
		"\u{1F36F}",
	];

	return (
		<>
			<h1>&#x1F33E; Hello! &#x1F33E;</h1>
			<main>
				{emojis.map((emoji, index) => (
					<Boop rotation={20} timing={150} key={index}>
						<p>{emoji}</p>
					</Boop>
				))}
				{/*<p>{String.fromCharCode(0x1f603)}</p>*/}
			</main>
		</>
	);
}
