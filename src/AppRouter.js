import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './containers/Login';
import Home from './containers/Home';
import ExchangeRateByDate from './containers/Exchange/DateRate';
import ExchangeRateByLatest from './containers/Exchange/LatestRate';
import ExchangeRateByBase from './containers/Exchange/BaseRate';
import ExchangeRateBySymbol from './containers/Exchange/SymbolRate';
import ExchangeRateByHistory from './containers/Exchange/HistoryRate';
import ExchangeRateByPeriode from './containers/Exchange/PeriodeRate';
import ExchangeRateByPeriodeSymbol from './containers/Exchange/PeriodeSymbolRate';
import PathName from './PathName';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={PathName.ROOT} component={Login} />
                <Route exact path={PathName.HOME.BASEURL} component={Home} />

                <Route path={PathName.HOME.DATE.BASEURL} component={ExchangeRateByDate} />

                <Route exact path={PathName.HOME.LATEST.BASEURL} component={ExchangeRateByLatest} />
                <Route path={PathName.HOME.LATEST.LATEST_BASE} component={ExchangeRateByBase} />
                <Route path={PathName.HOME.LATEST.LATEST_SYMBOL} component={ExchangeRateBySymbol} />

                <Route exact path={PathName.HOME.HISTORY.BASEURL} component={ExchangeRateByHistory} />
                <Route path={PathName.HOME.HISTORY.HISTORY_PERIODE} component={ExchangeRateByPeriode} />
                <Route path={PathName.HOME.HISTORY.HISTORY_PERIODE_SYMBOL} component={ExchangeRateByPeriodeSymbol} />
            </Switch>
        </Router>
    );
};

export default AppRouter;