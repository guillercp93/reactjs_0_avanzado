import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppHookContainer } from "./AppHookContainer";
import { initAxios } from "./Services/axios.service";

initAxios();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppHookContainer />
  </StrictMode>,
)
