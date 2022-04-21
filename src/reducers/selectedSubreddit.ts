import { SELECT_SUBREDDIT } from '../actions/reddit'

export const selectedSubreddit = (state = 'reactjs', action: any): any => {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit
    default:
      return state
  }
}
