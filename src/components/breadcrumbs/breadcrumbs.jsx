import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../icon';

const Container = styled.div`
  display: flex;
`;

const BreadcrumbDivisor = styled.div`
  margin: 0 5px;
`;

const BreadcrumbItem = styled.div`
  display: flex;
`;

const BreadcrumbLink = styled.a`
  display: flex;
  align-items: center;
  color: #333;
`;

const Breadcrumbs = ({ items }) => (
  <Container>
    {items.map((breadcrumb, idx) => (
      <BreadcrumbItem key={breadcrumb.text}>
        {idx !== 0 && (
          <BreadcrumbDivisor>/</BreadcrumbDivisor>
        )}
        <BreadcrumbLink href={breadcrumb.href}>
          {breadcrumb.iconBefore && (
            <Icon
              size="small"
              name={breadcrumb.iconBefore}
              style={{ marginRight: 5 }}
            />
          )}
          {breadcrumb.text}
          {breadcrumb.iconAfter && (
            <Icon
              size="small"
              name={breadcrumb.iconAfter}
              style={{ marginLeft: 5 }}
            />
          )}
        </BreadcrumbLink>
      </BreadcrumbItem>
    ))}
  </Container>
);

Breadcrumbs.propTypes = {
  items: PropTypes.array,
};

Breadcrumbs.defaultProps = {
  items: [{ text: 'Home', href: '#', iconBefore: 'home' }],
};

export default Breadcrumbs;
