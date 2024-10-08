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
				<span className="flex justify-between mb-5">
					<span>
						<img
							src="/shared/desktop/logo-light.png"
							className="max-h-[27px]"
						/>
					</span>
					<span>
						<ul className="text-[14px] uppercase flex gap-6">
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
				<span className="w-full mx-auto border-t-2 h-2"></span>
				<span className="flex justify-between mb-5">
					<span>
						<p className="bold">Designo Central Office</p>
						<p>3886 Wellington Street</p>
						<p>Toronto, Ontario M9C 3J5</p>
					</span>
					<span>
						<p className="bold">Contact Us (Central Office)</p>
						<p className="bold">P: +1 253-863-8967</p>
						<p className="bold">M: contact@designo.com</p>
					</span>
					<span className="">
						<ul className="text-[28px] uppercase flex text-[#e7816b] gap-2">
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