import localFont from "next/font/local";
import "@/app/globals.css";

const klarheit = localFont({
	src: "./_assets/fonts/KlarheitKurrent.otf",
	variable: "--font-klarheit",
	weight: "400",
});

const aeonik = localFont({
	src: "./_assets/fonts/AeonikFono-Regular.otf",
	variable: "--font-aeonik",
	weight: "400",
});



export default async function RootLayout({ children }: {children: React.ReactNode}) {
	

	return (
		<html lang="pl" data-scroll-behavior="smooth">
			<body className={`${klarheit.variable} ${aeonik.variable} font-primary tracking-normal antialiased`}>
				{children}
			</body>
		</html>
	);
}
