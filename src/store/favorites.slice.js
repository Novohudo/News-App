import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavorites: (state, {payload: item}) => {
			state.push(item)
		},
		deleteFromFavorites: (state, {payload: itemId}) => {
			const isExist = state.some(item => item.id === itemId)
			if (isExist) {
				const index = state.findIndex(item => item.id === itemId);
				if (index !== -1) {
					state.splice(index,1)
				}
			}
		}
	}
})

export const {actions, reducer} = favoritesSlice;