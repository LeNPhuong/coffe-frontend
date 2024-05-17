import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import { loginuser } from "../../services/user";
import { useAppDispatch } from "../../redux/store";
import { getdatauser } from "../../redux/userSlice";
import { getPhone, getUser } from "../../redux/slicePay";

type Inputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onSubmit", reValidateMode: "onSubmit" });

  const onSubmit: SubmitHandler<Inputs> = async (data: {
    email: string;
    password: string;
  }) => {
    const result = await loginuser(data.email, data.password);
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
          <div className="w-[80%]">
            <input
              className="border-[2px] border-[#ccc] outline-none px-[5px] py-[3px] text-[16px] rounded-[5px] w-full"
              placeholder="Mật khẩu"
              type="password"
              {...register("password", {
                required: true,
                minLength: {
                  value: 10,
                  message: "Mật khẩu không được nhỏ hơn 10 ký tự",
                },
                validate: (value) => {
                  if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).+$/.test(value)) {
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

          <input
            type="submit"
            className="bg-[#ea580c] px-[30px] py-[10px] text-[14px] text-[#fff] rounded-[8px] cursor-pointer font-[500] mt-[20px]"
            value="Đăng nhập"
          />
        </div>
      </form>
      <div className="flex flex-col items-center mt-[30px]">
        <p className="flex flex-row text-[14px] gap-[5px]">
          Nếu bạn chưa có tài khoản, vui lòng
          <span className="text-orange-600">
            <Link to="/user/register">Đăng ký</Link>
          </span>
        </p>
        <p className="text-orange-500 text-[15px]">Quên mật khẩu</p>
      </div>
    </div>
  );
};

export default Login;
