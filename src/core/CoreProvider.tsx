import { BrowserRouter as Router } from 'react-router-dom';
import { combineContextProviders } from './root/utils';
import { MuiProvider } from './materialTheme';
import { ApolloProvider } from './apollo';

const providers = [Router, MuiProvider, ApolloProvider];

const CoreProvider = combineContextProviders(...providers);

export default CoreProvider;
