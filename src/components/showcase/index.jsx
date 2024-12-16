import React from "react";

const ShowcaseComp = () => {
	return (
		<div className="bg-[url(/src/assets/images/showcase.png)] bg-no-repeat bg-center bg-cover h-[44em] flex items-center max-xl:text-sm tr max-[1111px]:text-xs max-[930px]:text-[0.62em] max-md:text-base max-[570px]:text-xs max-[430px]:text-[0.6em] max-[360px]:text-[0.45em]">
			<div className="ctr flex items-center gap-6 justify-between max-md:flex-col max-md:items-start max-md:justify-center max-md:text-sm max-md:mt-[5em] tr">
				<div>
					<h1 className="text-[4em] text-[#FFFFFF] font-bold leading-none">
						Книги, которые <br />
						вам хочется слушать
					</h1>
					<p className="text-[1.5em] text-white mt-2">
						Лучшая подборка аудиокниг по психологиии <br /> саморазвитию за все
						годы издательства...
					</p>
				</div>
				<button className="w-[11em] h-[3.5em] rounded-full bg-[#EC8F32] text-2xl font-bold text-white hover:text-black tr max-[1111px]:text-3xl">
					Выбрать книгу
				</button>
			</div>
		</div>
	);
};

export default ShowcaseComp;
