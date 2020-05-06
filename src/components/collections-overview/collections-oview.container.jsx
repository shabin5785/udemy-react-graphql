import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsSelectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-oview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsSelectionFetching
});

const CollectionsContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

// const CollectionsContainer = connect(mapStateToProps)(
//   WithSpinner(CollectionsOverview)
// );

export default CollectionsContainer;
