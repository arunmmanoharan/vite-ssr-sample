import {FunctionComponent} from "react";
import { styled } from '@mui/material/styles';

import { ReactComponent as FooterLogo } from '../../../assets/logo.svg';

const StyledFooterLogo: FunctionComponent = styled(FooterLogo)`
  max-width: 6rem;
  min-width: 4rem;
  &:hover {
    cursor: pointer;
  }
`;

export default StyledFooterLogo;
