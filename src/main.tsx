import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './BannerTop/BannerTop.tsx';
import Header from './Header/Header.tsx';
import SobreNos from './SobreNos/SobreNos.tsx';
import OqueDoador from './OqueDoador/OqueDoador.tsx';
import ComoDoador from './ComoDoador/ComoDoador.tsx';
import Contato from './Contato/Contato.tsx';
import Footer from './Footer/Footer.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <App />
    <SobreNos />
    <OqueDoador />
    <ComoDoador />
    <Contato />
    <Footer />
  </StrictMode>
)
