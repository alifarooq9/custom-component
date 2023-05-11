"use client";

import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
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
					Button
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
					Button
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
					Button
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
					Button
				</Button>
				<Button
					size="lg"
					isLoading={loading}
					onClick={() => {
						setLoading(true);
						setTimeout(() => {
							setLoading(false);
						}, 3000);
					}}
					loadingPlaceholder="Downloading..."
				>
					{loading === false && (
						<DownloadIcon className="mr-1.5 w-4 h-4" />
					)}
					<span>Download</span>
				</Button>
			</div>
		</main>
	);
}
