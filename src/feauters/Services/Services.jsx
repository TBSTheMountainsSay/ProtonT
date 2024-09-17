import React from 'react';
import styles from './Services.module.scss';
import Title from '../../components/Title/Title';
import Text from '../../components/Text/Text';
import photo1 from '../../images/1.jpg';
import photo2 from '../../images/2.jpg';
import photo3 from '../../images/3.jpg';
import photo4 from '../../images/4.jpg';
import photo5 from '../../images/5.jpg';
import photo6 from '../../images/6.jpg';
import CustomImage from '../../components/CustomImage/CustomImage';

const Services = ({}) => {
  return (
      <div className={styles.services}>
          <Title title={'Услуги'}/>
          <Text
              text={
                  'Наша команда предлагает услуги по высокоточному измерению магнитного поля вашего магнитного томографа, а так же методы по прецизионной настойки его однородности.'
              }
          />
          <Title title={'Пример результата измерений'}/>
          <img src={photo1} className={`${styles.photo} ${styles.photo1}`}/>
          <Text
              text={
                  'Измерение отклонение резонансной частоты от нулевой в рабочей области томографа по оси Z.'
              }
          />
          <img src={photo2} className={`${styles.photo} ${styles.photo1}`}/>
          <Text
              text={
                  'Измерение отклонение резонансной частоты от нулевой в рабочей области томографа по оси X.'
              }
          />
          <img src={photo3} className={`${styles.photo} ${styles.photo1}`}/>
          <Text
              text={
                  'Измерение отклонение резонансной частоты от нулевой в рабочей области томографа по оси Y.'
              }
          />
          <img src={photo4} className={`${styles.photo} ${styles.photo1}`}/>
          <Text
              text={
                  'Измерение отклонение резонансной частоты от нулевой в рабочей области томографа в краевых точках по окружности радиуса 50мм, отступая от центра на 40мм влево (R = 50 мм, Z = -40 мм).'
              }
          />
          <img src={photo5} className={`${styles.photo} ${styles.photo1}`}/>
          <Text
              text={
                  'Измерение отклонение резонансной частоты от нулевой в рабочей области томографа в краевых точках по окружности радиуса 50мм по центру (R = 50 мм, Z = 0 мм).'
              }
          />
          <img src={photo6} className={`${styles.photo} ${styles.photo1}`}/>
          <Text
              text={
                  'Измерение отклонение резонансной частоты от нулевой в рабочей области томографа в краевых точках по окружности радиуса 50мм, отступая от центра на 40мм вправо (R = 50 мм, Z = 40 мм).'
              }
          />
          <Text
              text={
                  'В основе метода лежит эффект ядерного магнитного резонанса (ЯМР). Частота, при которой возникает данный эффект, зависит от величины магнитного поля прямо пропорционально. Это позволяет определить величину магнитного поля с точностью до 25млТ, используя оцифровку сигнала, с последующим Фурье-преобразованием. Само измерение магнитного поля представляет собой последовательное расположение по трем осям томографа ЯМР-датчика в разных зонах томографа для формирования карты распределения магнитного поля.'
              }
          />
      </div>
  );
};

export default Services;
