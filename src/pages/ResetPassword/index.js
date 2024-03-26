import { useCallback, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import ForgotPasswordForm from './components/reset-password-form';
import styles from './index.module.scss';
import validationSchema from './components/reset-password.schema';
import { Creators as AuthCreators } from 'src/services/store/auth/actions';

const initialValues = {
  email: '',
  code: '',
  password: '',
  confirm_password: '',
};

export const Screen = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);

  const onSubmit = useCallback(
    (values) => {
      dispatch(AuthCreators.resetPasswordRequest(values));
    },
    [dispatch]
  );

  const formik = useFormik({
    onSubmit,
    validateOnChange: false,
    initialValues,
    validationSchema,
  });

  const { setFieldValue } = formik;

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');

    if (email) {
      setFieldValue('email', email);
    }

    const code = urlParams.get('token');
    if (code) {
      setFieldValue('code', code);
    }
  }, [setFieldValue]);

  return (
    <Container className={styles.container} fluid>
      <Row className="justify-content-md-center">
        <Col xs md="4" lg="3">
          <ForgotPasswordForm formik={formik} isLoading={isLoading} />
        </Col>
      </Row>
    </Container>
  );
};

export default Screen;
