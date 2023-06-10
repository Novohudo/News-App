import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducer as favoritesReducer} from "./favorites.slice";
import {NewsApi} from "./api/NewsAPI";
import {createLogger} from "redux-logger/src";

const logger = createLogger({
	collapsed:true
})

const reducers = combineReducers({
	favorites: favoritesReducer,
	[NewsApi.reducerPath]:NewsApi.reducer,
})

export const store = configureStore({
	reducer: reducers,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(NewsApi.middleware).concat(logger),
})