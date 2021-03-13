import React from 'react';
import styled from 'styled-components'

const Title = styled.h1`
font-family: 'Open Sans'
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
  font-weight: 600;
  color: #e0bc8f;
  font-size: 3.5rem;
  text-transform: uppercase;
`;

const Backdrop = styled.h1`
font-family: 'Open Sans'
  font-weight: 600;
  display: block;
  position: relative;
  top: 45px;
  margin: 0;
  padding: 0;
  opacity: .08;
  letter-spacing: 0.5rem;
  font-size: 4rem;
  color: #e0bc8f;
  text-transform: uppercase;
`;

function SectionTitle({title, side}) {
  return (
    <>
      <Title className={`text-${side}`}>
        <Backdrop>{title}</Backdrop>
        {title}
      </Title>
    </>
  );
}

export default SectionTitle;
