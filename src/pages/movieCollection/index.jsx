import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../../components/swiperStyle/index.css";
import {FreeMode} from "swiper/modules";
import {useGetPostsQuery} from "../../redux/api/postApi";
import {Link} from "react-router-dom";
import {useState} from "react";

const MovieCollection = () => {
	let {data: page1Data, isLoading: isLoading1} = useGetPostsQuery(1);
	let {data: page2Data, isLoading: isLoading2} = useGetPostsQuery(2);
	let {data: page3Data, isLoading: isLoading3} = useGetPostsQuery(3);

	let [page, setPage] = useState(2);
	let {data, isLoading, error} = useGetPostsQuery(page);
	if (isLoading1 || isLoading2 || isLoading3) {
		return <p>Loading...</p>;
	}
	if (error) return <div>Xatolik yuz berdi...</div>;

	let allData = [
		...(page1Data?.results || []),
		...(page2Data?.results || []),
		...(page3Data.results || []),
	];
	console.log(allData);

	return (
		<section className="w-[80%] mx-auto mt-[12em] max-md:text-[1.15em] tr max-[680px]:text-sm max-[520px]:text-xs max-[450px]:text-[0.65em] max-[375px]:text-[0.55em] max-[320px]:text-[0.45em]">
			<div className="flex items-center justify-between gap-4 mb-9">
				<h2 className="text-[2em] text-white">драма</h2>
			</div>
			<div className="grid grid-cols-5 gap-4">
				{allData.map((value) =>
					value.genre_ids.includes(28) ? (
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
								<p className="text-xl font-medium text-left text-white">
									{value.title.slice(0, 16)}
								</p>
							</div>
						</Link>
					) : (
						""
					)
				)}
			</div>
		</section>
	);
};

export default MovieCollection;
