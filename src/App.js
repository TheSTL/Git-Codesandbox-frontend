import Header from "./components/Header";

import TabContent from "./components/TabContent";
import { GithubDataContextProvider } from "./context";

function App() {
  return (
    <GithubDataContextProvider>
      <Header />
      <TabContent />
    </GithubDataContextProvider>
  );
}

export default App;
