import { toast } from "react-toastify";
import { databill } from "../../type/databill";

function paybtn(
    user: { name: string | null; phone: string | null; guid: string | null },
    product: databill[] | null,
    methodpay: { id: number; name: string; img: string; keys: string } | null,
): boolean {
    if (!user.name) {
        toast.error("Vui lòng nhập tên", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        return false;
    } else if (!user.phone) {
        toast.error("Vui lòng nhập số điện thoại", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        return false;
    } else if (!user.phone.match(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g)) {
        toast.error("Số điện thoại bạn nhập sai định dạng", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        return false;
    } else if (!product) {
        toast.error("Giỏ hàng của bạn đang trống", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        return false;
    } else if (!methodpay) {
        toast.error("Vui lòng chọn phương thức thanh toán", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        return false;
    } else {
        return true;
    }
}

export default paybtn;
