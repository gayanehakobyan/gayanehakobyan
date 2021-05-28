import * as React from "react"
import * as ReactDOM from "react-dom"

const App = React.lazy(() => import("./components/Main"));


ReactDOM.render((
    <React.Suspense fallback={null}>
        <App />
    </React.Suspense>), document.getElementById("root"))