import Discover from "@/pages/discover";
import Mine from "@/pages/mine";
import Friends from "@/pages/friends";
import Recommend from "@/pages/discover/children/recommend";
import Rank from "@/pages/discover/children/rank";
import Songs from "@/pages/discover/children/songs";
import Radio from "@/pages/discover/children/radio";
import Artist from "@/pages/discover/children/artist";
import Album from "@/pages/discover/children/album";
import { Redirect } from "react-router-dom";
import React from "react";
const routes = [
	{
		path: "/",
		exact: true,
		render: () => <Redirect to="/discover" />,
	},
	{
		path: "/discover",
		component: Discover,
		routes: [
			{
				path: "/discover",
				exact: true,
				render: () => {
					return <Redirect to="/discover/recommend" />;
				},
			},
			{
				path: "/discover/recommend",
				component: Recommend,
			},
			{
				path: "/discover/rank",
				component: Rank,
			},
			{
				path: "/discover/songs",
				component: Songs,
			},
			{
				path: "/discover/radio",
				component: Radio,
			},
			{
				path: "/discover/artist",
				component: Artist,
			},
			{
				path: "/discover/album",
				component: Album,
			},
		],
	},
	{
		path: "/mine",
		component: Mine,
	},
	{
		path: "/friend",
		component: Friends,
	},
];

export default routes;
