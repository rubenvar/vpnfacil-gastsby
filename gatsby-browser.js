/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
const React = require('react');

require('fontsource-ubuntu/latin.css');
require('fontsource-quicksand/latin.css');
require('fontsource-audiowide/latin.css');

const { ViewProvider, OrderProvider, MenuProvider } = require('./src/context');
const Layout = require('./src/components/Layout').default;

exports.wrapRootElement = ({ element }) => (
  <MenuProvider>
    <OrderProvider>
      <ViewProvider>{element}</ViewProvider>
    </OrderProvider>
  </MenuProvider>
);

exports.wrapPageElement = ({ element, props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Layout {...props}>{element}</Layout>
);
