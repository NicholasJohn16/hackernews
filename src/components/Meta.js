import React from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '../utils/helpers'

export default class Meta extends React.Component {
	render() {
		const { post } = this.props

		return ( 
			<div className="meta-info-light">
				<span>by <a href={`/user?id=${post.by}`}>{post.by}</a></span>
				<span>on {formatDate(post.time)}</span>

				{post.descendants
					? <span>with <Link to={`/post?id=${post.id}`}>{post.descendants}</Link> comments </span>
					: null
				}

			</div>
		)
	}
}