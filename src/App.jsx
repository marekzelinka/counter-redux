/* eslint-disable react/prop-types */

function App({ store }) {
  return (
    <>
      <div>{store.getState()}</div>
      <button
        type="button"
        onClick={() => store.dispatch({ type: 'INCREMENT' })}
      >
        plus
      </button>
      <button
        type="button"
        onClick={() => store.dispatch({ type: 'DECREMENT' })}
      >
        minus
      </button>
      <button type="button" onClick={() => store.dispatch({ type: 'ZERO' })}>
        zero
      </button>
    </>
  )
}

export default App
