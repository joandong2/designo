import React from 'react'

const Header = () => {
  return (
		<nav className="sm:relative sm:flex items-center justify-between py-[30px] px-[20px]">
			<div className="flex items-center justify-between w-full">
				<a href="/" className="flex items-center">
					<span className="self-center text-2xl font-semibold whitespace-nowrap">
						<img src="/shared/desktop/logo-dark.png" className="max-h-[27px]" />
					</span>
				</a>
				<div className="flex">
					<label className="cursor-pointer z-30 relative inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
						<input className="peer hidden" type="checkbox" id="mobile-menu" />
						<svg
							className="w-5 h-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 14"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>

						<div className="peer-checked:translate-x-0 peer-checked:*:translate-y-0 fixed w-full left-0 top-[6.1rem] z-10 overflow-hidden pointer-events-none peer-checked:pointer-events-auto">
							<div className="-translate-y-full relative transition-transform delay-100 duration-500 ease-in-out font-normal divide-y bg-[#1d1c1e] divide-gray-600 py-[25px] px-[25px]">
								<ul
									className="py-2 text-[24px] uppercase text-white flex flex-col gap-4"
									aria-labelledby="dropdownLargeButton"
								>
									<li>
										<a href="/company">Our Company</a>
									</li>

									<li>
										<a href="/locations">Locations</a>
									</li>
									<li>
										<a href="/contact">Contact</a>
									</li>
								</ul>
							</div>
						</div>
					</label>
				</div>
				<div
					className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
					id="navbar-sticky"
				>
					<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  md:space-x-8 rtl:space-x-reverse md:flex-row text-[14px] uppercase">
						<li>
							<a href="/" className="" aria-current="page">
								Home
							</a>
						</li>
						<li>
							<a href="/about" className="">
								About
							</a>
						</li>
						<li>
							<a href="/services" className="">
								Services
							</a>
						</li>
						<li>
							<a href="contact" className="">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Header