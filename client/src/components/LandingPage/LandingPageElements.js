import React from 'react';
import styled from 'styled-components';
import Beer from '../../resources/beer2.jpg';

export const PageContainer = styled.div`
width: 100%;
height: 100vh;
background-image: url(${Beer});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
`