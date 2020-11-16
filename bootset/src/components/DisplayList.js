import { connect } from 'react-redux';
import { listBasic, listTabbed } from "../references/lists";

const DisplayList = ({change, color}) => {
   switch (change){
       case null:
           return null;
       case "list":
           return listBasic(color);
       case "listTabbed":
           return listTabbed(color);
       default:
           return null;
   }
}

const mapStateToProps = state => {
    return {
        change: state.selectedListChange,
    color: state.selectedListColor
    }
};

export default connect(mapStateToProps) (DisplayList)

