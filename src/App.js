import Header from "./components/Header";
import Tab from './components/Tab';
import { GithubDataContextProvider } from "./context";

function App() {
  return (
    <GithubDataContextProvider>
      <Header />
      <Tab />
    </GithubDataContextProvider>
  );
}

export default App;
