// import { render, screen } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { Card } from './Card';
// import { store } from '../../redux/store';
//
// describe('Card', () => {
//   const data = {
//     name: 'fdsfsd',
//   };
//   test('test render', () => {
//     render(
//       <Provider store={store}>
//         <Card data={data} />
//       </Provider>,
//     );
//     expect(screen.getByTestId('card')).toBeInTheDocument();
//     screen.debug();
//   });
// });
//
// // import { fireEvent, screen } from '@testing-library/react';
// // import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
// // import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
// //
// // describe('Sidebar', () => {
// //   test('with only first param', () => {
// //     componentRender(<Sidebar />);
// //     expect(screen.getByTestId('sidebar')).toBeInTheDocument();
// //   });
// //
// //   test('test toggle', () => {
// //     componentRender(<Sidebar />);
// //     const toggleBtn = screen.getByTestId('sidebar-toggle');
// //     expect(screen.getByTestId('sidebar')).toBeInTheDocument();
// //     fireEvent.click(toggleBtn);
// //     expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
// //   });
// // });
