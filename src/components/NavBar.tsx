import Image from "next/image";
import Link from "next/link";
export default function NavBar() {
	return (
		<nav className="border border-tertiary-color rounded dark:bg-gray-900 h-1/6">
			<div className="max-w-screen-xl h-full flex flex-wrap items-center  mx-auto p-4 text-quaternary-color">
				<a className="grow flex items-center h-full  ">
					<Image
						src="/svg/profile.svg"
						className=" cursor-pointer mr-3"
						alt=""
						width={60}
						height={60}
					/>
					<span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
						Raul
					</span>
				</a>
				<div className="grow flex justify-end md:order-2">
					<button
						type="button"
						className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
						id="user-menu-button"
						aria-expanded="false"
						data-dropdown-toggle="user-dropdown"
						data-dropdown-placement="bottom"
					>
						<span className="sr-only">Open user menu</span>
						<Image
							src="/svg/config.svg"
							className="rounded-full"
							alt="user photo"
							width={60}
							height={60}
						/>
					</button>
					<div
						className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
						id="user-dropdown"
					>
						<div className="px-4 py-3">
							<span className="block text-sm text-gray-900 dark:text-white">
								Bonnie Green
							</span>
							<span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
								name@flowbite.com
							</span>
						</div>
						<ul className="py-2" aria-labelledby="user-menu-button">
							<li>
								<a
									href="#"
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
								>
									Dashboard
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
								>
									Settings
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
								>
									Earnings
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
								>
									Sign out
								</a>
							</li>
						</ul>
					</div>
					<button
						data-collapse-toggle="navbar-user"
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="navbar-user"
						aria-expanded="false"
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-5 h-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 14"
						></svg>
					</button>
				</div>
				<div
					className="grow w-full items-center justify-between hidden  md:flex md:w-auto md:order-1"
					id="navbar-user"
				>
					<ul className="flex w-full justify-evenly cursor-pointer  font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						<li className="transition ease-in-out delay-150 hover:scale-110 ">
							<Link href={"/products"}>
								<Image
									src={"/svg/product.svg"}
									alt=""
									height={60}
									width={60}
									className="bg-primary-color"
								/>
							</Link>
						</li>
						<li className="transition ease-in-out delay-150 hover:scale-110  ">
							<Link href={"/"}>
								<Image
									src={"/svg/home.svg"}
									alt=""
									height={60}
									width={60}
									className="bg-primary-color"
								/>
							</Link>
						</li>
						<li className="transition ease-in-out delay-150 hover:scale-110 m-0">
							<Link href={"/chat"}>
								<Image
									src={"/svg/message.svg"}
									alt=""
									height={60}
									width={60}
									className="bg-primary-color"
								/>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
