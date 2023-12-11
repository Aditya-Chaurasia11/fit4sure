import React, { useState } from "react";
import "./tab.css"; // Import your CSS file

function VerticalTabs() {
  const [selectedTab, setSelectedTab] = useState(1);

  const tabData = [
    {
      id: 1,
      label: "Yearly plan",
      content: "Lorem ipsum dolor sit amet, consectetur.",
    },
    { id: 2, label: "8 months plan", content: "Content for Tab 2" },
    { id: 3, label: "6 months plan", content: "Content for Tab 3" },
    { id: 4, label: "3 months plan", content: "Content for Tab 3" },
    { id: 5, label: "2 months plan", content: "Content for Tab 3" },
    { id: 6, label: "Monthly", content: "Content for Tab 3" },
  ];

  const handleTabClick = (id) => {
    setSelectedTab(id);
  };

  return (
    <div className="vertical-tabs">
      <div className="tab-list">
        {tabData.map((tab) => (
          <div
            key={tab.id}
            className={`tab ${selectedTab === tab.id ? "active" : ""}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {selectedTab === tab.id ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" fill="black" />
                <path
                  d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="9.5" stroke="#2C6D8B" />
              </svg>
            )}
            {tab.label}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabData.map((tab) => (
          <div
            key={tab.id}
            className={`tab-pane ${
              selectedTab === tab.id ? "plane_active" : ""
            }`}
          >
            <div className="tab-pane_header">
              <h4>Key features</h4>
              <p>Recommended</p>
            </div>
            {tab.content}
            {tab.content}
            {tab.content}
            {tab.content}
            {tab.content}
            {tab.content}
            {tab.content}
            {tab.content}
            {tab.content}
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default VerticalTabs;
