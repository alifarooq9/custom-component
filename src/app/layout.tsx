import { cn } from "@/utils/classNames";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Custom UI Components Example | Next.js + TypeScript + Tailwind CSS",
	description:
		"A starter template for TypeScript and Tailwind CSS in Next.js with custom ui components.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="dark">
			<body
				className={cn(
					inter.className,
					"min-h-screen w-full bg-slate-50 text-background dark:bg-background dark:text-slate-50"
				)}
			>
				{children}
			</body>
		</html>
	);
}
