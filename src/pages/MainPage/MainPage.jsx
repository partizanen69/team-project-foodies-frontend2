import {React, lazy} from 'react';
import { useOutletContext } from 'react-router-dom';
import Container from 'components/Container/Container';
import s from './MainPage.module.scss';
const Hero = lazy(() => import('../../components/Hero/Hero'))

const MainPage = () => {
  const { openModal } = useOutletContext();

  return (
    <Container className={s.main_container}>
      <Hero openModal={openModal} />
    </Container>
  );
};

MainPage.propTypes = {};

export default MainPage;