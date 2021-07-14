import {combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsPageReducer from "./dialogsPage-reducer";
import {StoreType} from "./store";
import React from "react";



export const rootReducer=combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsPageReducer
})
export type AppStateType=ReturnType<typeof rootReducer>
export const Provider = React.createContext({}as StoreType)
export const store:StoreType=createStore(rootReducer)

export default store;

// import React from "react";
// import {StoreType} from "./Redax/store";
//
// const StoreContext = React.createContext({}as StoreType)
//
// export type ProviderType={
//     store:StoreType,
//     children:React.ReactNode
// }
// export const Provider=(props:ProviderType)=>{
//     return(
//         <Provider store={props.store}>
//             {props.children}
//         </Provider>
//     )
// }
// export default StoreContext