import { StrictMode } from "react";
import {createRoot} from "react-dom/client";
import App from "./Hooks/HooksRule/RulesHook";
const rootElement=document.getElementById('root');
const Root=createRoot(rootElement);

Root.render(
<StrictMode>
<App/>
</StrictMode>)


