import {Link, Outlet} from "react-router-dom";
import {AiOutlineSearch} from "react-icons/ai";
import {FaBars} from "react-icons/fa";
import {FaXmark} from "react-icons/fa6";
import {useState} from "react";

const LayoutComp = () => {
	let [nav, setNav] = useState(false);

	return (
		<>
			<header className="w-full py-12 bg-[#000000EB] backdrop-blur opacity-[92%] fixed top-0 tr max-xl:text-[0.9em] max-lg:text-[0.75em] max-[888px]:text-[0.65em] max-md:text-base max-[530px]:text-sm max-[420px]:text-xs max-[360px]:text-[0.65em] z-50">
				<nav className="w-[80%] mx-auto flex items-center gap-4 justify-between max-[1111px]:gap-2">
					<div className="w-[16.68em] max-xl:w-[15em] tr max-[360px]:text-[0.8em] tr">
						<Link to={`/`}>
							<img src="/src/assets/images/Group 16013.svg" alt="logo" />
						</Link>
					</div>
					<div
						className={`text-white font-medium flex items-center gap-[6em] justify-between tr max-[1400px]:gap-[3em] max-[1111px]:gap-8 max-md:fixed ${
							nav ? `max-md:top-0` : `max-md:top-[-2000px]`
						} max-md:left-0 max-md:flex-col max-md:w-screen max-md:h-screen max-md:justify-center max-md:bg-[#000000] max-md:backdrop-blur-3xl max-md:z-[100] max-md:text-[2em] max-md:gap-6`}>
						<FaXmark
							onClick={() => setNav(false)}
							className="fixed hidden max-md:block top-6 right-9 z-[100]"
						/>
						<p className="cursor-pointer group">Как купить</p>
						<p className="cursor-pointer group">F.A.Q</p>
						<p className="cursor-pointer group">Контакты</p>
					</div>
					<div className="flex items-center gap-8 max-md:text-2xl max-[530px]:text-xl tr">
						<AiOutlineSearch className="text-4xl font-bold text-white cursor-pointer max-md:text-3xl" />
						<FaBars
							onClick={() => setNav(true)}
							className="text-xl text-white hidden max-md:block"
						/>
					</div>
					<div className="flex items-center gap-5 max-md:hidden">
						<button className="w-[10em] h-10 rounded-full border-2 border-white text-white font-semibold">
							Регистрация
						</button>
						<button className="w-[6.5em] h-10 rounded-full bg-[#EC8F32] text-white font-medium">
							Войти
						</button>
					</div>
				</nav>
			</header>
			<Outlet />
			<footer className="mt-[10em] max-[1111px]:text-sm tr max-[970px]:text-xs max-[870px]:text-[0.6em] max-md:text-base">
				<div className="w-[80%] mx-auto">
					<div className="border border-gray-600 w-full"></div>
					<div className="grid grid-cols-5 gap-4 mt-[3.5em] mb-[5em] max-md:grid-cols-2 max-md:text-xl tr max-md:gap-8 max-[550px]:text-base max-[450px]:text-2xl max-[450px]:grid-cols-1 max-[320px]:text-xl">
						<div className="col-span-2 max-md:col-span-1">
							<Link to={`/`}>
								<img src="/src/assets/images/Group 16018.svg" alt="logo" />
							</Link>
						</div>
						<div className="flex flex-col gap-3 justify-start">
							<b className="text-xl text-white mb-1">Жанры</b>
							<a
								href="#"
								className="text-xs text-gray-500 underline underline-offset-2">
								Нонфикшн
							</a>
							<a
								href="#"
								className="text-xs text-gray-500 underline underline-offset-2">
								Псиология
							</a>
							<a
								href="#"
								className="text-xs text-gray-500 underline underline-offset-2">
								Бизнес
							</a>
							<a
								href="#"
								className="text-xs text-gray-500 underline underline-offset-2">
								Финансы
							</a>
							<a
								href="#"
								className="text-xs text-gray-500 underline underline-offset-2">
								Все жанры
							</a>
						</div>
						<div className="flex flex-col gap-3 justify-start">
							<b className="text-xl text-white mb-1">Категории</b>
							<a
								href="#"
								className="text-xs text-gray-500 underline underline-offset-2">
								Популярное
							</a>
							<a
								href="#"
								className="text-xs text-gray-500 underline underline-offset-2">
								Новинки
							</a>
							<a
								href="#"
								className="text-xs text-gray-500 underline underline-offset-2">
								Выбор редакции
							</a>
						</div>
						<div className="flex flex-col gap-3 justify-start">
							<b className="text-xl text-white mb-1">Разделы</b>
							<a
								href="#"
								className="text-xs text-gray-500 underline underline-offset-2">
								Как купить
							</a>
							<a
								href="#"
								className="text-xs text-gray-500 underline underline-offset-2">
								Часто задаваемые вопросы
							</a>
							<a
								href="#"
								className="text-xs text-gray-500 underline underline-offset-2">
								Сотрудничество
							</a>
							<a
								href="#"
								className="text-xs text-gray-500 underline underline-offset-2">
								Контакты
							</a>
						</div>
					</div>
				</div>
				<div className="border border-gray-600 w-full"></div>
				<div className="my-12 w-[80%] mx-auto flex items-center justify-between gap-4 max-md:flex-wrap">
					<div className="flex items-center gap-[4em] max-md:flex-wrap max-md:gap-8">
						<p className="text-xs font-light text-gray-500">
							© 2022, «Аудитерия». Все права защищены.
						</p>
						<a href="#" className="text-xs font-light underline text-gray-500">
							Политика конфиденциальности
						</a>
						<a href="#" className="text-xs font-light underline text-gray-500">
							Лицензионное соглашение
						</a>
					</div>
					<div className="flex items-center gap-6">
						<img
							className="cursor-pointer"
							src="/src/assets/images/pngwing.svg"
							alt="visa"
						/>
						<img
							className="cursor-pointer"
							src="/src/assets/images/pngwing(1).svg"
							alt="mastercard"
						/>
					</div>
				</div>
			</footer>
		</>
	);
};

export default LayoutComp;
