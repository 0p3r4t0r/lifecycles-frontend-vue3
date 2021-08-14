/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// scss files
declare module '*.module.scss' {
  const styles: Record<string, string>
  export default styles
}
