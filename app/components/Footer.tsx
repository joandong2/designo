import React from 'react'
import {
	AiFillFacebook,
	AiFillPinterest,
	AiOutlineTwitter,
	AiFillYoutube,
	AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
		<div className="bg-black text-white py-[50px]">
			<div className="container mx-auto max-w-[1112px] pt-[65px] px-[40px]">
				<span className="flex flex-col gap-8 justify-center align-center md:flex-row md:justify-between mb-12 md:mb-5">
					<span className="flex align-center justify-center text-center">
						<img
							src="/shared/desktop/logo-light.png"
							className="max-h-[27px]"
						/>
					</span>
					<span className="flex justify-center">
						<ul className="text-[14px] uppercase flex gap-6 flex-col text-center md:text-left md:flex-row">
							<li>
								<a href="#">Our Company</a>
							</li>
							<li>
								<a href="#">Locations</a>
							</li>
							<li>
								<a href="#">Contact</a>
							</li>
						</ul>
					</span>
				</span>
				<span className="flex w-full mx-auto border-[#333234] border-t-[1px] h-[1px] mt-[40px] mb-[40px]"></span>
				<span className="flex flex-col gap-8 text-center md:text-left md:flex-row md:justify-between mb-5 ">
					<span className="text-[#8e8d8e] text-[16px]">
						<p className="font-bold">Designo Central Office</p>
						<p>3886 Wellington Street</p>
						<p>Toronto, Ontario M9C 3J5</p>
					</span>
					<span className="text-[#8e8d8e] text-[16px]">
						<p className="font-bold">Contact Us (Central Office)</p>
						<p className="font-bold">P: +1 253-863-8967</p>
						<p className="font-bold">M: contact@designo.com</p>
					</span>
					<span>
						<ul className="text-[28px] uppercase justify-center flex text-[#e7816b] gap-2">
							<li>
								<a href="#">
									<AiFillFacebook />
								</a>
							</li>
							<li>
								<a href="#">
									<AiFillYoutube />
								</a>
							</li>
							<li>
								<a href="#">
									<AiOutlineTwitter />
								</a>
							</li>
							<li>
								<a href="#">
									<AiFillPinterest />
								</a>
							</li>
							<li>
								<a href="#">
									<AiOutlineInstagram />
								</a>
							</li>
						</ul>
					</span>
				</span>
			</div>
		</div>
	);
}

export default Footer