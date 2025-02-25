"use client";
import React from "react";
import Boop from "@/components/Boop";

export default function Home() {
	return (
		<>
			<Boop rotation={20} timing={150}>
				<h1>Hello!</h1>

				<h1>&#x1F603;</h1>
				<h1>&#x1F608;</h1>
			</Boop>
		</>
	);
}
