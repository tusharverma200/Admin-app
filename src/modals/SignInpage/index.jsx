import React from "react";
import { default as ModalProvider } from "react-modal";

import { useNavigate } from "react-router-dom";

import { Text } from "components";

const SignInpageModal = (props) => {
  const navigate = useNavigate();

  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[70%]"
      overlayClassName="bg-cyan-300 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-gray-200_7f flex flex-col items-center justify-start max-w-[1000px] mx-auto p-[83px] md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start mb-[29px] w-[73%] md:w-full">
            <Text
              className="italic text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
              size="txtRobotoBoldItalic48"
            >
              Helpdesk System
            </Text>
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="bg-white-A700 border border-black-900_01 border-solid h-[73px] justify-center pl-6 pr-[35px] sm:px-5 py-[18px] text-3xl sm:text-[26px] md:text-[28px] text-black-900_01 w-[601px]"
                size="txtRobotoRegular30"
              >
                Username
              </Text>
              <Text
                className="bg-white-A700 border border-black-900_01 border-solid h-[73px] justify-center mt-[31px] pl-6 pr-[35px] sm:px-5 py-[18px] text-3xl sm:text-[26px] md:text-[28px] text-black-900_01 w-[601px]"
                size="txtRobotoRegular30"
              >
                Password
              </Text>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[71px] items-center justify-end md:ml-[0] ml-[140px] mt-[43px] p-3.5 rounded-[20px]"
                style={{ backgroundImage: "url('images/img_group28.svg')" }}
              >
                <Text
                  className="mt-[5px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                  size="txtRobotoRegular30WhiteA700"
                >
                  Sign In
                </Text>
              </div>
              <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[15px] mt-[59px] w-[90%] md:w-full">
                <a className="mt-1 text-red-A700 text-xl">
                  <Text
                    className="common-pointer"
                    size="txtRobotoRegular20"
                    onClick={() => navigate("/forgotpasswordpage")}
                  >
                    Forgot password
                  </Text>
                </a>
                <Text
                  className="common-pointer text-3xl sm:text-[26px] md:text-[28px] text-black-900_01"
                  size="txtRobotoRegular30"
                  onClick={() => navigate("/signuppage")}
                >
                  Sign Up
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default SignInpageModal;
