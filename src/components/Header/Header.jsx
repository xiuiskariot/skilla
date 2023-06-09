import React from "react";
import s from "./Header.module.css";
import classNames from "classnames";
import { Indicator } from "../../ui/Indicator/Indicator";
import { CurrentDate } from "../../ui/CurrentDate/CurrentDate";
import avatar from "./assets/avatar.svg";

import search from "./assets/search.svg";
import { OpenBtn } from "../../ui/OpenBtn/OpenBtn";

export const Header = () => {
  return (
    <header className={s.lk__navigation}>
      <div className={s.lk__container}>
        <CurrentDate />
        <div className={s.lk__statistics}>
          <div className={classNames(s.lk__statistic, s.new)}>
            <p>
              Новые звонки <span>20 из 30 шт</span>
            </p>
            <Indicator color={"#28A879"} progress={"67%"} />
          </div>
          <div className={classNames(s.lk__statistic, s.quality)}>
            <p>
              Качество разговоров <span>40%</span>
            </p>
            <Indicator color={"#FFD500"} progress={"40%"} />
          </div>
          <div className={classNames(s.lk__statistic, s.convers)}>
            <p>
              Конверсия в заказ <span>67%</span>
            </p>
            <Indicator color={"#EA1A4F"} progress={"67%"} />
          </div>
        </div>
        <div className={s.lk_personal}>
          <img src={search} alt="search" />
          <div className={s.lk_personal_name}>
            <p>ИП Сидорова Александра Михайловна</p>
            <OpenBtn/>
          </div>
          <div className={s.lk_personal_avatar}>
            <img src={avatar} alt="avatar" />
            <OpenBtn/>
          </div>
        </div>
      </div>
    </header>
  );
};


// const HeaderStyled = styled.header`
//   grid-area: header;
//   background-color: var(--bg-color-header);
//   overflow: visible;
//   .header__container {
//     height: 100%;
//     overflow: visible;
//     position: relative;
//   }
//   .header__inner {
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     font-family: "SFProDisplay";
//   }
//   .header__left {
//     display: flex;
//     .indicators {
//       display: grid;
//       grid-template-columns: repeat(3, 164px);
//       grid-gap: 56px;
//       .indicator__text {
//         font-size: 14px;
//         font-weight: 400;
//         .indicator__text_green {
//           color: var(--color-green);
//         }
//         .indicator__text_yellow {
//           color: var(--color-yellow);
//         }
//         .indicator__text_red {
//           color: var(--color-red);
//         }
//       }
//       .indicator {
//         display: grid;
//         grid-gap: 7px;
//         .indicator__progress {
//           width: 156px;
//           height: 6px;
//           border-radius: 12px;
//         }
//         .indicator__progress::-webkit-progress-bar {
//           background-color: #dee6f5;
//         }
//         .indicator__progress_green::-webkit-progress-value {
//           background-color: var(--color-green);
//         }
//         .indicator__progress_yellow::-webkit-progress-value {
//           background-color: var(--color-yellow);
//         }
//         .indicator__progress_red::-webkit-progress-value {
//           background-color: var(--color-red);
//         }
//       }
//     }
//   }
//   .header__right {
//     display: flex;
//     justify-content: space-between;
//     width: 487px;
//     .search {
//       align-self: center;
//       height: 32px;
//       width: 32px;
//       display: flex;
//       align-items: center;
//       cursor: pointer;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//     }
//     .user {
//       display: flex;
//       .client {
//         display: grid;
//         grid-template-columns: max-content 24px;
//         grid-gap: 10px;
//         align-items: center;
//         .client__name {
//           font-size: 15px;
//           font-weight: 400;
//           color: #899cb1;
//         }
//       }
//       .avatar {
//         display: grid;
//         grid-template-columns: 40px 24px;
//         grid-gap: 3px;
//         align-items: center;
//         margin-left: 47px;
//         cursor: pointer;
//         height: 64px;
//         .avatar__img {
//           border-radius: 50%;
//         }
//       }
//       .avatar:hover {
//         .avatar__more {
//           transform: rotate(180deg);
//           & path {
//             fill: #0024cb;
//           }
//         }
//         .profile {
//           display: block;
//         }
//       }
//     }
//   }
//   .profile {
//     position: absolute;
//     z-index: 4;
//     top: 64px;
//     right: 8px;
//     display: none;
//     width: 368px;
//     border-radius: 4px;
//     box-shadow: 4px 16px 50px 0 #8187a36b;
//     background-color: #ffffff;
//     font-size: 15px;
//     padding: 20px 0;
//     font-family: "SFProDisplay";
//     .profile__data {
//       padding: 0 31px;
//       color: #5e7793;
//       .nameAndOut {
//         font-size: 18px;
//         font-weight: 500;
//         color: #122945;
//         display: flex;
//         justify-content: space-between;
//         .out {
//           cursor: pointer;
//         }
//         .out:hover path {
//           fill: #0024cb;
//         }
//       }
//       .jobAndlocation {
//         padding: 6px 0 20px;
//         display: flex;
//         align-items: center;
//         gap: 8px;
//         .job {
//           position: relative;
//         }
//         .point {
//           width: 4px;
//           height: 4px;
//           background-color: #adbfdf;
//           border-radius: 50%;
//         }
//       }
//       .phone,
//       .email {
//         display: flex;
//         gap: 9px;
//         align-items: center;
//         cursor: pointer;
//         & svg {
//           width: 16px;
//           height: 16px;
//           & path {
//             fill: #adbfdf;
//           }
//         }
//       }
//       .email {
//         padding: 8px 0 16px;
//         border-bottom: 1px solid #eaf0fa;
//       }
//     }
//     .profile__article {
//       .profile__title {
//         color: #5e7793;
//         margin: 16px 0 8px;
//         padding: 0 32px;
//       }
//       .profile__item {
//         padding: 0 32px;
//         height: 48px;
//         display: grid;
//         grid-template-columns: 32px 1fr 20px;
//         align-items: center;
//         color: var(--bg-color-btn);
//         cursor: pointer;
//         .profile__item_name {
//           padding-left: 12px;
//         }
//         &:hover {
//           background-color: #002efb21;
//           color: #0024cb;
//         }
//         img {
//           width: 32px;
//           border-radius: 50%;
//         }
//         & svg {
//           display: none;
//         }
//       }
//       .profile__item:hover {
//         & svg {
//           display: block;
//         }
//       }
//     }
//   }
// `;

