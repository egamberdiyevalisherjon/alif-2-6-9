import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function Link({
  link = "https://google.com",
  blank = false,
  className = "special",
  children,
  loginUser,
  ...rest
}) {
  loginUser({ name: "", age: 123 });

  return (
    <a
      href={link}
      className={className}
      target={blank ? "_blank" : "_self"}
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </a>
  );
}

// class Link extends React.Component {
//   render() {
//     return (
//       <a
//         href={this.props.link}
//         className={this.props.className}
//         target={this.props.blank ? "_blank" : "_self"}
//         rel="noopener noreferrer"
//       >
//         {this.props.children}
//       </a>
//     );
//   }
// }

// Link.defaultProps = {
//   link: "https://google.com",
//   blank: false,
//   className: "special",
// };

Link.propTypes = {
  link: PropTypes.string.isRequired,
  blank: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  obj: PropTypes.object,
  arr: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    theme: state.general.setting.theme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (data) => dispatch({ type: "USER_LOGIN", payload: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Link);
