import React from "react";
import './Button.scss';

export function Button(props) {
    const {children,...rest} = props;

    return <div className="y-btn" {...rest}>
        {children}
    </div>
}