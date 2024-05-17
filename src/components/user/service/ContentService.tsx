import React from "react";
import ContentServiceCoin from "./ContentServiceCoin";
import ContentServiceList from "./ContentServiceList";

const ContentService: React.FC = () => {
    return (
        <div className="lg:w-[35%] sm:w-full">
            <div className="w-full shadow-[0_0_5px_#0000003a] rounded-[5px] p-[10px]">
                <ContentServiceCoin />
                <ContentServiceList />
            </div>
        </div>
    );
};

export default ContentService;
