import React from "react";
import ListV2 from "./ListV2";
import styled from "styled-components";
import ContentEndV2 from "./ContentEndV2";

const BoxContent = styled.div`
    background: url("/imgbg/footerimg.png");
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
    padding: 20px 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const ContentV2: React.FC<NonNullable<unknown>> = () => {
    return (
        <div className="flex flex-col">
            <BoxContent>
                <div className="h-[60px] max-w-[25%] flex-[0_0_25%]">
                    <img className="h-full" src="/logo/logo-footer.png" alt="" />
                </div>
                <ListV2 />
            </BoxContent>
            <ContentEndV2 />
        </div>
    );
};

export default ContentV2;
