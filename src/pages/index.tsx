import { DarkModeSwitch } from 'components/DarkModeSwitch'
import { Container } from 'components/Molecules/Container'
import { CTA } from 'components/Molecules/CTA'
import { Hero } from 'components/Molecules/Hero'
import { Footer } from 'components/Organisms/Footer'
import { Main } from 'components/Organisms/Main'

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main></Main>

    <DarkModeSwitch />
    <Footer>
    </Footer>
    <CTA />
  </Container>
)

export default Index
