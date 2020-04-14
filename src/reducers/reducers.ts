import { CHANGE_HEADING } from '../actions/actions'

interface State {
  text: string
}

const initialState = {
  text: 'initial text'
}

export const changeHeading = (
  // eslint-disable-next-line
  state: State = initialState,
  action: any
): State => {
  switch (action.type) {
    case CHANGE_HEADING:
      return { ...state, text: action.text }
    default:
      return state
  }
}
