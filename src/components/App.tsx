import AppHeader from "./AppHeader"
import CharList from "./CharList"
import RandomChar from "./RandomChar"

import decoration from "../resources/img/bg-asset.png";

function App() {

  return (
    <main className="max-w-6xl w-full mx-auto px-4 mb-11 relative">
      <AppHeader />
      <RandomChar />
      <CharList />
      <img className="w-md -right-12 -bottom-8 -z-[1] absolute" src={decoration} alt="" />
    </main>
  )
}

export default App