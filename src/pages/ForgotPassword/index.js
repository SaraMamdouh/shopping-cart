import React from "react";
import { useFormik } from "formik";
import ForgotPasswordForm from "./components/forgot-password-form";
import validationSchema from "./components/forgot-password.schema";
import { useMutation } from "../../services/queries/useMutation";
import toaster from "../../toaster";
import { useNavigate } from "react-router-dom";
import { ForgetPaswwordApi } from "../../services/api/auth";
import SCREENS from "../../navigation/constants";

const initialValues = {
  email: "",
};

const ForgetPaswword = () => {
  const navigate = useNavigate();
  const { mutate, isMutating } = useMutation(ForgetPaswwordApi, {
    onSuccess: () => {
      navigate(SCREENS.FORGET_PASSWORD_SUCCESS);
    },
    onError: (error) => toaster.error(error),
  });

  const formik = useFormik({
    onSubmit: (values) => mutate(values),
    validateOnChange: false,
    initialValues,
    validationSchema,
  });

  return <ForgotPasswordForm formik={formik} isLoading={isMutating} />;
};

export default ForgetPaswword;
