import * as classnameLib from "classnames";
// Se hace este wraper porque classnames devuelve null cuando le
// pasas clases condicionales y todas son false generando un <div classname="null" />
// entonces si devuelve null el wraper devuelve undefined esto genera <div />
// no se agraga el classname en el div
export const Classnames = (...args) => classnameLib(...args) || undefined;
