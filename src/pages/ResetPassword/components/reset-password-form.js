import React from "react";
import { Form, Row } from "react-bootstrap";
import styles from "./reset-password-form.module.css";
import InputGroup from "../../../components/InputGroup";
import Button from "../../../components/Button";

const ForgotPasswordForm = ({ formik, isLoading }) => {
  return (
    <Form className={styles.form} onSubmit={formik.handleSubmit}>
      <Form.Group>
        <Form.Label className={styles.header}>Reset Password</Form.Label>

        <Form.Text className={styles.desc}>Set a new password</Form.Text>
      </Form.Group>

      <Row>
        <InputGroup
          xs={12}
          type="Text"
          name="email"
          autoComplete="user-name"
          label="Email"
          formik={formik}
          style={{ display: "none" }}
        />

        <InputGroup
          xs={12}
          type="Password"
          name="password"
          autoComplete="new-password"
          label="Password"
          formik={formik}
        />

        <InputGroup
          xs={12}
          type="Password"
          name="confirm_password"
          autoComplete="new-password"
          label="Repeat password"
          formik={formik}
        />
      </Row>

      <Button variant="primary" type="submit" isLoading={isLoading}>
        Reset
      </Button>
    </Form>
  );
};

export default ForgotPasswordForm;
