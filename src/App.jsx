import { Header } from "./components/Header/Header";
import { Card } from "./components/Card/Card";
import { useAllCharacters } from "./hooks/useAllCharacters";
import { useState } from "react";

function App() {
	const [page, setPage] = useState(1)
	const { data: charactersData, isFetching } = useAllCharacters({page: page})

  return (
    <div className="App">
      <Header />
      <div className="container">
				<button onClick={() => setPage(prev => prev + 1)}>next page</button>
        <div className="content">
          <div className="wrapper">
						{!isFetching ? charactersData?.results?.map(el => {
							return (
								<Card data={el} />
							)
						}) : <>Loading...</>}
						{charactersData.info}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
