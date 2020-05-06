import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map((
        //destructuring here helps avoid refering section dot everytime
        { id, ...otherSectionProps }
      ) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

//above is same as below. As key and value are same we are use es6 destructuring to pass around.
// As id has a different key, we need to pass it separately.
// return (
//   <div className="directory-menu">
//     {this.state.sections.map((
//       //destructuring here helps avoid refering section dot everytime
//       { title, imageUrl, id, size, linkUrl }
//     ) => (
//       <MenuItem
//         key={id}
//         title={title}
//         imageUrl={imageUrl}
//         size={size}
//         linkUrl={linkUrl}
//       />
//     ))}
//   </div>
// );

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
