import PropTypes from 'prop-types';
import css from '../ContactList/contactlistitem.module.css'

const ContactListItem = ( {name, number , onClick }) => {
  return (
    <li className={css.contactlistitem}>
      {name}: {number} <button type="button" onClick={onClick} className={css.contactlistitem_button}>Delete</button>
    </li>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClick: PropTypes.func
}