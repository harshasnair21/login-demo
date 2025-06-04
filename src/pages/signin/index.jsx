import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaGoogle, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import SigninImage from "../../assets/girl-with-key.jpg";
import Google from "../../assets/google.png";
import Linkedin from "../../assets/linkedin.png";
import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";
import "./index.css";

const Signin = () => {
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log("data:", data);
    navigate("/");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const validateUsernameOrEmail = (value) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
    if (emailRegex.test(value) || usernameRegex.test(value)) {
      return true;
    }
    return "Enter a valid Username or Email (min 3 characters)";
  };

  return (
    <Container
      fluid
      className="vh-100 d-flex align-items-center justify-content-center"
    >
      <Row className="w-100 justify-content-center align-items-center">
        <Col md={3} className="p-4">
          <h2 className="mb-3 fw-bold">Sign In</h2>
          <p className="fw-bold mb-4 ">
            New user?&nbsp;{" "}
            <a href="#" className="cr-account ms-2">
              Create an account
            </a>
          </p>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* username/email */}
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Username or email"
                isInvalid={!!errors.usernameOrEmail}
                {...register("usernameOrEmail", {
                  required: "This field is required",
                  validate: validateUsernameOrEmail,
                })}
              />
              <Form.Control.Feedback type="invalid">
                {errors.usernameOrEmail && errors.usernameOrEmail.message}
              </Form.Control.Feedback>
            </Form.Group>
            {/* password */}
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Password"
                isInvalid={!!errors.password}
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/,
                    message:
                      "Password must be at least 8 characters, include 1 uppercase letter, 1 number, and 1 symbol",
                  },
                })}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password && errors.password.message}
              </Form.Control.Feedback>
            </Form.Group>
            {/* keepme signed*/}
            <Form.Group
              className="keep-signed mb-3 d-flex align-items-center"
              controlId="keepMeSignedIn"
            >
              <Form.Check
                type="checkbox"
                label="Keep me signed in"
                {...register("keepSignedIn")}
              />
            </Form.Group>
            {/* button */}
            <Button type="submit" variant="dark" className="w-100 mb-4">
              Sign In
            </Button>
            {/* signin with */}
            <div className="d-flex align-items-center justify-content-center mb-4">
              <span className="social-divider"></span>
              <span className="mx-3 fw-bold">Or Sign In With</span>
              <span className="social-divider"></span>
            </div>
            {/* icons */}
            <div className="d-flex justify-content-center">
              <img src={Google} alt="google" className="mx-2" />
              <img src={Linkedin} alt="linkedin" className="mx-2" />
              <img src={Facebook} alt="facebook" className="mx-2" />
              <img src={Twitter} alt="twitter" className="mx-2" />
            </div>
          </Form>
        </Col>
        {/* image */}
        <Col
          md={6}
          className="d-none d-md-flex d-flex justify-content-end align-items-center"
        >
          <img src={SigninImage} alt="signin" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default Signin;
