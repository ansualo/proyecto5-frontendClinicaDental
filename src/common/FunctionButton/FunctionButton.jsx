import React from "react";
import './FunctionButton.css'

export const FunctionButton = ({name, action}) => {

    return (
        <div className="buttonDesign" onClick={action}>{name}</div>
    )
}