import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import InputField from "../components/InputField";
import { verifyLogin } from "../SliceAndAction/user/UserActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState();
  const { user } = useSelector((state) => state.UserSlice);
  useEffect(() => {
    user?._id && navigate("/dashboard");
  }, [user]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(verifyLogin(loginDetails));
  };
  const obj = [
    {
      type: "email",
      placeholder: "email",
      label: "Email",
      name: "email",
    },
    {
      type: "password",
      placeholder: "password",
      label: "Password",
      name: "password",
    },
  ];

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Form onSubmit={handleOnSubmit}>
        {obj.map((item, index) => {
          return <InputField key={index} {...item} onChange={handleOnChange} />;
        })}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
