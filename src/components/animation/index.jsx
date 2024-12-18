import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../swiperStyle/index.css";
import {FreeMode} from "swiper/modules";
import {useGetPostsQuery} from "../../redux/api/postApi";
import {Link} from "react-router-dom";
import {useState} from "react";

const AnimationComp = () => {
	let [page, setPage] = useState(1);
	let {data, isLoading, error} = useGetPostsQuery(page);
	if (isLoading)
		return (
			<h1 className="ctr text-white text-[2.5em] mt-12">Yuklanmoqda...</h1>
		);
	if (error) return <div>Xatolik yuz berdi...</div>;

	return (
		<section className="w-[80%] mx-auto mt-[5em] max-md:text-[1.15em] tr max-[680px]:text-sm max-[520px]:text-xs max-[450px]:text-[0.65em] max-[375px]:text-[0.55em] max-[320px]:text-[0.45em]">
			<div className="flex items-center justify-between gap-4 mb-9">
				<h2 className="text-[2em] text-white">анимация</h2>
				<button className="w-[9em] h-10 rounded-full bg-[#EC8F32] text-white hover:text-black cursor-pointer text-base tr">
					Смотреть все
				</button>
			</div>
			<Swiper
				slidesPerView={5}
				spaceBetween={30}
				freeMode={true}
				modules={[FreeMode]}
				breakpoints={{
					0: {
						slidesPerView: 2,
						spaceBetween: 5,
					},
					0: {
						slidesPerView: 2,
						spaceBetween: 5,
					},
					630: {
						slidesPerView: 2.5,
						spaceBetween: 5,
					},
					680: {
						slidesPerView: 2,
						spaceBetween: 5,
					},
					768: {
						slidesPerView: 2.5,
						spaceBetween: 5,
					},
					860: {
						slidesPerView: 3,
						spaceBetween: 5,
					},
					1050: {
						slidesPerView: 3.5,
						spaceBetween: 5,
					},
					1180: {
						slidesPerView: 4,
						spaceBetween: 5,
					},
					1320: {
						slidesPerView: 4.5,
						spaceBetween: 5,
					},
					1450: {
						slidesPerView: 5,
						spaceBetween: 5,
					},
				}}
				className="mySwiper">
				{data.results.map((value) =>
					value.genre_ids.includes(16) ? (
						<SwiperSlide
							key={value.id}
							className="flex flex-col cursor-pointer">
							<Link to={`/${value.id}?page=${page}`}>
								<div
									style={{
										backgroundImage: `url(https://image.tmdb.org/t/p/w500${value.poster_path})`,
									}}
									className="w-[12.5em] h-[12.5em] rounded-2xl  bg-no-repeat bg-center bg-cover max-md:text-[1.15em] tr max-[680px]:text-sm max-[520px]:text-xs max-[450px]:text-[0.65em] max-[375px]:text-[0.55em] max-[320px]:text-[0.45em]"></div>
								<div className="w-[12em] flex flex-col items-start justify-between max-md:text-[1.15em] tr max-[680px]:text-sm max-[520px]:text-xs max-[450px]:text-[0.65em] max-[375px]:text-[0.55em] max-[320px]:text-[0.45em]">
									<p className="text-base text text-[#ADADAD] font-light mt-6 mb-2 ">
										{value.overview.slice(0, 22)}...
									</p>
									<p className="font-medium text-xl text-white text-left">
										{value.title.slice(0, 16)}
									</p>
								</div>
							</Link>
						</SwiperSlide>
					) : (
						""
					)
				)}
			</Swiper>
		</section>
	);
};

export default AnimationComp;
