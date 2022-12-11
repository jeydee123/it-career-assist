//this context API is used to keep track of the state of the user's name.
//using this context API allows us to use the name entered on the welcome page, throughout the whole website
import React, {useState, createContext} from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    //useState hook will pass/store the name to our context.
    const [name, setName] = useState()

    return (
        //passing name down to the provider
        <AppContext.Provider value = {{name: name, setName: setName}}>
            {props.children}
        </AppContext.Provider>
    );
};