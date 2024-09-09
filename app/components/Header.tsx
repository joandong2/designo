import React from 'react'

const Header = () => {
  return (
		<span className="flex justify-between">
			<span>
				<img src="/shared/desktop/logo-dark.png" className="max-h-[27px]"/>
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
	);
}

export default Header