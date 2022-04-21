/* eslint-disable */
import fetch from 'cross-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export const selectSubreddit = (subreddit: string): any => ({
  type: SELECT_SUBREDDIT,
  subreddit
})

export const invalidateSubreddit = (subreddit: string): any => ({
  type: INVALIDATE_SUBREDDIT,
  subreddit
})

const requestPosts = (subreddit: string): any => ({
  type: REQUEST_POSTS,
  subreddit
})

const receivePosts = (subreddit: any, json: any): any => ({
  type: RECEIVE_POSTS,
  subreddit,
  posts: json.data.children.map((child: any) => child.data),
  receivedAt: Date.now()
})

function fetchPosts(subreddit: any) {
  return (dispatch: any) => {
    dispatch(requestPosts(subreddit))
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then((response) => response.json())
      .then((json) => dispatch(receivePosts(subreddit, json)))
  }
}

function shouldFetchPosts(state: any, subreddit: any) {
  const posts = state.postsBySubreddit[subreddit]

  if (!posts) return true
  else if (posts.isFetching) return false
  else return posts.didInvalidate
}

export const fetchPostsIfNeeded = (subreddit: any) => {
  return (dispatch: any, getState: any) => {
    if (shouldFetchPosts(getState(), subreddit))
      return dispatch(fetchPosts(subreddit))
  }
}
