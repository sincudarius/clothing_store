import React from "react";
import { connect } from "react-redux";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";

const CollectionOverview = ({ collections }) => {
  return collections?.map(({ id, ...otherColectionProps }) => (
    <CollectionPreview key={id} {...otherColectionProps} />
  ));
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
