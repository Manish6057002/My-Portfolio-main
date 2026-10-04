import './globals.css';
import Lines from '@/components/Common/Lines';
import generateStylesheetObject from '@/Common/generateStylesheetsObject';

export const metadata = {
  title: 'Manish Kashyap | Full Stack Developer',
  icons: {
    icon: '/assets/imgs/favicon.ico',
    shortcut: '/assets/imgs/favicon.ico',
    other: generateStylesheetObject([
      '/assets/css/plugins.css',
      '/assets/css/style.css',
    ]),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        />
      </head>
      <body className="sub-bg">
        <Lines />
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
