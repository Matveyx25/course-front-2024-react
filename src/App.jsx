import { useState } from "react"
import { Button } from "./components/Button/Button"

function App() {
	const [count, setCount] = useState(0)

	const handelClick = () => {
		setCount(prev => prev + 1)
	}

  return (
    <>
			{count}
			<Button label={'Value'} onClick={handelClick}/>
    </>
  )
}

export default App
