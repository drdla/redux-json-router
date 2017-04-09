import { PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadRoute } from '../helpers/loadRoute';

const Router = ({ routes, router }) => loadRoute(routes, router.history[router.index]);

Router.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    load: PropTypes.func.isRequired,
    before: PropTypes.array,
    after: PropTypes.array,
    children: PropTypes.array,
  })).isRequired,
  router: PropTypes.shape({
    history: PropTypes.arrayOf(PropTypes.string).isRequired,
    index: PropTypes.number.isRequired,
  }),
};

const mapStateToProps = ({ router }) => ({ router });

const RouterContainer = connect(mapStateToProps)(Router);

export { RouterContainer };