import { Box, Container, Card } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { styled } from '@mui/material/styles';
import Logo from 'components/LoginSign';
import Hero from './Hero'

const OverviewWrapper = styled(Box) (
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
  `
)
const Overview = (props) => {
  return (
    <OverviewWrapper>
      <Helmet>
        <title>지윤짱</title>
      </Helmet>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" py={5} alignItems="center">
          <Logo />
        </Box>
        <Card sx={{ p: 10, mb: 10, borderRadius: 12 }}>
          <Hero />
        </Card>
      </Container>
    </OverviewWrapper>
  )
}

export default Overview;