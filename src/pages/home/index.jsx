import React from "react";
import ShowcaseComp from "../../components/showcase";
import NewComp from "../../components/new";
import DramaComp from "../../components/drama";
import ComedyComp from "../../components/comedy";
import AnimationComp from "../../components/animation";
import AboutComp from "../../components/about";
import CollectionComp from "../../components/collection";

const HomePage = () => {
	return (
		<>
			<ShowcaseComp />
			<NewComp />
			<DramaComp />
			<ComedyComp />
			<AnimationComp />
			<CollectionComp />
			<AboutComp />
		</>
	);
};

export default HomePage;
