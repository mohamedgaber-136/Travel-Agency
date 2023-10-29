import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { NavigationBar } from "./Components/NavBar/Navbar";
import Account from "./Pages/accountFlow/Account";
function App() {
  return (
    <>
      <NavigationBar />
      {/* <Account /> */}
      <Header />
      <Main />
    </>
  );
}

export default App;
