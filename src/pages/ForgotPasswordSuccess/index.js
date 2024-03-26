import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ThreeSixtyLogo from 'src/components/Logos/ThreeSixty';
import { useTranslation } from 'src/hooks/useTranslation';
import styles from './index.module.scss';
import { PiWarningOctagonDuotone } from 'react-icons/pi';

export const Screen = () => {
  const { t } = useTranslation();

  return (
    <Container className={styles.container} fluid data-testid="forgot-password">
      <Row className="justify-content-md-center">
        <Col xs md="4" lg="3">
          <Row className={styles.segment} data-testid="check-your-email">
            <ThreeSixtyLogo />
            <p>{t('Please check your email for a reset password link')}.</p>
            <p className={styles.confirmation}>
              <PiWarningOctagonDuotone
                style={{ fontSize: '1rem' }}
                className="mb-1 mr-1"
              />
              {t(
                "If you haven't received your email yet, please check your spam folder"
              )}
              .
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Screen;
