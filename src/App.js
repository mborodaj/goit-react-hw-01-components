import { useLayoutEffect } from "react";
import "./App.css";
import SocialProfile from "./Components/Social-profile/Social-profile";
import userProfile from "./Components/Social-profile/user.json";
import StatisticalData from "./Components/Statistical-data/Statistical-data";
import statsData from "./Components/Statistical-data/Statistical-data.json";

const App = () => {
  return (
    <div>
      <div class="social-profile">
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

      <div class="statistical-data">
        <StatisticalData title="Upload stats">
          <ul class="stat-list">
            {statsData.map((item) => {
              return (
                <li class="item" key={item.id}>
                  <span class="label">{item.label}</span>
                  <span class="percentage">{item.percentage}%</span>
                </li>
              );
            })}
          </ul>
        </StatisticalData>
      </div>


      
    </div>
  );
};

export default App;
