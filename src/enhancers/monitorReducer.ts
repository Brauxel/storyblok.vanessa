const round = (number: number): number => Math.round(number * 100) / 100

export const monitorReducersEnchancer = (createStore: any): any => (
  reducer: any,
  initialState: any,
  enchancer: any
) => {
  const monitoredReducer = (state: any, action: any): any => {
    const start = performance.now()
    const newState = reducer(state, action)
    const end = performance.now()
    const diff = round(end - start)
    console.log('reducer process time:', diff)
    return newState
  }

  return createStore(monitoredReducer, initialState, enchancer)
}
