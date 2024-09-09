import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
		<main>
			<div className="container mx-auto max-w-[1112px] pt-[65px] px-[40px]">
				<Header />
			</div>
			<Footer />
		</main>
	);
}
