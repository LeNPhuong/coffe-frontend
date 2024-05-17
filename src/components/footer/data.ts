interface type {
    id: number;
    title: string;
    stylecore: string;
    menusub: string[];
}

const datafooter: type[] = [
    {
        id: 1,
        title: "Thông tin website",
        stylecore: "first",
        menusub: ["Trang chủ", "Đặt hàng", "Tin tức", "Tuyển dụng", "Khuyến mãi"],
    },
    {
        id: 2,
        title: "Điều khoản sử dụng",
        stylecore: "second1",
        menusub: ["Quy chế website", "Bảo mật thông tin", "Hướng dẫn xuất hóa đơn GTGT"],
    },
    {
        id: 3,
        title: "Hotline",
        stylecore: "second2",
        menusub: [
            "Đặt hàng 1800 6936 (07:00-20:30)",
            "Hỗ trợ 028.71.087.088 (07:00-21:00)",
        ],
    },
    {
        id: 4,
        title: "Liên hệ",
        stylecore: "last",
        menusub: [
            `Head Office 1: 86 - 88 Cao Thang, Ward 4, District 3, Ho Chi Minh,
        Vietnam. Head Office 2: Floor 3 & 4 The Hub Building - 195/10E Dien Bien
        Phu, Ward 15, Binh Thanh District, Ho Chi Minh, Vietnam. +842871 078 079
        hi@thecoffeehouse.vn`,
            "+842871 078 079",
            "hi@thecoffeehouse.vn",
        ],
    },
];

export default datafooter;
