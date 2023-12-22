import React from "react";
import { default as ModalProvider } from "react-modal";

import { useNavigate } from "react-router-dom";

import { Text } from "components";

const SignUppageModal = (props) => {
  const navigate = useNavigate();

  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[70%]"
      overlayClassName="bg-cyan-300 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-gray-200_7f flex flex-col items-center justify-start max-w-[1000px] mx-auto p-[27px] md:px-5 w-full">
          <Text
            className="italic text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
            size="txtRobotoBoldItalic48"
          >
            Helpdesk System
          </Text>
          <Text
            className="mt-6 text-3xl sm:text-[26px] md:text-[28px] text-black-900_01"
            size="txtRobotoRegular30"
          >
            Sign up here
          </Text>
          <div className="flex flex-col items-center justify-start mb-[63px] mt-7 w-[64%] md:w-full">
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
            <Text
              className="bg-white-A700 border border-black-900_01 border-solid h-[73px] justify-center mt-[21px] pl-6 pr-[35px] sm:px-5 py-[18px] text-3xl sm:text-[26px] md:text-[28px] text-black-900_01 w-[601px]"
              size="txtRobotoRegular30"
            >
              Email
            </Text>
            <div className="h-[134px] md:h-[163px] mt-[31px] relative w-[97%] sm:w-full">
              <div className="absolute flex flex-col gap-[27px] h-full inset-y-[0] justify-start my-auto right-[0] w-[76%]">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[71px] items-center justify-end mr-[119px] p-3.5 rounded-[20px]"
                  style={{ backgroundImage: "url('images/img_group177.svg')" }}
                >
                  <Text
                    className="mt-[5px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                    size="txtRobotoRegular30WhiteA700"
                  >
                    Sign Up
                  </Text>
                </div>
                <Text
                  className="common-pointer md:ml-[0] ml-[349px] text-3xl sm:text-[26px] md:text-[28px] text-black-900_01"
                  size="txtRobotoRegular30"
                  onClick={() => navigate("/signinpage")}
                >
                  Sign In
                </Text>
              </div>
              <a className="absolute bottom-[5%] left-[0] text-red-A700 text-xl">
                <Text
                  className="common-pointer"
                  size="txtRobotoRegular20"
                  onClick={() => navigate("/forgotpasswordpage")}
                >
                  Forgot password
                </Text>
              </a>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default SignUppageModal;
