import React from "react";

export const Title = ({
    className,
    children,
    as = "p",
    ...props
}) => {
    const Title = as || 'h1' || 'h2' || 'h3' || 'h4' || 'h5' || 'h6';

    return <Title as={as} className={className} {...props}>{children}</Title>
};
