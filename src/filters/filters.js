import bbc from "../img/sources/bbc-news.svg";
import fox from "../img/sources/fox-news.svg";
import cnn from "../img/sources/cnn-news.svg";
import abc from "../img/sources/abc-news.svg";
import wlstrg from "../img/sources/wall-street-j.svg";
import mtv from "../img/sources/mtv.svg";
import ngg from "../img/sources/national-geografic.svg";
import reuters from "../img/sources/reuters.svg";
import time from "../img/sources/time.svg";
import vice from "../img/sources/vice-news.svg";

export const sources = [
	{name: "bbc-news", img: bbc},
	{name: "fox-news", img: fox},
	{name: "cnn", img: cnn},
	{name: "abc-news", img: abc},
	{name: "the-wall-street-journal", img: wlstrg},
	{name: "mtv-news", img: mtv},
	{name: "national-geographic", img: ngg},
	{name: "reuters", img: reuters},
	{name: "time", img: time},
	{name: "vice-news", img: vice}
]

export const categories = [
	"business",
	"entertainment",
	"general",
	"health",
	"science",
	"sports",
	"technology"
]

export const countries = [
	{code: 'au', name: 'Australia'},
	{code: 'bg', name: 'Bulgaria'},
	{code: 'ca', name: 'Canada'},
	{code: 'ch', name: 'Switzerland'},
	{code: 'de', name: 'Germany'},
	{code: 'gb', name: 'United Kingdom'},
	{code: 'nz', name: 'New Zealand'},
	{code: 'pl', name: 'Poland'},
	{code: 'ru', name: 'Russia'},
	{code: 'ua', name: 'Ukraine'},
	{code: 'us', name: 'United States'},
]
