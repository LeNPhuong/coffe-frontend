import React from "react";
import styled from "styled-components";

const BoxContent = styled.div`
  background: #000;
  padding: 20px 15px;
  padding-top: 50px;
`;

const ContentEndV1: React.FC<NonNullable<unknown>> = () => {
  return (
    <BoxContent>
      <div className="flex justify-between xl:max-w-[1440px] lg:max-w-[1240px] mx-auto xl:px-[50px] lg:px-[70px]">
        <div className="text-[#fff] text-[14px] flex flex-col gap-[5px]">
          <p>Công ty cổ phần thương mại dịch vụ Trà Cà Phê VN</p>
          <p>
            Mã số DN: <span className="font-[500]">0312867172</span> do sở kế hoạch và đầu tư tp. HCM cấp ngày
            23/07/2014
          </p>
          <p>
            Người đại diện: <b>NGÔ NGUYÊN KHA</b>
          </p>
          <p>
            Địa chỉ: 86-88 Cao Thắng, phường 04, quận 3, tp Hồ Chí Minh Điện thoại: (028) 7107 8079 Email:
            hi@thecoffeehouse.vn
          </p>
          <p>© 2014-2022 Công ty cổ phần thương mại dịch vụ Trà Cà Phê VN mọi quyền bảo lưu</p>
        </div>
        <div className="mt-5 flex justify-center pb-[70px]">
          <img className="h-[60px]" src="/imgicon/securtiy.png" alt="" />
        </div>
      </div>
    </BoxContent>
  );
};

export default ContentEndV1;
