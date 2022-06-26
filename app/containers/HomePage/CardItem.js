import React from 'react';
import styled from 'styled-components';
import { Col } from 'antd';
import PropTypes from 'prop-types';

const CardItem = ({ item }) => {
  const StyledCard = styled.div`
    min-height: 180px;
    padding: 20px;
    border-radius: 10px;
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    overflow: hidden;
    position: relative;
  `;
  const formateTime = time => {
    const [hour, min] = time.split(':');
    return `${parseInt(hour, 10) % 12 || 12}:${min} ${
      hour >= 12 ? 'PM' : 'AM'
    }`;
  };
  const formateDate = date => {
    const month = [
      'Jan',
      'Feb',
      'March',
      'April',
      'May',
      'June',
      'July',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ];
    const [yyyy, mm, dd] = date.split('-');
    return `${dd} ${month[parseInt(mm, 10) - 1]} ${yyyy}`;
  };
  return (
    <Col className="gutter-row" span={24} sm={12} md={12} lg={8} xl={6}>
      <StyledCard>
        <div
          style={{
            fontSize: '10px',
            fontWeight: 700,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <span>{formateDate(item.date)}</span>
          <span>{formateTime(item.time)}</span>
        </div>
        <div
          style={{
            marginTop: '10px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              borderRadius: '50%',
              width: '70px',
              height: '70px',
              overflow: 'hidden',
              borderWidth: '1px',
              borderColor: 'black',
              borderStyle: 'solid',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: '30%',
            }}
          >
            <img
              style={{ width: 'inherit', height: 'inherit' }}
              src={item.doctor.profilephotourl}
              alt={`${item.doctor.initials} ${item.doctor.firstName} ${
                item.doctor.lastName
              }`}
            />
          </div>
          <div
            style={{
              fontSize: '12px',
              fontWeight: 700,
              textAlign: 'right',
              maxWidth: '70%',
            }}
          >
            <div>{`${item.doctor.initials} ${item.doctor.firstName} ${
              item.doctor.lastName
            }`}</div>
            <div>{`${item.doctor.specialization.specialization}`}</div>
            <div>{`${item.organisation.name}`}</div>
            <div>{`${item.organisation.countryCode} ${
              item.organisation.contactNumber
            }`}</div>
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            backgroundColor: 'lightgray',
          }}
        >
          <div
            style={{
              fontSize: '12px',
              fontWeight: 700,
              display: 'flex',
              padding: '5px 20px',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ color: item.isVacant ? 'green' : 'red' }}>
              {item.isVacant
                ? `Slot Vacant (Rs ${item.orgfee.amount})`
                : 'Slot Filled'}
            </span>
            <span>{item.consultationtype.consultationType}</span>
          </div>
        </div>
      </StyledCard>
    </Col>
  );
};
CardItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CardItem;
