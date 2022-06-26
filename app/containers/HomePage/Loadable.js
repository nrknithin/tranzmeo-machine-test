/**
 * Asynchronously loads the component for HomePage
 */

import React from 'react';
import loadable from 'utils/loadable';
import LoadingIndicator from 'components/LoadingIndicator';
import styled from 'styled-components';
const PageLoader = () => {
  const PageContainer = styled.div`
    height: 100vh;
    margin: 0;
    display: flex;
    align-items: center;
  `;
  return (
    <PageContainer>
      <LoadingIndicator />
    </PageContainer>
  );
};
export default loadable(() => import('./index'), {
  fallback: <PageLoader />,
});
