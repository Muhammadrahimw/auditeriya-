import React from "react";

const AboutComp = () => {
	return (
		<section className="grid grid-cols-2 gap-8 w-[80%] mx-auto mt-[9em] max-[1290px]:text-sm tr max-[1130px]:text-xs max-[970px]:text-[0.6em] max-md:text-[0.5em] max-sm:text-[0.4em] max-[520px]:text-[0.3em] max-[380px]:grid-cols-1 max-[380px]:text-[0.5em] max-[320px]:text-[0.4em]">
			<div className="flex items-center gap-12 rounded-[1.5em] border-2 border-gray-500 p-8">
				<div className="min-w-[4em]">
					<img className="w-[4em]" src="/src/assets/images/1.svg" alt="" />
				</div>
				<p className="text-xl text-white font-medium">
					Все лучшие новинки нон фикшн книг и образовательные саммари всегда под
					рукой.
				</p>
			</div>
			<div className="flex items-center gap-12 rounded-[1.5em] border-2 border-gray-500 p-8">
				<div className="min-w-[4em]">
					<img className="w-[4em]" src="/src/assets/images/2.svg" alt="" />
				</div>
				<p className="text-xl text-white font-medium">
					Аудиокниги позволяют «читать» несколько часов в день без отрыва от
					текущих дел.
				</p>
			</div>
			<div className="flex items-center gap-12 rounded-[1.5em] border-2 border-gray-500 p-8">
				<div className="min-w-[4em]">
					<img className="w-[4em]" src="/src/assets/images/3.svg" alt="" />
				</div>
				<p className="text-xl text-white font-medium">
					Аудиокнига по дороге на работу и обратно, подарит вам почти месяц
					чтения за год
				</p>
			</div>
			<div className="flex items-center gap-12 rounded-[1.5em] border-2 border-gray-500 p-8">
				<div className="min-w-[4em]">
					<img className="w-[4em]" src="/src/assets/images/4.svg" alt="" />
				</div>
				<p className="text-xl text-white font-medium">
					Лучшие книги и аудиоспектакли в живом исполнении
				</p>
			</div>
		</section>
	);
};

export default AboutComp;
