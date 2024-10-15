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
			<div className="flex flex-col sm:flex-row mb-20 sm:mb-[189px] min-h-[625px] gap-4 justify-between">
				<span className="relative cursor-pointer flex flex-col flex-1 bg-[url('/home/desktop/image-web-design-large.jpg')] bg-cover bg-center rounded-md items-center justify-center">
					<div className="absolute inset-0 bg-black hover:bg-[#e7816b] opacity-50 rounded-md"></div>
					<span className="z-10 text-[40px] text-white uppercase mb-8">
						Web Design
					</span>
					<span className="z-10 text-[16px] text-white uppercase tracking-[4px]">
						View Projects <span className="text-[#e7816b]">&gt;</span>
					</span>
				</span>
				<span className="flex flex-1 flex-col gap-4">
					<span className="relative cursor-pointer flex flex-col flex-1 w-full bg-[url('/home/desktop/image-app-design.jpg')] bg-cover bg-center rounded-md items-center justify-center">
						<div className="absolute inset-0 bg-black hover:bg-[#e7816b] opacity-50 rounded-md"></div>
						<span className="z-10 text-[40px] text-white uppercase mb-8">
							App Design
						</span>
						<span className="z-10 text-[16px] text-white uppercase tracking-[4px]">
							View Projects <span className="text-[#e7816b]">&gt;</span>
						</span>
					</span>
					<span className="relative cursor-pointer flex flex-col flex-1 w-full bg-[url('/home/desktop/image-graphic-design.jpg')] bg-cover bg-center rounded-md items-center justify-center">
						<div className="absolute inset-0 bg-black hover:bg-[#e7816b] opacity-50 rounded-md"></div>
						<span className="z-10 text-[40px] text-white uppercase mb-8">
							Graphic Design
						</span>
						<span className="z-10 text-[16px] text-white uppercase tracking-[4px]">
							View Projects <span className="text-[#e7816b]">&gt;</span>
						</span>
					</span>
				</span>
			</div>
			<div className="flex flex-col sm:flex-row mb-[150px] sm:mb-[200px] gap-20 justify-between">
				<span className="text-center">
					<span className="bg-[url('/shared/desktop/bg-pattern-small-circle.svg')] bg-contain bg-no-repeat bg-center items-center align-middle justify-center flex mb-10">
						<img
							src="/home/desktop/illustration-passionate.svg"
							className="max-w-[202px]"
						/>
					</span>
					<h3 className="uppercase mb-7">Passionate</h3>
					<p>
						Each project starts with an in-depth brand research to ensure we
						only create products that serve a purpose. We merge art, design, and
						technology into exciting new solutions.
					</p>
				</span>
				<span className="text-center">
					<span className="bg-[url('/shared/desktop/bg-pattern-small-circle.svg')] bg-contain bg-no-repeat bg-center items-center align-middle justify-center flex mb-10">
						<img
							src="/home/desktop/illustration-resourceful.svg"
							className="max-w-[202px]"
						/>
					</span>
					<h3 className="uppercase mb-7">Resourceful</h3>
					<p>
						Everything that we do has a strategic purpose. We use an agile
						approach in all of our projects and value customer collaboration. It
						guarantees superior results that fulfill our clients’ needs.
					</p>
				</span>
				<span className="text-center">
					<span className="bg-[url('/shared/desktop/bg-pattern-small-circle.svg')] bg-contain bg-no-repeat bg-center items-center align-middle justify-center flex mb-10">
						<img
							src="/home/desktop/illustration-friendly.svg"
							className="max-w-[202px]"
						/>
					</span>
					<h3 className="uppercase mb-7">Friendly</h3>
					<p>
						We are a group of enthusiastic folks who know how to put peoplev
						first. Our success depends on our customers, and we strive to give
						them the best experience a company can provide.
					</p>
				</span>
			</div>
		</>
	);
}
