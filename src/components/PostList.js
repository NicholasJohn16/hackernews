import React from 'react'
import Meta from './Meta'

// by: "mcguire"
// ​​descendants: 10
// ​​id: 26648002
// ​​kids: Array(6) [ 26648407, 26648405, 26648368, … ]
// ​​score: 33
// ​​time: 1617202067
// ​​title: "Cheaters are likely to dominate cheating-enabling environments"
// ​​type: "story"
// ​​url: "http://journal.sjdm.org/20/200824b/jdm200824b.html"

export default class PostLost extends React.Component {

	render() {
		const { post } = this.props

		return (
			<li className="post">
				<a target="_blank" rel="noreferrer" href={post.url} className="link">{post.title}</a>
				<Meta post={post} />
			</li>
		)
	}
}