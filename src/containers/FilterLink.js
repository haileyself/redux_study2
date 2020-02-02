import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
//action creator : SET_VISIBLITY_FILTER 타입 리턴 
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})
//props값으로 넣어 줄 상태를 정의해줌 

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

// props 값으로 넣어줄 액션 함수들을 정의 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
// 컴포넌트를 리덕스와 연동할 때 connect를 사용 
// connect()의 결과는 컴포넌트에 props를 넣어주는 함수를 반환 
// 반환된 함수에 우리가 만든 컴포넌트를 넣어줌 
