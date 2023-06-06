import { Component } from "react";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://api.skilla.ru/mango/getList", {
      method: "POST",
      dataType: "json",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer testtoken",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          items: result.results,
        });
      },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <p>{error.message}</p>
    } else if (!isLoaded) {
      return <p>Loading ...</p>
    }
    return (
      <ul>
        {items.map(el => (<li>{el.in_out }</li>))}
      </ul>
    )
  }
}
