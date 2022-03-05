import React from 'react'
import { fetchMainPosts } from '../utils/api'
import Loading from './Loading'
import PostList from './PostList'

export default class Posts extends React.Component {
	state = {
		loading: true,
		posts: null
	}
	componentDidMount() {
		this.fetchPosts()
	}
	componentDidUpdate(prevProps) {
		if(prevProps.type !== this.props.type) {
			this.fetchPosts()
		}
	}
	fetchPosts() {
		this.setState({
			posts: null
		})

		fetchMainPosts(this.props.type).then((posts) => {
			this.setState({
				posts: posts
			})
		})
	}
	render() {
		const { posts } = this.state

		if(!posts) {
			return (
				<h1><Loading /></h1>
			)
		}

		if(posts) {
			return ( 
				<ul>
					{posts.map((post, index) => {
						return <PostList post={post} key={post.id} />
					})}
				</ul>
			)
		}
	}
}

Posts.defaultProps = {
	type: 'top'
}