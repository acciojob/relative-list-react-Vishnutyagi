import React from 'react'

const App = () => {
  return (
    <div id="main">
        <ol key={relativeList}>
          <li key={relativeListItem1}> item 1</li>
          <li key={relativeListItem2}> item 2</li>
          <li key={relativeListItem3}> item 3</li>
          <li key={relativeListItem4}> item 4</li>
          <li key={relativeListItem5}> item 5</li>
        </ol>
    </div>
  )
}

export default App
