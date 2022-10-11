import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { variants } from 'utils/motionVar';
import { ReactComponent as AddContact } from 'img/icons/contact.svg';
import DeletingContact from 'components/DeleteContact';
import styles from './ContactItem.module.scss';

const ContactItem = ({ id, name, number, deleteBtn }) => {
  return (
    <motion.li
      className={styles.item}
      initial="initial"
      animate="animate"
      exit="exit"
      transition="transition"
      variants={variants}
    >
      <AddContact width="40" height="40" fill="#222024a1" />
      <p className={styles.info}>
        <b>{name}</b>
        <em>{number}</em>
      </p>
      <DeletingContact id={id} name={name} />
    </motion.li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteBtn: PropTypes.func.isRequired,
};

export default ContactItem;
