import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/i18n-provider";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/about/About";
import { Skills } from "@/sections/Skills";
import { Experience } from "@/sections/Experience";
import { Education } from "@/sections/Education";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/contact/Contact";

// Importar configuración de i18n
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
