import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Logo from '../../assets/helo_logo.png';
import { connect } from 'react-redux';
import { updateUserInfo } from '../../Redux/Reducer';

const Background = styled.div`
	height: 100vh;
	width: 100vw;
	background-image: linear-gradient(
		99deg,
		#ff70a6,
		#ff9770 40%,
		#ffd670 73%,
		#e9ff70
	);

	display: flex;
	justify-content: center;
	align-items: center;
	> div {
		height: 55vh;
		width: 35vw;
		box-shadow: 0 14px 28px 0 rgba(0, 0, 0, 0.25),
			0 10px 10px 0 rgba(0, 0, 0, 0.26);
		background-image: -webkit-linear-gradient(353deg, #ff7a6e, #ffd670);
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		color: white;
		justify-content: space-around;
		align-content: center;
		align-items: center;
		> div {
			display: flex;
			width: 100%;
			justify-content: space-around;
		}
		> div.buttons {
			justify-content: space-around;
			> button {
				background: black;
				color: white;
				border-radius: 5px;
				border: 0;
				height: 30px;
				width: 70px;
			}
		}
	}
`;

class Auth extends Component {
	constructor() {
		super();

		this.state = {
			username: '',
			password: ''
		};

		this.registerUser = this.registerUser.bind(this);
		this.loginUser = this.loginUser.bind(this);
	}

	registerUser() {
		axios.post('/auth/register', this.state).then(res => {
			this.props.updateUserInfo(res.data);
			this.props.history.push('/dashboard');
		});
	}

	loginUser() {
		axios.post('/auth/login', this.state).then(res => {
			this.props.updateUserInfo(res.data);
			this.props.history.push('/dashboard');
		});
	}

	render() {
		return (
			<Background>
				<div>
					<img src={Logo} alt="Helo Logo" />
					<h1> Helo</h1>
					<div>
						Username:
						<input
							type="text"
							name="username"
							id="username"
							value={this.state.username}
							onChange={e =>
								this.setState({ username: e.target.value })
							}
						/>
					</div>
					<div>
						Username:
						<input
							type="password"
							name="username"
							id="password"
							value={this.state.password}
							onChange={e =>
								this.setState({ password: e.target.value })
							}
						/>
					</div>
					<div className="buttons">
						<button onClick={this.loginUser}>Login</button>
						<button onClick={this.registerUser}>Register</button>
					</div>
				</div>
			</Background>
		);
	}
}

export default connect(null, { updateUserInfo })(Auth);
