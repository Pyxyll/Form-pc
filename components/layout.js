import Nav from './nav';
import Head from 'next/Head'

/**
 * This is the styles component for the app.
 * Add anything to the Apps head here.
 */
const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const Layout = props => (
    <div>
        <Head>
            <title>Next App Fun</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
        </Head>
        <div style={layoutStyle}>
            <Nav />
            {props.children}
        </div>
    </div>
);

export default Layout;
