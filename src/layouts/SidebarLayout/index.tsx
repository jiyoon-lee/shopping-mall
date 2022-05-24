import { FC, ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

import Header from './Header'

const MainWrapper = styled(Box) (
  () => `
    flex: 1 1 auto;
    display: flex;
    height: 100%;
  `
)

const MainContent = styled(Box) (
  () => `
    margin-top: 20px;
    flex: 1 1 auto;
    overflow: auto
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
        <MainContent />
      </MainWrapper>
    </>
  )
}

export default SidebarLayout;