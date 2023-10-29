import { NavigationBar } from "./Components/NavBar/Navbar";
import FirebaseTestPage from "./Firebase/FirebaseTestPage";
import Account from "./Pages/accountFlow/Account";
function App() {
  return (
  <>
  <NavigationBar />
  <Account />
  <FirebaseTestPage/>
  </>
  );
}

export default App;
