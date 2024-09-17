import React from 'react';
import styles from './Contacts.module.scss';
import Contact from '../../components/Contact/Contact';
import Title from '../../components/Title/Title';

const Contacts = ({}) => {
  return (
    <div className={styles.contacts}>
      <Title title={'Контакты'} />
      <Contact id={'email'} text={'Email'} mainText={'relifer2000@mail.ru'} />
      <Contact id={'phone'} text={'Телефон'} mainText={'8-912-017-11-77 '} />
    </div>
  );
};

export default Contacts;
