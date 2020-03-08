import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => (
  <div>
    <Head>
      <title>Riku32</title>
      <link rel="stylesheet" href="/style.css"/>
      <link rel="stylesheet" href="/navbar.css"/>
      <link rel="stylesheet" href="/content.css"/>
      <script src="https://code.iconify.design/1/1.0.4/iconify.min.js"></script>
    </Head>
    <body>
        <div className="wrap">
        <div className="container">
            <Navbar/>
            {props.children}
        </div>
        </div>
    </body>
  </div>
);

export default Layout;