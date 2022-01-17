import { render } from "preact";
import { Page } from "./app";
import "./index.css";
import renderToString from "preact-render-to-string";

/* this works too
const html = renderToString(<Page />);
document.getElementById("page")!.innerHTML = html;
*/

render(<Page />, document.getElementById("page")!);
