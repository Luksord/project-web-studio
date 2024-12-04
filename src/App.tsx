// import reactLogo from '@assets/react.svg';
// import viteLogo from '@assets/vite.svg';
// import tsLogo from '@assets/ts.svg';
// import eslintLogo from '@assets/eslint.svg';
// import prettierLogo from '@assets/prettier.svg';
// import axiosLogo from '@assets/axios.svg';
import { Header } from '@components/Header/Header';
import { HomeSection1 } from '@components/HomeSection1/HomeSection1';
import { HomeSection2 } from '@components/HomeSection2/HomeSection2';
import { HomeSection3 } from '@components/HomeSection3/HomeSection3';
import { HomeSection4 } from '@components/HomeSection4/HomeSection4';
import { HomeSection5 } from '@components/HomeSection5/HomeSection5';
import { Footer } from '@components/Footer/Footer';

function App() {
  return (
    <main>
      <Header />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <Footer />
    </main>
  );
}

export default App;
