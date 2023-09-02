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
      <Title title={'О нас'} />
      <Text
        text={
          'А.Ю. Колесова, руководитель проекта, студентка 1 курса магистратуры кафедры медицинской физики, института физики КФУ. Опыт разработки импульсных последовательностей. Программирование на С++, участие в студенческих научных конференциях. Участие в конкурсе "УМНИК" 2021 года.'
        }
      />
      <Text
        text={
          'Т.Р. Исламов, студент 2 курса магистратуры кафедры медицинской физики, института физики КФУ. Участие в научных конференциях и НИР. Программирование на С++.'
        }
      />
      <Text
        text={
          'И.Д. Сидоров, студент 2 курса магистратуры кафедры медицинской физики, института физики КФУ. Участие в научных конференциях и НИР. Программирование на С++.'
        }
      />
      <Text
        text={
          'Наша команда работает в сотрудничестве с ФИЦ КазНЦ РАН и ИФ КФУ:'
        }
      />
      <div className={styles.wrapper}>
        <img src={img1} className={styles.img} />
        <img src={img2} className={styles.img} />
      </div>
      <Text
        text={
          'Проект создан при поддержке программы Фонда Содействия Инновациям «Студенческий стартап 2022»'
        }
      />
      <img src={innovac} className={styles.footerImg} />
    </div>
  );
};

export default About;
