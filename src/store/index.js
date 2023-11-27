import App from './slices/AppReducer'

import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {App}, middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,}),
})


export default store;
