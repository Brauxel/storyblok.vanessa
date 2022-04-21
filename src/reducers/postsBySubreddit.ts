import {
  INVALIDATE_SUBREDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS
} from '../actions/reddit'

interface StateTypes {
  isFetching: boolean
  didInvalidate: boolean
  items: []
}

const posts = (
  state: StateTypes = { isFetching: false, didInvalidate: false, items: [] },
  action: any
): any => {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      return { ...state, didInvalidate: true }
    case REQUEST_POSTS:
      return { ...state, isFetching: true, didInvalidate: false }
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

export const postsBySubreddit = (state: any = {}, action: any): any => {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case REQUEST_POSTS:
    case RECEIVE_POSTS:
      return {
        ...state,
        [action.subreddit]: posts(state[action.subreddit], action)
      }
    default:
      return state
  }
}
