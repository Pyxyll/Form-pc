import Head from 'next/Head'

import TopNav from './topnav';

/**
 * This is the styles component for the app.
 * Add anything to the Apps head here.
 */
const Layout = props => (
    <div>
        <Head>
            <title>Next App Fun</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                crossorigin="anonymous"
            />
        </Head>
        <div>
            <TopNav />
            {props.children}
        </div>
    </div>
);

export default Layout;
