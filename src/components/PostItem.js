import React from 'react'
import queryString from 'query-string'
import { fetchItem, fetchComments } from '../utils/api'
import Loading from './Loading'
import Comment from './Comment'
import Meta from './Meta'

export default class PostItem extends React.Component {
	state = {
		post: null,
		comments: null,
		loadingPost: true,
		loadingComments: true
	}
	componentDidMount() {
		const id = queryString.parse(this.props.location.search)['id']

		fetchItem(id).then((post) => {
			this.setState({
				loadingPost: false,
				post: post
			})

			return fetchComments(post.kids || [])
		}).then((comments) => {
			this.setState({comments: comments, loadingComments: false})
		})
	}
	render() {
		const { post, comments, loadingPost, loadingComments } = this.state

		if(!post) {
			return <Loading />
		}

		return (
			<React.Fragment>
				{loadingPost !== true ? (
						<React.Fragment>
							<h1 className="header">
								<a
									target="_blank"
									rel="noreferrer"
									href={post.url}
									className="link"
								>
									{post.title}
								</a>
							</h1>
							<Meta post={post} />
						</React.Fragment>
					) : <Loading />}
			

				{loadingComments === true 
					? <Loading text="Loading comments" /> 
					: ( comments.map((comment) => {
						return <Comment key={comment.id} comment={comment} />
					}))
				}

			</React.Fragment>
		)

	}
}