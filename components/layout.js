import Head from 'next/Head'

import TopNav from './topnav';

/**
 * This is the styles component for the app.
 * Add anything to the Apps head here.
 */
const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;
