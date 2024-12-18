import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../swiperStyle/index.css";
import {FreeMode} from "swiper/modules";
import {useGetPostsQuery} from "../../redux/api/postApi";
import {Link} from "react-router-dom";
import {useState} from "react";

const CollectionComp = () => {
	let [page, setPage] = useState(1);
	let {data, isLoading, error} = useGetPostsQuery(page);
	if (isLoading)
		return (
			<h1 className="ctr text-white text-[2.5em] mt-12">Yuklanmoqda...</h1>
		);
	if (error) return <div>Xatolik yuz berdi...</div>;

	let category = [`TV Movie`, `Family`, `Documentary`, `Fantasy`];
	return (
		<section className="w-[80%] mx-auto mt-[5em] text-[1.1em] max-[1380px]:text-base max-xl:text-sm tr max-[1100px]:text-base max-md:text-xs">
			<div className="flex items-center justify-between gap-4 mb-9">
				<h2 className="text-[2em] text-white">Подборки</h2>
			</div>
			<div className="flex items-center justify-between gap-4 max-[1100px]:grid max-[1100px]:grid-cols-2">
				{data.results
					.filter((value) => value.genre_ids.includes(53))
					.slice(0, 4)
					.map((value, id) => (
						<Link to={`/${value.id}?page=${page}`} key={value.id}>
							<div
								style={{
									backgroundImage: `url(https://image.tmdb.org/t/p/w500${value.poster_path})`,
								}}
								className="w-[15em] h-[8.5em] rounded-[1em] bg-no-repeat bg-center bg-cover max-md:text-[1.15em] tr max-[680px]:text-sm max-[520px]:text-xs max-[450px]:text-[0.65em] max-[375px]:text-[0.55em] max-[320px]:text-[0.45em] flex justify-start items-end max-[1100px]:w-full max-[1100px]:h-[10em]">
								<p className="text-[1.5em] font-bold text-white ml-4 mb-3">
									{category[id]}
								</p>
							</div>
							{/* <div className="w-[12em] flex flex-col items-start justify-between max-md:text-[1.15em] tr max-[680px]:text-sm max-[520px]:text-xs max-[450px]:text-[0.65em] max-[375px]:text-[0.55em] max-[320px]:text-[0.45em]">
								<p className="text-base text text-[#ADADAD] font-light mt-6 mb-2 ">
									{value.overview.slice(0, 22)}...
								</p>
								<p className="font-medium text-xl text-white text-left">
									{value.title.slice(0, 16)}
								</p>
							</div> */}
						</Link>
					))}
			</div>
		</section>
	);
};

export default CollectionComp;
