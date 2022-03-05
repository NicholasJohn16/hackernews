import React from 'react'
import Meta from './Meta'

export default class Comment extends React.Component {
	render() {
		const { comment } = this.props

		return (
			<div className="comment">
				<Meta post={comment} />
				<p dangerouslySetInnerHTML={{__html: comment.text}} />
			</div>
		)
	}
}