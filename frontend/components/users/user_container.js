import { connect } from "react-redux";
import pictureIndex from "../pictures/picture_index";
import { fetchPictures, deletePicture } from "../../actions/pictures_actions";

const mapStateToProps = (state, ownProps) => {
  let currentUser = state.session.id;
  let pictures = Object.values(state.entities.pictures);
  pictures = pictures.filter(picture => {
    return picture.user_id === currentUser;
  });

  // debugger;

  return {
    pictures: pictures,
    currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPictures: () => dispatch(fetchPictures()),
    deletePicture: id => dispatch(deletePicture(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(pictureIndex);
