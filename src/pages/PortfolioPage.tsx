import { useState } from 'react';
import { Header } from '@components/Header/Header';
import { Modal } from '@components/Modal/Modal';
import { MobileMenu } from '@components/MobileMenu/MobileMenu';
import { Footer } from '@components/Footer/Footer';
import { Portfolio } from '@components/Portfolio/Portfolio';

export const PortfolioPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* <Header setIsMobileMenuOpen={setIsMobileMenuOpen} /> */}
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
      {isMobileMenuOpen && <MobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen} />}
      <Portfolio />
      <Footer />
    </>
  );
};
