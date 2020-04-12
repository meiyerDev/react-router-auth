import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider'

import {
	Route,
	Redirect
} from 'react-router-dom'

export default function PrivateRoute({ component:Component, ...rest}) {
	const { isAuthenticated } = useContext(AuthContext)
	return(
		<Route
			{...rest}
			render={(props) => 
				isAuthenticated ? (
					<Component {...props}/>
				) : (
					<Redirect
						to={{
							pathname: '/acceder',
							state: { from: props.location }
						}}
					/>
				)
			}
		/>
	)
}