import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { ToastContainer } from "react-toastify";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Home, Login, Pay, Register, Search, Shopstore, User } from "./pages";
import { autolog } from "./services/user";
import { getdatauser } from "./redux/userSlice";
import { getPhone, getUser } from "./redux/slicePay";
import "react-toastify/dist/ReactToastify.css";
import NavbarTop from "./components/navbartop/NavbarTop";
import Navbottom from "./components/navbarbottom/Navbottom";
import Footer from "./components/footer/Footer";
import DetailProduct from "./components/details-product/DetailProduct";
import Boxmap from "./components/map/Boxmap";
import BtnPay from "./components/btnpay/BtnPay";
import EditProduct from "./components/editproduct/EditProduct";
import Authenpay from "./components/authenpay/Authenpay";
import OrderStatus from "./components/orderstatus/OrderStatus";
import DeleteOrder from "./components/modelpage/deleteorder/DeleteOrder";
import StatusDelte from "./components/modelpage/statusdelete/StatusDelte";
import IFUser from "./pages/infor/IFUser";
import FormUser from "./components/user/infor/formUser/FormUser";
import MapUser from "./components/user/infor/mapUser/MapUser";
import ShieldUser from "./components/user/infor/ShieldUser/ShieldUser";
import Dashboard from "./pages/dashboard/Dashboard";
import ProductManagement from "./pages/dashboard/ProductManagement";
import AccountManagement from "./pages/dashboard/AccountManagement";
import TypeManagement from "./pages/dashboard/TypeManagement";
import BillManagement from "./pages/dashboard/BillManagement";
import ProductInfor from "./components/dashboard/ContentRight/product/productinfor/ProductInfor";
import ProductEdit from "./components/dashboard/ContentRight/product/productEdit/ProductEdit";
import ProductAdd from "./components/dashboard/ContentRight/product/productAdd/ProductAdd";
import BoxInfor from "./components/dashboard/ContentRight/bill/inforbill/BoxInfor";
import BoxDetails from "./components/dashboard/ContentRight/bill/detailsbill/BoxDetails";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const url = useLocation();

  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const result = await autolog();

      if (result.message === "Error") {
        dispatch(getdatauser(null));
      } else if (result.message === "Succes") {
        dispatch(getdatauser(result.data));
        dispatch(getUser(result.data.name));
        dispatch(getPhone(result.data.phone));
      } else if (result.message === "No login") {
        dispatch(getdatauser(result.data));
      }
      return result;
    },
  });

  const details = useAppSelector((e) => e.product.details);
  const onmap = useAppSelector((e) => e.modelpgae.map);
  const edit = useAppSelector((e) => e.edit.data);
  const checkOrder = useAppSelector((e) => e.data.token);
  const auth = useAppSelector((e) => e.modelpgae.authbuy);
  const orderdelte = useAppSelector((e) => e.modelpgae.deleteOrder);
  const btnbfdelete = useAppSelector((e) => e.modelpgae.beforedelte);
  //

  return (
    <>
      {url.pathname.includes("/dashboard") ? (
        ""
      ) : (
        <>
          <header className="sticky top-0 right-0 left-0 bg-[#fc9a26] w-full py-[8px] z-[999] shadow-[0_2px_8px_rgba(0,0,0,.08)]">
            <NavbarTop />
          </header>
          <Navbottom />
        </>
      )}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Shopstore />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/search" element={<Search />} />
          <Route path="/user" element={<User />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route index element={<Login />} />
          </Route>
          <Route path="infor" element={<IFUser />}>
            <Route path="form" element={<FormUser />} />
            <Route path="map" element={<MapUser />} />
            <Route path="shield" element={<ShieldUser />} />
            <Route index element={<FormUser />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="product" element={<ProductManagement />}>
              <Route path="inforprd" element={<ProductInfor />} />
              <Route index element={<ProductInfor />} />
              <Route path="edit/:id" element={<ProductEdit />} />
              <Route path="add" element={<ProductAdd />} />
            </Route>
            <Route index element={<ProductManagement />} />

            <Route path="account" element={<AccountManagement />} />
            <Route path="type" element={<TypeManagement />} />
            <Route path="bill" element={<BillManagement />}>
              <Route path="infor" element={<BoxInfor />} />
              <Route index element={<BoxInfor />} />
              <Route path="details/:id" element={<BoxDetails />} />
            </Route>
          </Route>
        </Routes>
      </main>
      {url.pathname.includes("/dashboard") ? (
        ""
      ) : (
        <>
          <footer className={`lg:pb-0 ${url.pathname === "/pay" ? "sm:pb-[58px]" : ""} `}>
            <Footer />
          </footer>

          {details && <DetailProduct />}
          {edit && <EditProduct />}
          {onmap && <Boxmap />}
          {auth && <Authenpay />}
          {checkOrder && <OrderStatus />}
          {orderdelte && <DeleteOrder />}
          {btnbfdelete && <StatusDelte />}

          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {url.pathname === "/pay" && (
            <Box
              sx={{
                "@media (min-width:1px)": {
                  display: "block",
                },
                "@media (min-width:1000px)": {
                  display: "none",
                },
              }}
            >
              <BtnPay />
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default App;
