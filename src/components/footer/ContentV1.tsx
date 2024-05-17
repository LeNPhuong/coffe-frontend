import React from "react";
import styled from "styled-components";
import ListV1 from "./ListV1";

const BoxContent = styled.div`
    background: url("/imgbg/footerimg.png");
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
`;

const ContentV1: React.FC<NonNullable<unknown>> = () => {
    return (
        <BoxContent>
            <div className="xl:max-w-[1440px] lg:max-w-[1240] mx-auto flex flex-row py-[50px] lg:px-[70px] xl:px-[50px]">
                <div className="h-[60px] max-w-[10%] flex-[0_0_10%] mr-[30px]">
                    <img className="h-full" src="/logo/logo-footer.png" alt="" />
                </div>
                <ListV1 />
            </div>
        </BoxContent>
    );
};

export default ContentV1;
