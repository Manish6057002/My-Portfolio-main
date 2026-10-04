import Script from 'next/script';
import LoadingScreen from '@/components/Common/loader';
import Cursor from '@/components/Common/cusor';
import ProgressScroll from '@/components/Common/ProgressScroll';
import ContactUs from '@/components/contact/ContactUs';
import Info from '@/components/contact/info';
import Footer from '@/components/home/footer';
import NavTop from '@/components/home/nav-top';
import Navbar from '@/components/home/navbar';
import Portfolio from '@/components/home/portfolio';
import Profile from '@/components/home/profile';
import Services from '@/components/home/services';
import Skills from '@/components/home/skills';
export default function Home() {
  return (
    <div>
      <Cursor />
      <ContactUs />
      <LoadingScreen />
      <ProgressScroll />

      <div>
        <NavTop />
        <main className="container">
          <Profile />
          <Navbar />
          <section className="in-box">
            <Services />
            <Skills />
            <Portfolio />
            <Info />
          </section>
        </main>
        <Footer />
      </div>
      <Script
        src="/assets/js/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/jquery-migrate-3.4.0.min.js"
        strategy="beforeInteractive"
      />

      <Script src="/assets/js/plugins.js" strategy="beforeInteractive" />
      <Script src="/assets/js/scripts.js" strategy="beforeInteractive" />
      <Script src="/assets/js/three.min.js" strategy="lazyOnload" />
    </div>
  );
}
