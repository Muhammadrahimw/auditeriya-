import {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../swiperStyle/index.css";

// import required modules
import {FreeMode, Pagination} from "swiper/modules";
import {useGetPostsQuery} from "../../redux/api/postApi";

const NewComp = () => {
	let {data, isLoading, error} = useGetPostsQuery();

	if (isLoading)
		return (
			<h1 className="ctr text-white text-[2.5em] mt-12">Yuklanmoqda...</h1>
		);
	if (error) return <div>Xatolik yuz berdi...</div>;
	// console.log(data.data[1].artist.picture_medium);

	return (
		<section className="w-[80%] mx-auto mt-[5em]">
			<div className="flex items-center justify-between gap-4 mb-9">
				<h2 className="text-[2em] text-white">Новинки</h2>
				<button className="w-[9em] h-10 rounded-full bg-[#EC8F32] text-white hover:text-black cursor-pointer text-base tr">
					Смотреть все
				</button>
			</div>
			<Swiper
				slidesPerView={5}
				spaceBetween={30}
				freeMode={true}
				modules={[FreeMode]}
				className="mySwiper">
				{data.data.map((value) => (
					<SwiperSlide key={value.id} className="flex flex-col">
						<div
							style={{backgroundImage: `url(${value.artist.picture_medium})`}}
							className="w-[12.5em] h-[12.5em] rounded-2xl  bg-no-repeat bg-center bg-cover"></div>
						<div className="w-[12em] flex flex-col items-start justify-between">
							<p className="text-base text text-[#ADADAD] font-light mt-6 mb-2 ">
								Ульяна Соболева
							</p>
							<p className="font-medium text-xl text-white ">
								Завтра будет вчера
							</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default NewComp;
