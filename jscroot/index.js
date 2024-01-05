//lib call
import {addCSS} from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.5/croot.js";
import { insertHTML } from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.4/croot.js";
import {onHashChange} from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.4/croot.js";
//internal call
import { url,id } from "./url/config.js";
import { getContentURL } from "./url/content.js";
import {runAfterHeader,runAfterContent,runAfterHashChange} from "./controller/main.js";


//adding CSS
addCSS("https://unpkg.com/bulma@0.9.4/css/bulma.min.css");
addCSS("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
addCSS("https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css");
// addCSS("https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css");
// addCSS("https://cdn.jsdelivr.net/node_modules/ol/ol.css");
// addCSS("https://cdn.jsdelivr.net/gh/rofinafiin/GIS-SMT5@0.0.1/ch4/css/style.css");
addCSS("assets/css/styles.css");

//rendering HTML
insertHTML(url.template.header,id.header,runAfterHeader);
insertHTML(getContentURL(),id.content,runAfterContent);
onHashChange(runAfterHashChange);


