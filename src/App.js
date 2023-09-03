import { ThemeProvider } from "styled-components";
import { Cronometro } from "./pages/Cronometro";
import { defaultTheme } from "./styles/default";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
    <Cronometro />
    <GlobalStyle/>
  </ThemeProvider>
  );
}

export default App;