// export const Header = () => {
 
//   return (
//     <HeaderStyled>
//       <div className="header__container">
//         <div className="header__inner">
//           <div className="header__left">
//             <CurrentDate />
//             <div className="indicators">
//               <div className="indicator newCalls">
//                 <div className="indicator__text">
//                   Новые звонки
//                   <span className="indicator__text_green"> 12 из 30 шт</span>
//                 </div>
//                 <progress
//                   className="indicator__progress indicator__progress_green"
//                   max={100}
//                   value={40}
//                 ></progress>
//               </div>
//               <div className="indicator quality">
//                 <div className="indicator__text">
//                   Качество разговоров
//                   <span className="indicator__text_yellow"> 30%</span>
//                 </div>
//                 <progress
//                   className="indicator__progress indicator__progress_yellow"
//                   max={100}
//                   value={30}
//                 ></progress>
//               </div>
//               <div className="indicator conversion">
//                 <div className="indicator__text">
//                   Конверсия в заказ
//                   <span className="indicator__text_red"> 67%</span>
//                 </div>
//                 <progress
//                   className="indicator__progress indicator__progress_red"
//                   max={100}
//                   value={60}
//                 ></progress>
//               </div>
//             </div>
//           </div>
//           <div className="header__right">
//             <div className="search">
//               <img src={ search}  alt="search"/>
//             </div>
//             <div className="user">
//               <div className="client">
//                 <div className="client__name">{state.name}</div>
//                 <div className="client__more">
//                   <More />
//                 </div>
//               </div>
//               <div className="avatar">
//                 <img className="avatar__img" src={state.avatar} />
//                 <div className="avatar__more">
//                   <More />
//                 </div>
//                 <div className="profile">
//                   <div className="profile__data">
//                     <div className="nameAndOut">
//                       <div className="name">Упоров Кирилл</div>
//                       <NavLink to="/signout" className="out">
//                         <OutSVG />
//                       </NavLink>
//                     </div>
//                     <div className="jobAndlocation">
//                       <div className="job">Директор</div>
//                       <div className="point"></div>
//                       <div className="location">Санкт-Петербург</div>
//                     </div>
//                     <div className="phone">
//                       <CallsSVG />
//                       <div className="number">8 (800) 333-17-21</div>
//                     </div>
//                     <div className="email">
//                       <MailSVG />
//                       <div className="mail">hi@skilla.ru</div>
//                     </div>
//                   </div>
//                   <div className="profile__article">
//                     <div className="profile__title">Операторы</div>
//                     <div className="profile__item">
//                       <img src={state.avatar} />
//                       <div className="profile__item_name">Мирон Батонов</div>
//                       <OpenPageSVG />
//                     </div>
//                     <div className="profile__item">
//                       <img src={state.avatar} />
//                       <div className="profile__item_name">Алексей Ильин</div>
//                       <OpenPageSVG />
//                     </div>
//                     <div className="profile__item">
//                       <img src={state.avatar} />
//                       <div className="profile__item_name">
//                         Милана Константинопольская
//                       </div>
//                       <OpenPageSVG />
//                     </div>
//                   </div>
//                   <div className="profile__article">
//                     <div className="profile__title">Логисты</div>
//                     <div className="profile__item">
//                       <img src={state.avatar} />
//                       <div className="profile__item_name">Александра Сизых</div>
//                       <OpenPageSVG />
//                     </div>
//                     <div className="profile__item">
//                       <img src={state.avatar} />
//                       <div className="profile__item_name">Илья Алексеев</div>
//                       <OpenPageSVG />
//                     </div>
//                     <div className="profile__item">
//                       <img src={state.avatar} />
//                       <div className="profile__item_name">Владимир Петров</div>
//                       <OpenPageSVG />
//                     </div>
//                   </div>
//                   <div className="profile__article">
//                     <div className="profile__title">Бухгалтеры</div>
//                     <div className="profile__item">
//                       <img src={state.avatar} />
//                       <div className="profile__item_name">Полина Калинина</div>
//                       <OpenPageSVG />
//                     </div>
//                     <div className="profile__item">
//                       <img src={state.avatar} />
//                       <div className="profile__item_name">
//                         Наталья Натальева
//                       </div>
//                       <OpenPageSVG />
//                     </div>
//                     <div className="profile__item">
//                       <img src={state.avatar} />
//                       <div className="profile__item_name">
//                         Константин Константинопольский
//                       </div>
//                       <OpenPageSVG />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </HeaderStyled>
//   );
// };