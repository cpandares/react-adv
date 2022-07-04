import { lazy, LazyExoticComponent } from 'react';
import { NoLazyPage } from '../01-lazyload/pages';
/* import { LazyPage2, LazyPage3, LazyPage1 } from '../01-lazyload/pages';

 */

type JSXComponent = ()=>JSX.Element

interface Route {
    path: string;
    name: string;
    to: string;
    Component:  LazyExoticComponent<JSXComponent> | JSXComponent
}


const LazyLayout = lazy(()=> import(/* viteChunkName: "LazyPageLayout" */'../01-lazyload/layout/LazyLayout') );


export const routes:Route[] = [

    {
        path: '/lazyload/*',
        to:'/lazyload/lazy1',
        Component: LazyLayout,
        name: 'Lazy - Dash',
    },
    {
        to:'/no-lazy',
        path: '/no-lazy',
        Component: NoLazyPage,
        name: 'No Lazy',
    }

]