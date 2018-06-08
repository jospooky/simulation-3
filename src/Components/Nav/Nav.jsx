import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Sidebar = styled.div`
	height: 100vh;
	width: 100px;
	display: flex;
	flex-direction: column;
	box-shadow: 10px 0 20px 0 rgba(0, 0, 0, 0.1), 5px 0 5px rgba(0, 0, 0, 0.2);
	background-image: linear-gradient(0deg, #ff7abe, #ff9770);
`;

const nav = () => <Sidebar>Nav</Sidebar>;

function mapStateToProps(state) {
	const { username, profile_pic } = state;
	return { username, profile_pic };
}

export default connect(mapStateToProps)(nav);
