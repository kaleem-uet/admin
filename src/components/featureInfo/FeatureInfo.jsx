import React from "react";
import "./featureinfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
function FeatureInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,414</span>
          <span className="featuredMoneyRate">
            -11.4
            <ArrowDownward className="featuredIcon negative " />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total user</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">30K</span>
          <span className="featuredMoneyRate">
            -1.4k <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total Register Touter</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">15K</span>
          <span className="featuredMoneyRate">
            +2.4K <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}

export default FeatureInfo;
