import React from 'react';
import { Form, Button } from 'react-bootstrap';
import ThreeSixtyLogo from 'src/components/Logos/ThreeSixty';
import { useTranslation } from 'src/hooks/useTranslation';
import styles from './reset-password-form.module.scss';

const ForgotPasswordForm = ({ formik }) => {
  const { t } = useTranslation();

  return (
    <Form className={styles.form} onSubmit={formik.handleSubmit}>
      <Form.Group className={styles.logoContainer}>
        <ThreeSixtyLogo />
      </Form.Group>

      <Form.Group>
        <Form.Label className={styles.header}>{t('Reset Password')}</Form.Label>

        <Form.Text className={styles.desc}>{t('Set a new password')}</Form.Text>
      </Form.Group>

      <Form.Group className={styles.hidden}>
        <Form.Label>{t('Email')}</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formik.values.email}
          autoComplete="user-name"
          onChange={formik.handleChange}
          isInvalid={!!formik.errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {t(formik.errors.email)}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className={styles.hidden}>
        <Form.Label>{t('Code')}</Form.Label>
        <Form.Control
          type="text"
          name="code"
          value={formik.values.code}
          onChange={formik.handleChange}
          isInvalid={!!formik.errors.code}
        />
        <Form.Control.Feedback type="invalid">
          {t(formik.errors.code)}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>{t('Password')}</Form.Label>
        <Form.Control
          type="password"
          name="password"
          autoComplete="new-password"
          onChange={formik.handleChange}
          isInvalid={!!formik.errors.password}
        />
        <Form.Control.Feedback type="invalid">
          {t(formik.errors.password)}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>{t('Repeat Password')}</Form.Label>
        <Form.Control
          type="password"
          name="confirm_password"
          autoComplete="new-password"
          onChange={formik.handleChange}
          isInvalid={!!formik.errors.confirm_password}
        />
        <Form.Control.Feedback type="invalid">
          {t(formik.errors.confirm_password)}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        {t('Reset')}
      </Button>
    </Form>
  );
};

export default ForgotPasswordForm;
