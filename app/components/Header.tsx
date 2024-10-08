import React from 'react'

const Header = () => {
  return (
		<span className="flex justify-between">
			<nav className="fixed md:flex  w-full h-20 z-20 top-0 start-0 flex items-center">
				<div className="p-4 xl:container xl:mx-auto w-full">
					<div className="flex flex-wrap items-center justify-between">
						<a
							href="https://flowbite.com/"
							className="flex items-center space-x-3 rtl:space-x-reverse"
						>
							<img
								src="https://flowbite.com/docs/images/logo.svg"
								className="h-8"
								alt="Flowbite Logo"
							/>
							<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
								F{" "}
								<img
									src="/shared/desktop/logo-dark.png"
									className="max-h-[27px]"
								/>
							</span>
						</a>
						<div className="flex md:order-2 gap-3 md:gap-0 rtl:space-x-reverse">
							<label className="cursor-pointer z-30 relative inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
								<input
									className="peer hidden"
									type="checkbox"
									id="mobile-menu"
								/>
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

								<div className="peer-checked:translate-x-0 peer-checked:*:translate-y-0 fixed w-full left-0 top-20 z-10 overflow-hidden pointer-events-none peer-checked:pointer-events-auto">
									<div className="-translate-y-full relative transition-transform delay-100 duration-500 ease-in-out font-normal divide-y shadow bg-gray-700 divide-gray-600">
										<ul
											className="py-2 block  text-sm text-gray-700 dark:text-gray-200"
											aria-labelledby="dropdownLargeButton"
										>
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
									</div>
								</div>
							</label>
						</div>
						<div
							className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
							id="navbar-sticky"
						>
							<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
								<li>
									<a
										href="#"
										className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
										aria-current="page"
									>
										Home
									</a>
								</li>
								<li>
									<a
										href="#"
										className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
									>
										About
									</a>
								</li>
								<li>
									<a
										href="#"
										className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
									>
										Services
									</a>
								</li>
								<li>
									<a
										href="#"
										className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
									>
										Contact
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</span>
	);
}

export default Header