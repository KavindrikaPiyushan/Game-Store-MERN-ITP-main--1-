import React, { useEffect, useState} from "react";
import Header from "../src/components/header";
import useAuthCheck from "../src/utils/authCheck";
import ReviewTable from "./Review_Manager_Components/table";
import Chart from "./Review_Manager_Components/chart";



// Next UI
import { Tabs, Tab } from "@nextui-org/react";

const API_BASE_URL = "http://localhost:8098";

const Review_manager = () => {
    useAuthCheck();
  const [activeTab, setActiveTab] = useState("stats");
 

  
  return (
    <div>
        <Header/>
        <div className="flex w-full flex-col">
      <div className="relative">
      </div>
      <div className="flex items-center p-4 font-primaryRegular">
        <Tabs
          aria-label="Blogger Tabs"
          className="flex-1"
          onSelectionChange={setActiveTab}
          selectedKey={activeTab}
          size="lg"
          color="primary"
        >
          <Tab key="tab1" title="Reviews" />
          <Tab key="tab2" title="T2" />
          <Tab key="tab3" title="T3" />
          <Tab key="tab4" title="T4" />
        </Tabs>
      </div>
      <div className="p-4">
        {activeTab === "tab1" && <ReviewTable/>}
        {activeTab === "tab2" && <Chart/>}
        {activeTab === "tab3" && <div>Tab3</div>}
        {activeTab === "tab4" && <div>Tab4</div>}
      </div>
    </div>
    </div>
  );
};

export default Review_manager;
