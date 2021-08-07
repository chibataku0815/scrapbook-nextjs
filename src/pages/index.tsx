import { DarkModeSwitch } from 'components/DarkModeSwitch'
import { AuthModal } from 'components/Molecules/AuthModal'
import { Container } from 'components/Molecules/Container'
import { CTA } from 'components/Molecules/CTA'
import { Hero } from 'components/Molecules/Hero'
import { Footer } from 'components/Organisms/Footer'
import { Main } from 'components/Organisms/Main'

const Index = () => (
  <Container height="100vh">
    <Hero title="Scrap Book"/>
    <Main>
      <AuthModal></AuthModal>
    </Main>

    <DarkModeSwitch />
    <Footer>
    </Footer>
    <CTA />
  </Container>
)

export default Index
