import React, { useState, useEffect } from "react";
import "./Globals.css";
import Header from "./components/Header/Header";
import Switch from "./components/Switch/Switch";
import TopCardList from "./components/TopCardList/TopCardList";
import Overview from "./components/Overview/Overview";

function App() {
  // Defining the states and the function to update it through useState Hook in order to toggle themes
  const [darkMode, setDarkMode] = useState(false);
  const [checked, setChecked] = useState(false);

  function changeMedia(mq) {
    setDarkMode(mq.matches);
    setChecked(mq.matches);
  }

  useEffect(() => {
    // Change the theme according to the theme applied in your operating system detected by the matchMedia method
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addListener(changeMedia);
    setDarkMode(mq.matches);
    setChecked(mq.matches);

    return () => {
      mq.removeListener(changeMedia);
    };
  }, []);

  return (
    <>
      {/* Change the theme depending on the darkMode state, if true would apply the "is-dark-mode" class, otherwise "is-light-mode" */}

      <main className={`${darkMode ? "is-dark-mode" : "is-light-mode"}`}>
        <Header>
          <Switch
            setDarkMode={setDarkMode}
            checked={checked}
            setChecked={setChecked}
          />
        </Header>
        <TopCardList darkMode={darkMode} />
        <Overview />
      </main>
    </>
  );
}

export default App;
