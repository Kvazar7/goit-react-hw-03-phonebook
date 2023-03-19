import PropTypes from 'prop-types';
import css from '../Filter/filter.module.css'

const Filter = ({ value, onChange }) => (
  <label htmlFor="" className={css.filter_label}>
    Find contacts by Name:
    <input type="text" value={value} onChange={onChange} className={css.filter_label__input} />
  </label>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};