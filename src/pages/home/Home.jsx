import React from "react";
import Chart from "../../components/chart/Chart";
import FeatureInfo from "../../components/featureInfo/FeatureInfo";
import "./home.css";
import { userData } from "../../dummyData";
function Home() {
  return (
    <div className="home">
      <FeatureInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      
    </div>
  );
}

export default Home;
