import ProgressScroll from '@/components/Common/ProgressScroll';
import Cursor from '@/components/Common/cusor';
import LoadingScreen from '@/components/Common/loader';
import Blog from '@/components/blogs/blog';
import Footer from '@/components/blogs/footer';
import Nav from '@/components/blogs/nav';
import Posts from '@/components/blogs/posts';
import ContactUs from '@/components/contact/ContactUs';
import Script from 'next/script';
import React from 'react';

export const metadata = {
  title: 'Manish Kashyap | Full Stack Developer - Blog',
};

function Blogs() {
  return (
    <div>
      <Cursor />

      <ContactUs />
      <LoadingScreen />
      <ProgressScroll />
      <Nav />

      <main className="container">
        <Blog />
        <Posts />
      </main>
      <Footer />
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

export default Blogs;
