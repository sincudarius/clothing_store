import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { createStructuredSelector } from "reselect";

import { selectShopCollections } from "../../redux/shop/shop.selectors";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => {
  return (
    <div className="shoppage">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(ShopPage);
