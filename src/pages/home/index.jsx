import React from "react";
import ShowcaseComp from "../../components/showcase";
import NewComp from "../../components/new";
import DramaComp from "../../components/drama";
import ComedyComp from "../../components/comedy";

const HomePage = () => {
	return (
		<>
			<ShowcaseComp />
			<NewComp />
			<DramaComp />
			<ComedyComp />
		</>
	);
};

export default HomePage;
