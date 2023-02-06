import React, { SetStateAction, useCallback } from "react";


export function Tabs(props) {
  const { activeTab, options } = props;
  const {tabIndex, setTabIndex } =activeTab
  
  const handleChangeTab = useCallback((id) => {
    setTabIndex(id)
    console.log(tabIndex)
  },[activeTab])

  return (
    <div>
      {options.map((item, index) => (
        <React.Fragment key={item.id}>
          <button onClick={() => handleChangeTab(index)}> {item.label}</button>
        </React.Fragment>
      ))}
    </div>
  );
}
