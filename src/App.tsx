import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/i18n-provider";
import { Layout } from "@/components/layout/Layout";
import {
  Hero,
  About,
  Skills,
  Experience,
  Education,
  Projects,
  Contact,
} from "@/sections";

import "@/i18n/i18n";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LanguageProvider>
        <Layout>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
