import PropTypes from 'prop-types';
import ContactListItem from '../ContactList/contactlistitem';
import css from '../ContactList/contactlist.module.css'

const ContactList = ({ contacts, onClick }) => (
  <ul className={css.contactlist_ul}>
    {contacts.map(({ name, number, id }) => {
      return (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          id={id}
          onClick={() => onClick(id)}
        />
      );
    })}
  </ul>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    })
  ),
};