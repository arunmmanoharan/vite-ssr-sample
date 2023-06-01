import useMediaQuery from '@mui/material/useMediaQuery';

export interface IBreakpointsType {
  isMobile: boolean;
  isTablet: boolean;
  isSmallLaptop: boolean;
  isLargeLaptop: boolean;
  isDesktop: boolean;
  isComputer: boolean;
  isLaptop: boolean;
}

const useResponsive = (): IBreakpointsType => {
  return {
    isMobile: useMediaQuery('(max-width: 576px)'),
    isTablet: useMediaQuery('(min-width: 577px) and (max-width: 768px)'),
    isSmallLaptop: useMediaQuery('(min-width: 769px) and (max-width: 1366px)'),
    isLargeLaptop: useMediaQuery('(min-width: 1367px) and (max-width: 1600px)'),
    isDesktop: useMediaQuery('(min-width: 1601px)'),
    isComputer: useMediaQuery('(min-width: 992px)'),
    isLaptop: useMediaQuery('(min-width: 769px) and (max-width: 1600px)'),
  };
};

export default useResponsive;
