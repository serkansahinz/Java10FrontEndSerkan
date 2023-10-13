import { useState } from "react";

import { ConfigProvider, theme } from "antd";
import MainPage from "./pages";

import { PermissionProvider } from "./context/PermissionContext";

function App() {
  const [isDark, setIsDark] = useState(false);

  const onChangeTheme = (value) => {
    setIsDark(value);
  };

  return (
    <PermissionProvider>
      <ConfigProvider
        theme={{
          algorithm: theme[isDark ? "darkAlgorithm" : "defaultAlgorithm"],
          token: {
            colorPrimary: "#f1c40f",
          },
        }}
      >
        <MainPage onChangeTheme={onChangeTheme} />
      </ConfigProvider>
    </PermissionProvider>
  );
}

export default App;
