import React from "react";

export const ContextData = React.createContext();

function ContextFunction({ children }) {
    let a;
    return (
        <ContextData.Provider value={{ a }}>
            {children}
        </ContextData.Provider>
    )
};

export default ContextFunction;