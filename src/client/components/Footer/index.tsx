import {
  AppBar,
  Box,
  Divider,
  Grid,
  Link,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';

import useResponsive from '../../hooks/useResponsive';

import Flex from '../Flex';

import StyledFooterLogo from './FooterLogo';

const Footer = () => {
  const { isComputer } = useResponsive();
  return (
    <AppBar
      component="footer"
      sx={{ top: 'auto', bottom: 0, backgroundColor: '#EEEEEE' }}
    >
      <Toolbar variant="dense">
        <Grid
          container
          spacing={{ xs: 1, sm: 2, md: 4 }}
          sx={{ alignItems: 'center', width: '100%' }}
        >
          <Grid item xs={12} sm={6}>
            <Box
              display={isComputer ? 'flex' : 'block'}
              alignItems="center"
              sx={{
                justifyContent: isComputer ? 'left' : 'center',
                '& hr': {
                  mx: 1,
                },
              }}
            >
              <Stack
                direction={isComputer ? 'row' : 'column'}
                sx={{ alignItems: 'center', width: '100%' }}
              >
                <StyledFooterLogo />
                {isComputer && <Divider orientation="vertical" flexItem />}
                <Typography
                  variant="body1"
                  component={Flex}
                  sx={{ justifyContent: 'center' }}
                  className="footerRights"
                >
                  &copy; &nbsp;
                  {new Date().getFullYear()}. All rights reserved.
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
