import {Avatar} from './Avatar';
import DefaultAvatar from './../../../assets/other/default.png';
import "./../index.scss"

export default {
	title: "UI/Avatar",
	component: Avatar,
	tags: ["autodocs"],
};

export const Default = {
	name: "Аватарка",
	args: {
		avatar: DefaultAvatar,
		percent: 50
	},
};
