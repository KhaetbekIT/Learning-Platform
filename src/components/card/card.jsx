import React from "react";
import { Title } from "../title/title";
import 'tailwindcss/tailwind.css';

export const Card = ({
    img,
    imgError,
    title,
    name,
    lessons
}) => {
    return (
        <div className="w-70 border rounded overflow-hidden">
            <img
                src={img}
                alt={imgError}
                className="w-full h-52 object-cover"
            />
            <div className="p-4">
                <Title as="h1" className="text-black text-base">{title}</Title>
                <div className="flex justify-between mt-2">
                    <div className="flex items-center gap-1">
                        <Title className="text-gray-700 text-xs">{name}</Title>
                    </div>
                    <div>
                        <Title className="text-gray-700 text-xs">{lessons}</Title>
                    </div>
                </div>
            </div>
        </div>
    );
};
