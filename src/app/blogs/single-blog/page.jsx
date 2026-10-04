import ProgressScroll from '@/components/Common/ProgressScroll';
import Cursor from '@/components/Common/cusor';
import LoadingScreen from '@/components/Common/loader';
import Nav from '@/components/blogs/nav';
import Blogs from '@/components/blogs/single-blog/blogs';
import Project from '@/components/blogs/single-blog/project';
import ContactUs from '@/components/contact/ContactUs';
import Footer from '@/components/home/footer';
import Script from 'next/script';
import React from 'react';

export const metadata = {
  title: 'Manish Kashyap | Full Stack Developer - Blog Post',
};

function BlogDetails() {
  return (
    <div>
      <Cursor />
      <ContactUs />
      <LoadingScreen />
      <ProgressScroll />
      <Nav />
      <main className="container">
        <Project />
        <Blogs />
      </main>
      <Footer />
      <Script src="/assets/js/cdemo.js" strategy="beforeInteractive" />
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

export default BlogDetails;
