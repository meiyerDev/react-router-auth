import React, { useState, useContext } from 'react'
import { AuthContext } from '../../AuthProvider'
import User from '../../apis/User'

export default function Login() {
	const { setUser } = useContext(AuthContext)

	const [ identity, setIdentity ] = useState(null)
	const [ email, setEmail ] = useState(null)
	const [ password, setPassword ] = useState(null)
	const [ error, setError ] = useState(null)

	const handleLogin = e => {
		e.preventDefault()
		const form = {
			identity,
			email,
			password
		}
		User.login(form)
		.then(response => {
			setUser(response.data.user)
		})
		.catch(e => {
			console.log(e)
		})
	}

	return(
		<div className="container justify-content-center row">
			<div className="card mt-4">
				<div className="card-body">
					<h3 className="text-center">Iniciar Sesión</h3>
					<form
						className="text-center"
						onSubmit={handleLogin}>
						{error && 
							<div className="alert alert-danger">{error}</div>}
						<div className="col-sm-12 mt-1 from-group">
							<input
								type="text"
								name="identity"
								id="identity"
								placeholder="Cédula"
								onChange={e => setIdentity(e.target.value)}
								className="form-control"/>
						</div>
						<div className="col-sm-12 mt-1 from-group">
							<input
								type="email"
								name="email"
								id="email"
								placeholder="Correo Electrónico"
								onChange={e => setEmail(e.target.value)}
								className="form-control"/>
						</div>
						<div className="col-sm-12 mt-1 from-group">
							<input
								type="password"
								name="password"
								id="password"
								placeholder="Contraseña"
								onChange={e => setPassword(e.target.value)}
								className="form-control"/>
						</div>
						<button
							className="btn btn-primary mt-1"
							onClick={handleLogin}>Iniciar Sesión</button>
					</form>
				</div>
			</div>
		</div>
	)
}
