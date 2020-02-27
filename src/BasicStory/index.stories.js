// import React from 'react';
// import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
// import { Button, Welcome } from '@storybook/react/demo';
// import { Test1 } from './Test1';
// import { Home } from './Home';

// storiesOf('Welcome', module)
//   .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">😀 😎 👍 💯xx</span>
//     </Button>
//   ));
  
// storiesOf('Basic', module)
//   .add('to Storybook', () => <Welcome showApp={linkTo('Basic1')} />)
//   .add('to first', () => {
//     return <Test1 showApp={linkTo('Basic1')} showApp2={linkTo('Basic')} onClick={action('clicked')}>xxxxxxx</Test1>;
//   })
//   .add('to second', () => {
//     return <Button onClick={linkTo('Basic')}>xxxxxxx</Button>;
//   })
//   .add('Home', () => <Home />)
//   .add('with Log', () => <Button onClick={() => console.log('Data:', 1, 3, 4)}>Log Button</Button>)
//   .add('with Warning', () => <Button onClick={() => console.warn('Data:', 1, 3, 4)}>Warn Button</Button>)
//   .add('with Error', () => <Button onClick={() => console.error('Test Error')}>Error Button</Button>)
//   .add('with Uncatched Error', () =>
//     <Button onClick={() => console.log('Data:', 'T.buu.foo')}>Throw Button</Button>);

// storiesOf('Basic1', module)
//   .add('to third', () => {
//     return <Test1 showApp={linkTo('Basic')} onClick={action('clicked2')}>xxxxxxx</Test1>;
//   });

// const title = { title: 'Button3' };
// const withText3 = () => <Button>Hello Button3</Button>;
// const withEmoji3 = () => (
//   <Button>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );
// storiesOf(title.title, module).add('withText3', withText3).add('withEmoji3', withEmoji3);
