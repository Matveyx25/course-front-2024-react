import { Header } from "./components/Header/Header";
import { Card } from "./components/Card/Card";
import { useAllCharacters } from "./hooks/useAllCharacters";
import { useState } from "react";
import { Paginator } from "./components/Shared/Paginator/Paginator";

function App() {
	const [page, setPage] = useState(1)
	const { data: charactersData, isFetching } = useAllCharacters({page: page})

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="content">
          <div className="wrapper">
						{!isFetching ? charactersData?.results?.map(el => {
							return (
								<Card data={el} />
							)
						}) : <>Loading...</>}
          </div>
					<Paginator 
						pages={charactersData?.info?.pages}
						pressHandler={setPage}
						prev={charactersData?.info?.prev}
						next={charactersData?.info?.next}
						{...{page}}
					/>
        </div>
      </div>
    </div>
  );
}

export default App;
