import { useState } from "react";
import TabNavList from "../TabNavList/TabNavList";
import TabContent from "../TabContent/TabContent";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <>
      <div className="tab-container">
        {/* Tab Nav List */}
        <ul className="tab-list">
          <TabNavList
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            id="tab1"
          >
            Tab 1
          </TabNavList>
          <TabNavList
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            id="tab2"
          >
            Tab 2
          </TabNavList>
        </ul>
        {/* Tab Content */}
        <div className="tab-content">
          {/* Tab 1 */}
          <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>
            <TabContent activeTab={activeTab} id="tab1">
              <p>
                The key prop is a unique identifier that React uses to
                efficiently manage and update elements within a list. When
                rendering a list of elements, it is crucial to assign a unique
                key to each element to help React differentiate between the
                items and perform updates more efficiently.
              </p>
              <p>
                Is emotion better than styled-components? Emotion tends to be
                more efficient in terms of performance while styled-components
                provide more unique and complex styling options. Emotions
                smaller bundle size and better rendering performance offer a
                considerable advantage, especially for larger projects.
              </p>
            </TabContent>
          </div>
          {/* Tab 2 */}
          <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>
            <TabContent activeTab={activeTab} id="tab2">
              <p>
                Styled-components is a library that allows you to write CSS in
                JS while building custom components in Reactjs. There are
                multiple options ...
              </p>
              <p>
                Styled-Components support both React and React Native. React
                Native helps you create apps with seamless user experiences.
                Using styled-components, you can create a similar-looking UI for
                both your website and app easily. Styled-Components use props
                instead of class.
              </p>
            </TabContent>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
