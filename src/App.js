import React from 'react'
import { AuthProvider } from './AuthProvider'

import {
	BrowserRouter as Router,
	Switch,
} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'

import Login from './screen/auth/Login'
import Dashboard from './screen/Dashboard'

function App(){
	return(
		<AuthProvider>
			<Router>
				<Switch>
					<PublicRoute path='/acceder' component={Login}/>
					<PrivateRoute path='/inicio' component={Dashboard}/>
				</Switch>
			</Router>
		</AuthProvider>
	)
}

export default App;