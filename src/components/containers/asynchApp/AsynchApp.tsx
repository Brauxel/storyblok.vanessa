/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { connect } from 'react-redux'
import React, { useEffect, useRef } from 'react'
import {
  fetchPostsIfNeeded,
  invalidateSubreddit,
  selectSubreddit
} from '../../../actions/reddit'
import { Picker } from '../../shared/AsynchApp/Picker'
import { Posts } from '../../shared/AsynchApp/Posts'

const AsynchAppContainer: React.FC = ({
  dispatch,
  selectedSubreddit,
  posts,
  isFetching,
  lastUpdated
}: any) => {
  const prevSelectedSubreddit = useRef()

  const handleChange = (nextSubReddit: string): any => {
    dispatch(selectSubreddit(nextSubReddit))
    dispatch(fetchPostsIfNeeded(nextSubReddit))
  }

  const handleRefresh = (e: any): any => {
    e.preventDefault()
    dispatch(invalidateSubreddit(selectedSubreddit))
    dispatch(fetchPostsIfNeeded(selectedSubreddit))
  }

  useEffect(() => {
    if (selectedSubreddit !== prevSelectedSubreddit) {
      dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    prevSelectedSubreddit.current = selectedSubreddit
    console.log('we are in useeffect')
  })

  console.log(
    'asynch app props',
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  )

  return (
    <div>
      <Picker
        value={selectedSubreddit}
        onChange={handleChange}
        options={['reactjs', 'frontend']}
      />

      <div>
        {lastUpdated && (
          <span>
            Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{' '}
          </span>
        )}

        {!isFetching && (
          <button type="button" onClick={handleRefresh}>
            Refresh
          </button>
        )}

        {isFetching && posts.length === 0 && <h2>Loading...</h2>}
        {!isFetching && posts.length === 0 && <h2>Empty</h2>}

        {posts.length > 0 && (
          <div>
            <Posts posts={posts} />
          </div>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state: any): any => {
  const { selectedSubreddit, postsBySubreddit } = state
  const { isFetching, lastUpdated, items: posts } = postsBySubreddit[
    selectedSubreddit
  ] || { isFetching: true, items: [] }

  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(AsynchAppContainer)
