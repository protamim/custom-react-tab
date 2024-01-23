import PropTypes from "prop-types";

const TabContent = ({ activeTab, id, children }) => {
  return activeTab === id && children;
};
TabContent.propTypes = {
  activeTab: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default TabContent;
