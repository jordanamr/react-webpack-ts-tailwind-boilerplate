import * as React from "react";
import { hot } from "react-hot-loader/root";
import "../assets/scss/tailwind.scss";
import "../assets/scss/app.scss";
import reactLogo from "../assets/img/react_logo.svg";

interface IProps {
  content: string;
}

interface IState {
  count: number;
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  resetCount = () => {
    this.setState({ count: 0 });
  };

  public render() {
    const { content } = this.props;
    const { count } = this.state;
    return (
      <>
        <div className="w-full">
          <div className="flex items-center justify-center h-screen">
            <div className="container mx-60 py-4 bg-white rounded shadow-lg bg-gray-100">
              <div className="px-12 py-6">
                <img src={reactLogo} className="object-fill h-32 w-full" />
                <h1 className="text-center font-normal text-3xl text-gray-800 leading-loose my-3 w-full">
                  {content} ({count})
                </h1>
                <div className="w-full text-center">
                  <div className="max-w-sm mx-auto block items-center">
                    <button onClick={this.incrementCount} className="btn-indigo">
                      Increment
                    </button>
                    <button onClick={this.resetCount} className="btn-indigo">
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default hot(App);
