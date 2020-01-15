import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage";
import logger from "redux-logger";
import ThemeOptions from "./reducers/ThemeOptions";
import UserInformation from "./reducers/UserInformation";

const rootReducer = combineReducers({
  ThemeOptions,
  UserInformation,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["ThemeOptions", "UserInformation"]
};

export const store = createStore(
  persistReducer(persistConfig, rootReducer),
  applyMiddleware(thunk, logger)
);

export const persistor = persistStore(store);
