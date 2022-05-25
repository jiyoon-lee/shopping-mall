import { FC, ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

const MainWrapper = styled(Box) (
  () => `
    display: flex;
    flex-direction: column;
    height: 100vh;
  `
)

const MainContent = styled(Box) (
  () => `
    flex: 1 auto;
  `
)

interface SidebarLayoutProps {
  children?: ReactNode;
}

const SidebarLayout: FC<SidebarLayoutProps> = () => {
  return (
    <>
      <MainWrapper>
        <Header />
        <MainContent>
          <Outlet />
        </MainContent>
        <Footer />
      </MainWrapper>
    </>
  )
}

export default SidebarLayout;