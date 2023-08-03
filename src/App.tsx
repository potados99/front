import React from "react";
import "./App.css";

function App() {

  const sites = [
    "www.potados.com",
    "duty.potados.com",
    "aws.potados.com",
    "home.potados.com",
    "cloud.potados.com",
    "collect.potados.com",
    "chat.potados.com",
    "bot.potados.com",
    "blog.potados.com",
    "tools.potados.com",
    "sugang.potados.com",
    "shell.potados.com",
    "desktop.potados.com",
    "browser.potados.com",
    "flick.potados.com",
    "focus.potados.com"
  ];

  return (
    <div className="App">
      <header className="App-header">
        {sites.map(s =>
          <a
            className="App-link"
            href={`https://${s}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {s}
          </a>)
        }

      </header>
    </div>
  );
}

export default App;
