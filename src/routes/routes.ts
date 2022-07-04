import { lazy, LazyExoticComponent } from 'react';
/* import { LazyPage2, LazyPage3, LazyPage1 } from '../01-lazyload/pages';

 */

type JSXComponent = ()=>JSX.Element

interface Route {
    path: string;
    name: string;
    to: string;
    Component:  LazyExoticComponent<JSXComponent> | JSXComponent
}


const lazy1 = lazy(()=> import(/* viteChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPage1') );
const lazy2 = lazy(()=> import(/* viteChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2') );
const lazy3 = lazy(()=> import(/* viteChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3') );

export const routes:Route[] = [

    {
        to:"/lazy1",
        path: "/lazy1",
        Component: lazy1,
        name: "Lazy-1 ",
    },
    {
        to:"/lazy2",
        path: "/lazy2",
        Component: lazy2,
        name: "Lazy-2 ",
    },
    {
        to:"/lazy3",
        path: "/lazy3",
        Component: lazy3,
        name: "Lazy-3",
    }

]