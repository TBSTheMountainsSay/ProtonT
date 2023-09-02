import React from 'react';
import styles from './Contacts.module.scss';
import Contact from '../../components/Contact/Contact';
import Title from '../../components/Title/Title';

const Contacts = ({}) => {
  return (
    <div className={styles.contacts}>
      <Title title={'Контакты'} />
      <Contact id={'email'} text={'Email'} mainText={'akolesova0707@mail.ru'} />
      <Contact id={'phone'} text={'Телефон'} mainText={'8-918-531-49-33'} />
      {/*<Contact*/}
      {/*  id={'photo'}*/}
      {/*  text={'Юридический адрес организации'}*/}
      {/*  mainText={'г. Казань, ул. Дубравная, д. 49, кв. 226'}*/}
      {/*/>*/}
    </div>
  );
};

export default Contacts;
