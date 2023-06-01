import { styled } from '@mui/material/styles';
import {Box, BoxProps} from '@mui/material';
import {FunctionComponent} from "react";

const Flex: FunctionComponent<BoxProps> = styled(Box)(() => ({
  display: 'flex',
}));

export default Flex;
