import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
		<>
			<div className="header-callback flex flex-col sm:flex-row rounded-[15px] justify-between sm:py-[120px] sm:px-[100px] p-[40px] relative z-0 overflow-hidden mb-[189px]">
				<img
					src="/home/desktop/image-hero-phone.png"
					className="hidden sm:flex absolute bottom-[-242px] right-[-54px] z-[-1]"
				/>
				<span className="flex flex-col flex-1">
					<h1 className="mb-4 text-white">
						Award-winning custom designs and digital branding solutions
					</h1>
					<span className="mb-4 text-white">
						With over 10 years in the industry, we are experienced in creating
						fully responsive websites, app design, and engaging brand
						experiences. Find out more about our services.
					</span>
					<span className="bg-white text-black px-4 py-2 rounded-md uppercase text-center cursor-pointer hover:opacity-90 hover:text-grey">
						Learn More
					</span>
				</span>
				<span className="flex flex-col flex-1">
					<img
						src="/home/desktop/image-hero-phone.png"
						className="mb-[-150px] sm:hidden"
					/>
				</span>
			</div>
			<div className="flex flex-col sm:flex-row mb-[189px] max-h-[625px] gap-4 justify-between">
				<span className="flex flex-1 ">
					<span>
						<img src="/home/desktop/image-web-design-large.jpg" alt="" />
					</span>
				</span>
				<span className="flex flex-1 flex-col gap-4">
					<span className="flex flex-1 w-full overflow-hidden">
						<img src="/home/desktop/image-web-design-large.jpg" alt="" />
					</span>
					<span className="flex flex-1 w-full overflow-hidden">
						<img src="/home/desktop/image-web-design-large.jpg" alt="" />
					</span>
				</span>
			</div>
		</>
	);
}
