import PropTypes from "prop-types";

const TabNavList = ({ activeTab, setActiveTab, id, children }) => {
  const handleTabList = () => {
    setActiveTab(id);
  };
  
  return (
    <>
      <li
        onClick={handleTabList}
        className={`${activeTab === id && "activeTab"}`}
      >
        {children}
      </li>
    </>
  );
};
TabNavList.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default TabNavList;
