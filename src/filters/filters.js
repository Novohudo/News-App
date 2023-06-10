import bbc from "../img/label/bbc-news.svg";
import fox from "../img/label/fox-news.svg";
import cnn from "../img/label/cnn-news.svg";
import abc from "../img/label/abc-news.svg";
import wlstrg from "../img/label/wall-street-j.svg";
import mtv from "../img/label/mtv.svg";
import ngg from "../img/label/national-geografic.svg";
import reuters from "../img/label/reuters.svg";
import time from "../img/label/time.svg";
import vice from "../img/label/vice-news.svg";
import au from "../img/countries/au.svg";
import bg from "../img/countries/bg.svg";
import ca from "../img/countries/ca.svg";
import ch from "../img/countries/ch.svg";
import de from "../img/countries/de.svg";
import gb from "../img/countries/gb.svg";
import nz from "../img/countries/nz.svg";
import pl from "../img/countries/pl.svg";
import ru from "../img/countries/ru.svg";
import ua from "../img/countries/ua.svg";
import us from "../img/countries/us.svg";


export const sources = [
	{id: 1, name: "bbc-news", img: bbc},
	{id: 2, name: "fox-news", img: fox},
	{id: 3, name: "cnn", img: cnn},
	{id: 4, name: "abc-news", img: abc},
	{id: 5, name: "the-wall-street-journal", img: wlstrg},
	{id: 6, name: "mtv-news", img: mtv},
	{id: 7, name: "national-geographic", img: ngg},
	{id: 8, name: "reuters", img: reuters},
	{id: 9, name: "time", img: time},
	{id: 10, name: "vice-news", img: vice}
]

export const categories = [
	{id: 'b', name: "business"},
	{id: 'e', name: "entertainment"},
	{id: 'g', name: "general"},
	{id: 'h', name: "health"},
	{id: 's', name: "science"},
	{id: 'p', name: "sports"},
	{id: 't', name: "technology"}
]

export const countries = [
	{id: 1, code: 'au', name: 'Australia',img:au},
	{id: 2, code: 'bg', name: 'Bulgaria',img:bg},
	{id: 3, code: 'ca', name: 'Canada',img:ca},
	{id: 4, code: 'ch', name: 'Switzerland',img:ch},
	{id: 5, code: 'de', name: 'Germany',img:de},
	{id: 6, code: 'gb', name: 'United Kingdom',img:gb},
	{id: 7, code: 'nz', name: 'New Zealand',img:nz},
	{id: 8, code: 'pl', name: 'Poland',img:pl},
	{id: 9, code: 'ru', name: 'Russia',img:ru},
	{id: 10, code: 'ua', name: 'Ukraine',img:ua},
	{id: 11, code: 'us', name: 'United States',img:us},
]
