import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./entities/redux/store.ts";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </StrictMode>
)
