import React from 'react'
import queryString from 'query-string'
import { fetchUser } from '../utils/api'
import { formatDate } from '../utils/helpers'
import Loading from './Loading'

// created: 1450969600
// ​id: "nicoburns"
// ​karma: 9671

export default class User extends React.Component {
	state = {
		loading: true,
		user: false
	}
	componentDidMount() {
		const id = queryString.parse(this.props.location.search)['id']

		fetchUser(id).then((user) => {
			console.log(user)
			this.setState({
				user: user,
				loading: false
			})
		})
	}
	render() {
		const { loading, user } = this.state

		if(loading) {
			return <Loading />
		}

		if(user) {
			return (
				<React.Fragment>
					<h1 className="header">{user.id}</h1>
					<div className="meta-info-light">
						<span>joined <strong>{formatDate(user.created)}</strong></span>
						<span>has <strong>{user.karma.toLocaleString()}</strong> karma</span>
					</div>
				</React.Fragment>
			)
		}
	}
}