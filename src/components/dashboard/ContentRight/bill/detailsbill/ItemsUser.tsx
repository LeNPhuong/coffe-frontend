import React from "react";

const ItemsUser: React.FC<{ title: string; content?: string | number }> = ({
    title,
    content,
}) => {
    return (
        <div className="flex flex-row gap-[10px] items-center jus">
            <span className="font-[500] text-[15px] text-stone-400">{title}:</span>
            <span className="font-[500] text-[17px] text-orange-500">
                {content ? content : "Không có"}
            </span>
        </div>
    );
};

export default ItemsUser;
