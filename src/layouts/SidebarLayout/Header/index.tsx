import { Box, Hidden } from '@mui/material'
import { styled } from '@mui/material/styles';

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
    height: ${theme.header.height};
    color: ${theme.header.textColor};
    padding: ${theme.spacing(0, 2)};
    right: 0;
    z-index: 5;
    background-color: ${theme.header.background};
    box-shadow: ${theme.header.boxShadow};
    position: fixed;
    justify-content: space-between;
    width: 100%;
    @media (min-width: ${theme.breakpoints.values.lg}px) {
        left: ${theme.sidebar.width};
        width: auto;
    }
  `
)

const Header = (props) => {
  return (
    <HeaderWrapper display="flex" alignItems="center">
      <Box display="flex" alignItems="center">
        <Hidden lgUp>
          <Logo />
        </Hidden>
        <Hidden>
          <HeaderMenu />
        </Hidden>
      </Box>
    </HeaderWrapper>
  )
}

export default Header;