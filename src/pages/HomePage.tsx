import { useState } from 'react';
import { Header } from '@components/Header/Header';
import { Modal } from '@components/Modal/Modal';
import { MobileMenu } from '@components/MobileMenu/MobileMenu';
import { HomeSection1 } from '@components/HomeSection1/HomeSection1';
import { HomeSection2 } from '@components/HomeSection2/HomeSection2';
import { HomeSection3 } from '@components/HomeSection3/HomeSection3';
import { HomeSection4 } from '@components/HomeSection4/HomeSection4';
import { HomeSection5 } from '@components/HomeSection5/HomeSection5';
import { Footer } from '@components/Footer/Footer';

export const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Header setIsMobileMenuOpen={setIsMobileMenuOpen} />
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
      {isMobileMenuOpen && <MobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen} />}
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <Footer />
    </>
  );
};
