import React from 'react'

const Footer = () => {
  return (
		<div className="bg-black text-white">
			<div className="container mx-auto max-w-[1112px] pt-[65px] px-[40px]">
				<span className="flex justify-between">
					<span>
						<img
							src="/shared/desktop/logo-light.png"
							className="max-h-[27px]"
						/>
					</span>
					<span>
						<ul>
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
			</div>
		</div>
	);
}

export default Footer