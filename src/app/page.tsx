"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
	//loading
	const [loading, setLoading] = useState<boolean>(false);

	return (
		<main className="w-full flex flex-col items-center mx-auto max-w-7xl justify-center min-h-screen space-y-10">
			<div className="flex flex-col items-center justify-center space-y-3">
				<p className="font-medium">Primary Button With Loading Icon</p>
				<Button
					size="lg"
					isLoading={loading}
					onClick={() => {
						setLoading(true);
						setTimeout(() => {
							setLoading(false);
						}, 3000);
					}}
				>
					<span>Button</span>
				</Button>
				<Button
					variant="border"
					size="lg"
					isLoading={loading}
					onClick={() => {
						setLoading(true);
						setTimeout(() => {
							setLoading(false);
						}, 3000);
					}}
				>
					<span>Button</span>
				</Button>
				<Button
					variant="secondary"
					size="lg"
					isLoading={loading}
					onClick={() => {
						setLoading(true);
						setTimeout(() => {
							setLoading(false);
						}, 3000);
					}}
				>
					<span>Button</span>
				</Button>
				<Button
					variant="ghost"
					size="lg"
					isLoading={loading}
					onClick={() => {
						setLoading(true);
						setTimeout(() => {
							setLoading(false);
						}, 3000);
					}}
				>
					<span>Button</span>
				</Button>
			</div>
		</main>
	);
}
