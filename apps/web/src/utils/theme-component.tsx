// TODO: component not needed yet, but might be needed...
// import {getLazyFC} from '@hom/lazy';
// import {useApp} from '@hom/context';
// import {ITheme} from '@hom/types';
//
// type ThemeProps = {
//   theme: ITheme | null;
//   children?: React.ReactElement;
// }
//
// export const ThemeComponent = getLazyFC<ThemeProps>(({View}) => {
//   const ThemeView = View`
//     display: flex;
//   `;
//
//   return ({children, ...props}) => {
//     const {theme} = useApp();
//     if (theme) {
//       return <ThemeView {...props}>
//         {children}
//       </ThemeView>
//     }
//     return null;
//   };
// });
