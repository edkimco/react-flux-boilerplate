// @flow

import  * as React from 'react';

type Props = {
  title: string,
  subTitle: ?string
};
type State = {
  count: number
};

class App extends React.Component<Props, State> {
  static defaultProps = {
    title: 'I\'m a sample title, and required',
    subTitle: 'i\'m a sample sub title, but not required'
  };

  state = {
    count: 0
  };

  handleChange = (e: SyntheticEvent<HTMLButtonElement>) => {
    (e.currentTarget: HTMLButtonElement);

    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <div>{this.state.count}</div>
    );
  };
};

export default App;
