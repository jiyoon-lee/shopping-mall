import { Box, Hidden } from '@mui/material'
import { styled } from '@mui/material/styles';

import Logo from 'components/Logo'

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
    height: 88px;
    color: red;
    padding: ${theme.spacing(0, 2)};
    right: 0;
    z-index: 5;
    background-color: yellow;
    box-shadow: 0px 2px 3px rgba(159, 162, 191, 0.18), 0px 1px 1px rgba(159, 162, 191, 0.32);
    position: fixed;
    justify-content: space-between;
    width: 100%;
    @media (min-width: ${theme.breakpoints.values.lg}px) {
        left: 280px;
        width: auto;
    }
  `
)

const Header = (props) => {
  return (
    <HeaderWrapper display="flex" alignItems="center">
      <Box display="flex" alignItems="center">
      <Logo />
        <Hidden lgUp>
        </Hidden>
        <Hidden>
          {/* <HeaderMenu /> */}
        </Hidden>
      </Box>
    </HeaderWrapper>
  )
}

export default Header;