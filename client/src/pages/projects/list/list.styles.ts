/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { TableHead, TableRow } from '@mui/material';
import styled from '@emotion/styled';

export const listStyle = css`
  margin: 2rem;
  padding: 1rem;
  background-color: #f9f9f9;
`;

export const StyledTableHead = styled(TableHead)`
  background-color: #f8f9fa;
`;

export const StyledTableRow = styled(TableRow)`
&:hover {
  background-color: #f1f1f1;
}
`;

