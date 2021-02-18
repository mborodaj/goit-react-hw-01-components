import "./App.css";
import SocialProfile from "./Components/Social-profile/Social-profile";
import userProfile from "./Components/Social-profile/user.json";
import StatisticalData from "./Components/Statistical-data/Statistical-data";
import statsData from "./Components/Statistical-data/Statistical-data.json";
import FriendsList from "./Components/Friend-list/Friend-list";
import friends from "./Components/Friend-list/Friend-list.json";
import TransactionHistory from "./Components/Transaction-history/Transaction-history";
import transactions from "./Components/Transaction-history/transactions.json";

const App = () => {
  return (
    <>
      <div className="social-profile">
        <SocialProfile
          name={userProfile.name}
          url={userProfile.avatar}
          tag={userProfile.tag}
          location={userProfile.location}
          followers={userProfile.stats.followers}
          views={userProfile.stats.views}
          likes={userProfile.stats.likes}
        />
      </div>

      <div className="statistical-data">
        <StatisticalData title="Upload stats">
          <ul className="stat-list">
            {statsData.map((item) => {
              return (
                <li className="item" key={item.id}>
                  <span className="label">{item.label}</span>
                  <span className="percentage">{item.percentage}%</span>
                </li>
              );
            })}
          </ul>
        </StatisticalData>
      </div>

      <div className="friends-list">
        <FriendsList>
          <ul className="friend-list">
            {friends.map((friend) => {
              return (
                <li className="item" key={friend.id}>
                  <span className="status">{friend.isOnline}</span>
                  <img
                    className="avatar"
                    src={friend.avatar}
                    alt=""
                    width="48"
                  />
                  <p className="name">{friend.name}</p>
                </li>
              );
            })}
          </ul>
        </FriendsList>
      </div>

      <div className="transaction-history">
        <TransactionHistory>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.type}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.currency}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionHistory>
      </div>
    </>
  );
};

export default App;
