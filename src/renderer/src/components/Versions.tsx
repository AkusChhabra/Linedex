//import { useState } from 'react'

function Versions(): React.JSX.Element {
  //const [versions] = useState(window.electron.process.versions)

  return (
    <ul className="versions">
      <li className="">
        <button>Straight Segment</button>
      </li>
      <li className="">
        <button>Turn Segment</button>
      </li>
      <li className="">
        <button>Delete Segment X</button>
      </li>
    </ul>
  )
}

export default Versions
