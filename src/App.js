import baseCss from './base.module.css';
import SocialProfile from './Components/Social-profile/Social-profile';
import userProfile from './Components/Social-profile/user.json';
import StatisticalData from './Components/Statistical-data/Statistical-data';
import statsData from './Components/Statistical-data/Statistical-data.json';
import FriendsList from './Components/Friend-list/Friend-list';
import friends from './Components/Friend-list/Friend-list.json';
import TransactionHistory from './Components/Transaction-history/Transaction-history';
import transactions from './Components/Transaction-history/transactions.json';

const App = () => {
  return (
    <>
      <div className="social-profile">
        <h2>Task #1 - Social profile</h2>
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
        <h2>Task #2 - Statistical Data</h2>
        <StatisticalData title="Upload stats" props={statsData} />
      </div>

      <div className="friends-list">
        <h2>Task #3 - Friends List</h2>
        <FriendsList friends={friends} />
      </div>

      <div className="transaction-history">
        <h2>Task #4 - Transaction History</h2>
        <TransactionHistory transactions={transactions} />
      </div>
    </>
  );
};

export default App;
