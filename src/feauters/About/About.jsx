import React from 'react';
import styles from './About.module.scss';
import Text from '../../components/Text/Text';
import Title from '../../components/Title/Title';
import img1 from '../../images/fic.jpg';
import img2 from '../../images/KSU.png';
import innovac from '../../images/innovacNEW.png';

const About = ({}) => {
  return (
      <div className={styles.about}>
          <Title title={'О нас'}/>
          <Text
              text={
                  'Исламов Т.Р. магистр физических наук кафедры медицинской физики, института физики КФУ.'
              }
          />
          <Text
              text={
                  'Колесова А.Ю. инженер-программист, бакалавр физических наук кафедры медицинской физики.'
              }
          />
          <Text
              text={
                  'Наша команда работает в сотрудничестве с ФИЦ КазНЦ РАН и ИФ КФУ:'
              }
          />
          <div className={styles.wrapper}>
              <img src={img1} className={styles.img}/>
              <img src={img2} className={styles.img}/>0
          </div>
          <Text
              text={
                  'Работа выполнена при поддержке гранта Фонда содействия инновациям, представленного в рамках программы "Студенческий стартап" федерального проекта "Платформа университетского технологического предпринимательства".'
              }
          />
          <a className={styles.href} target="_blank" href="https://fasie.ru/programs/programma-studstartup/">Программа Студенческий стартап</a>
          <img src={innovac} className={styles.footerImg}/>
      </div>
  );
};

export default About;
