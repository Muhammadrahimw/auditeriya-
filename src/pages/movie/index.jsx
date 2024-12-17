import React from "react";
import {useGetPostsQuery} from "../../redux/api/postApi";
import {useLocation} from "react-router-dom";

const Movie = () => {
	let location = useLocation();

	let {data, isLoading, error} = useGetPostsQuery(1);
	if (isLoading)
		return (
			<h1 className="ctr text-white text-[2.5em] mt-12">Yuklanmoqda...</h1>
		);
	if (error) return <div>Xatolik yuz berdi...</div>;
	let movieData = null;

	data.results.map((value) =>
		value.id == location.pathname.slice(1) ? (movieData = value) : ""
	);
	console.log(movieData);

	return (
		<section className="w-[80%] mx-auto mt-[12em]">
			<div className="flex items-start justify-between gap-[4em]">
				<div
					style={{
						backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieData.poster_path})`,
					}}
					className="w-[27em] h-[27em] rounded-2xl  bg-no-repeat bg-center bg-cover"></div>
				<div className="w-[60%]">
					<h2 className="text-[3em] text-white font-bold leading-normal">
						{movieData.title}
					</h2>
					<div className="flex justify-between items-center gap-4">
						<p className="text-gray-500 pt-8">{movieData.release_date}</p>
						<p className="text-[3em] text-[#EC8F32] font-bold">
							{movieData.vote_average.toFixed(1)}
						</p>
					</div>
					<p className="font-light text-white text-base">
						{movieData.overview}
					</p>
				</div>
			</div>
			<div className="flex items-center justify-between gap-4 mb-9 mt-[4em]">
				<h2 className="text-[2em] text-white">похожий</h2>
				<button className="w-[9em] h-10 rounded-full bg-[#EC8F32] text-white hover:text-black cursor-pointer text-base tr">
					Смотреть все
				</button>
			</div>
		</section>
	);
};

export default Movie;
