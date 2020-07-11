import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Landing from '../components/Landing';
import Designs from '../components/Designs';
import NotFound from '../components/NotFound';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<div>
				<div className="header">
					<Header />
				</div>
				<Switch>
					<Route path="/" component={Landing} exact={true} />
					<Route path="/designs" component={Designs} />
					<Route component={NotFound} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};
export default AppRouter;
