// this one is index file to exports all pages or UI for the direct interactions.
// here we are using a Code-Splitting with react.lezy

import { lazy } from 'react';

export * from "./demo"
export * from "./demo/store/demo.actions"
export const Demo = lazy(() => import('./demo/Demo'));