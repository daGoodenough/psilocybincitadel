import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import { useState } from 'react';

const ValuesItem = ({ value, description, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Col
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="value-item m-2 d-flex flex-column justify-content-around align-items-center"
      md={3}
      sm={6}
      xs={12}
    >
      {!isHovered && (
        <>
          <Row>
            <div className="value-name">{value}</div>
          </Row>

          <Row className="text-center">
            <i className={`${icon} fa-10x`} />
          </Row>
        </>
      )}

      {isHovered && (
        <Row className="value-description text-center">{description}</Row>
      )}
    </Col>
  );
};

ValuesItem.propTypes = {
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ValuesItem;
