import { ColorModeScript } from '@chakra-ui/react';

import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from './serviceWorker';
import { ChakraProvider ,theme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
// import SearchContextProvider from './Contexts/SearchContextProvider';
// import AuthContextProvider from './Contexts/AuthContextProvider';
import AuthContextProvider from './Context/Authcontext';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(

  <ChakraProvider theme={theme}>
    <AuthContextProvider>

    {/* <SearchContextProvider> */}

    <ColorModeScript />
    <BrowserRouter>
    <App />
    </BrowserRouter>
    {/* </SearchContextProvider> */}
    </AuthContextProvider>
    </ChakraProvider>
 
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();