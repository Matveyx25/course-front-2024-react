import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Character } from "./pages/Character";
import { Header } from "./components/Header/Header";
import { Location } from "./pages/Location";

const Layout = () => {
	return (
		<div className="App">
      <Header />
			<div className="container">
				<Outlet/>
			</div>
		</div>
	);
}

function App() {
  return (
		<Routes>
			<Route element={<Layout/>}>
				<Route path="/" element={<Home/>}/>
				<Route path="/character/:characterId" element={<Character/>}/>
				<Route path="/location/:locationId" element={<Location/>}/>
				<Route path="*" element={<>Not found</>}/>
			</Route> 
		</Routes>
  );
}

export default App;
