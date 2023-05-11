import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Custom Components Example | Next.js + TypeScript + Tailwind CSS",
	description:
		"A starter template for TypeScript and Tailwind CSS in Next.js with a custom component.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
