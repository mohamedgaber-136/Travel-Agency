import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { NavigationBar } from "./Components/NavBar/Navbar";
import FirebaseTestPage from "./Firebase/FirebaseTestPage";
import Account from "./Pages/accountFlow/Account";
function App() {
  return (
    <>
      <NavigationBar />
      <Account />
      <Header />
      <Main />
      <FirebaseTestPage />
    </>
  );
}

export default App;
