import React from "react";

import ContentV1 from "./ContentV1";
import ContentEndV1 from "./ContentEndV1";

const FooterVer1: React.FC<NonNullable<unknown>> = () => {
    return (
        <div className="lg:block sm:hidden">
            <div className="flex flex-col">
                <ContentV1 />
                <ContentEndV1 />
            </div>
        </div>
    );
};

export default FooterVer1;
