import { Component } from "react";
import s from "./List.module.css";
import { CallTypes } from "../../ui/CallTypes";

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
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results,
          
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }


  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <p>{error.message}</p>;
    } else if (!isLoaded) {
      return <p>Loading ...</p>;
    }
    return (
      <>
        <div className={s.table}>
          <ul className={s.table__head}>
            <li>Тип</li>
            <li>Время</li>
            <li>Сотрудник</li>
            <li>Звонок</li>
            <li>Источник</li>
            <li>Оценка</li>
            <li>Длительность</li>
          </ul>
          {/* <div className="table__body">{tableBody}</div> */}
        </div>
        <ul className={s.table__body}>
          {items.map((el) => (
            <li className={s.table__ro}>
              <div className={s.types}>
                {el.in_out === 1 ? (
                  <CallTypes in_call={true} />
                ) : el.in_out === 0 ? (
                  <CallTypes out_call={true} />
                ) : (
                  <CallTypes />
                )}
              </div>
              <div className="time">{el.date.substring(11, 16)}</div>
              <div className="employee">
                <img
                  className="employee__avatar"
                  src={el.person_avatar}
                  alt="avatar"
                />
              </div>
              <div className="call">
                {el.in_out === 1 ? el.from_number : el.to_number}
              </div>
              <div>{el.source}</div>
              <div>{el.partner_data.phone }</div>
              <div>{el.errors}</div>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
