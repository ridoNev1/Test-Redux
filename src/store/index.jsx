import storage from "redux-persist/lib/storage";
import * as Sentry from "@sentry/react";
import { persistStore, persistReducer } from "redux-persist";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "./reducer/rootReducer";

let middleware = [thunk];
if (process.env.NODE_ENV === "development") {
  middleware = [...middleware, logger];
}

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: [""], // only navigation will be persisted
};

const sentryReduxEnhancer = Sentry.createReduxEnhancer({
  // Optionally pass options listed below
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware), sentryReduxEnhancer)
);
const persistor = persistStore(store);

export { store, persistor };
