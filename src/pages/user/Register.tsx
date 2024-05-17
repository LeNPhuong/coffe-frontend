import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import validator from "validator";
import { userregister } from "../../services/user";
import { useAppDispatch } from "../../redux/store";
import { getdatauser } from "../../redux/userSlice";
import { getPhone, getUser } from "../../redux/slicePay";

type Inputs = {
    name: string;
    email: string;
    phone: string;
    password: string;
    passwordConfirm: string;
};

const Register: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<Inputs>({ mode: "onSubmit", reValidateMode: "onSubmit" });

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        if (data.password !== data.passwordConfirm) {
            return setError("passwordConfirm", {
                message: "Mật khẩu nhập lại không đúng",
            });
        }

        const result = await userregister(data);

        if (result.message === "Succes") {
            dispatch(getdatauser(result.data));
            dispatch(getUser(result.data.name));
            dispatch(getPhone(result.data.phone));
            navigate("/store");
        } else if (result.message === "Error") {
            alert(result.data);
        }
    };

    return (
        <div className="flex flex-col">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-[10px] mt-[50px] items-center">
                    <div className="w-[80%] mb-[10px]">
                        <input
                            className="border-[2px] border-[#ccc] outline-none px-[10px] py-[4px] text-[16px] rounded-[5px] w-full"
                            placeholder="Vui lòng nhập tên người dùng"
                            type="text"
                            {...register("name", {
                                required: "Vui lòng tên người dùng",
                            })}
                        />
                        {errors.name && (
                            <span className="text-red-500 mt-[10px] text-[14px]">
                                {errors.name.message}
                            </span>
                        )}
                    </div>
                    <div className="w-[80%] mb-[10px]">
                        <input
                            className="border-[2px] border-[#ccc] outline-none px-[10px] py-[4px] text-[16px] rounded-[5px] w-full"
                            placeholder="Email"
                            type="email"
                            {...register("email", {
                                required: "Vui lòng nhập email",
                                validate: (value) => {
                                    if (!validator.isEmail(value)) {
                                        return "Sai định dạng Email";
                                    }
                                    return true;
                                },
                            })}
                        />
                        {errors.email && (
                            <span className="text-red-500 mt-[10px] text-[14px]">
                                {errors.email.message}
                            </span>
                        )}
                    </div>
                    <div className="w-[80%] mb-[10px]">
                        <input
                            className="border-[2px] border-[#ccc] outline-none px-[5px] py-[3px] text-[16px] rounded-[5px] w-full"
                            placeholder="Số điện thoại"
                            type="text"
                            {...register("phone", {
                                required: "Vui lòng nhập số điện thoại",
                                minLength: {
                                    value: 10,
                                    message: "Số điện thoại không thể nhỏ hơn 10 ký tự",
                                },
                                maxLength: {
                                    value: 10,
                                    message: "Số điện thoại không thể lớn hơn 10 ký tự",
                                },
                                validate: (value) => {
                                    if (
                                        !/(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/.test(
                                            value,
                                        )
                                    ) {
                                        return "Sai định dạng số điện thoại";
                                    }
                                },
                            })}
                        />
                        {errors.phone && (
                            <span className="text-red-500 mt-[10px] text-[14px]">
                                {errors.phone.message}
                            </span>
                        )}
                    </div>
                    <div className="w-[80%] mb-[10px]">
                        <input
                            className="border-[2px] border-[#ccc] outline-none px-[5px] py-[3px] text-[16px] rounded-[5px] w-full"
                            placeholder="Mật khẩu"
                            type="password"
                            {...register("password", {
                                required: "Vui lòng nhập mật khẩu",
                                minLength: {
                                    value: 10,
                                    message: "Mật khẩu không được nhỏ hơn 10 ký tự",
                                },
                                validate: (value) => {
                                    if (
                                        !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).+$/.test(
                                            value,
                                        )
                                    ) {
                                        return "Mật khẩu phải chứa chữ thường,hoa,số,ký tự đặc biệt !";
                                    }
                                },
                            })}
                        />
                        {errors.password && (
                            <span className="text-red-500 mt-[10px] text-[14px]">
                                {errors.password.message}
                            </span>
                        )}
                    </div>
                    <div className="w-[80%]">
                        <input
                            className="border-[2px] border-[#ccc] outline-none px-[5px] py-[3px] text-[16px] rounded-[5px] w-full"
                            placeholder="Nhập lại mật khẩu"
                            type="password"
                            {...register("passwordConfirm", {
                                required: "Vui lòng nhập lại mật khẩu",
                            })}
                        />
                        {errors.passwordConfirm && (
                            <span className="text-red-500 mt-[10px] text-[14px]">
                                {errors.passwordConfirm.message}
                            </span>
                        )}
                    </div>

                    <input
                        type="submit"
                        className="bg-[#ea580c] px-[30px] py-[10px] text-[14px] text-[#fff] rounded-[8px] cursor-pointer font-[500] mt-[20px]"
                        value="Đăng nhập"
                    />
                </div>
            </form>
            <div className="flex flex-row justify-center mt-[30px]">
                <p className="flex flex-row text-[14px] gap-[5px]">
                    Bạn đã có tài khoản ?
                    <span className="text-orange-600">
                        <Link to="/user/login">Đăng nhập</Link>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Register;
