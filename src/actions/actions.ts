interface ActionType {
  type: string
  text?: string
}

/* Action types */
export const CHANGE_HEADING = 'CHANGE_HEADING'

/* action creators */
export const chageHeading = (text: string): ActionType => {
  return { type: CHANGE_HEADING, text }
}
