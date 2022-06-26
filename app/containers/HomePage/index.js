/*
 *
 * LanguageToggle
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { Row, PageHeader, Button } from 'antd';
import { getTotalNumSchedules, getSchedules } from './redux/selector';
import { getScheduleData } from './redux/actions';
import reducer from './redux/reducer';
import saga from './redux/saga';
import CardItem from './CardItem';
import { setLoggedOut } from '../App/redux/actions';

const key = 'home';
const HomePage = ({
  scheduleTotal,
  scheduleList,
  loadListData,
  logOutUser,
}) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    loadListData();
  }, []);
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <PageHeader
        style={{
          position: 'fixed',
          zIndex: '99999',
          top: '0',
          width: '100%',
        }}
        ghost={false}
        title="Time Slot"
        extra={[
          <div
            key="1"
            style={{
              fontSize: '10px',
              fontWeight: 700,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'end',
              marginRight: '15px',
            }}
          >
            <div> {`Total Slots:${scheduleTotal}`}</div>
            <div>
              {`Avalable Slots:${scheduleList.filter(i => i.isVacant).length}`}
            </div>
          </div>,
          <Button key="2" type="danger" onClick={logOutUser}>
            Logout
          </Button>,
        ]}
      />
      <div style={{ margin: '10px' }}>
        <Row gutter={[10, 10]} style={{ marginTop: '80px' }}>
          {scheduleList
            .sort(
              (a, b) =>
                parseInt(a.time.replace(/:/g, ''), 10) -
                parseInt(b.time.replace(/:/g, ''), 10),
            )
            .map(item => (
              <CardItem item={item} key={item.id} />
            ))}
        </Row>
      </div>
    </div>
  );
};

HomePage.propTypes = {
  scheduleTotal: PropTypes.number,
  scheduleList: PropTypes.array,
  loadListData: PropTypes.func,
  logOutUser: PropTypes.func,
};
export function mapDispatchToProps(dispatch) {
  return {
    loadListData: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(getScheduleData());
    },
    logOutUser: () => {
      dispatch(setLoggedOut());
    },
  };
}
const mapStateToProps = createStructuredSelector({
  scheduleList: getSchedules(),
  scheduleTotal: getTotalNumSchedules(),
});
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(
  withConnect,
  memo,
)(HomePage);
