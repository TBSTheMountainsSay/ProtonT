import React from 'react';
import styles from './Services.module.scss';
import Title from '../../components/Title/Title';
import Text from '../../components/Text/Text';
import photo1 from '../../images/photo1.jpg';
import graph from '../../images/graph.jpg';
import photo21 from '../../images/photo2-1.jpg';
import photo22 from '../../images/photo2-2.jpg';
import photo23 from '../../images/photo2-3.jpg';
import photo24 from '../../images/photo2-4.jpg';
import CustomImage from '../../components/CustomImage/CustomImage';

const Services = ({}) => {
  return (
    <div className={styles.services}>
      <Title title={'Услуги'} />
      <Text
        text={
          'Наша команда предлагает новые импульсные программы и методики обработки данных, услуги проведения МРТ кисти, голеностопа, локтевого и коленного суставов.'
        }
      />
      <Title title={'Последовательность Multi-Echo '} />
      <Text
        text={
          'Последовательность Multi-Echo - методика среднеполевой магнитно-резонансной томографии для повышения чувствительности диагностики. Методика основана на базе последовательности типа Карра-Парселла и Мейбума-Гилла. Она позволяет получить полный релаксационный спад по Т2 в одном цикле измерения. При этом регистрируется сигнал спинового эха несколько раз за один запуск. Количество эхо выбирается оператором МР-томографа. В итоге формируется изображение по каждому сигналу. '
        }
      />
      <img src={photo1} className={`${styles.photo} ${styles.photo1}`} />
      <Text
        text={
          'Изображения фантома, полученные при помощи разработанной последовательности на магнитно-резонансном томографе с индукцией магнитного поля 0.4 Тл. Цифрами на рисунке обозначены порядковые номера эха в одном цикле последовательности.'
        }
      />
      <Title title={'Последовательность Spin-Echo-Restore (SER)'} />
      <Text
        text={
          'Последовательность Spin-Echo-Restore (SER) – методика среднеполевой магнитно-резонансной томографии для уменьшения времени обследования. Методика основана на базе последовательности типа Ксаки-Бене. Она позволяет ускорить восстановление вектора макроскопической намагниченности вдоль оси постоянного магнитного поля за счет добавления специальных радиочастотных импульсов после проведения процедуры записи сигнала. Таким образом, мы можем уменьшить время перезапуска последовательности (TR) без потери качества изображения. '
        }
      />
      <div className={styles.photos}>
        <CustomImage src={photo21} description={'SE TR 2000/ TE 20'} />
        <CustomImage src={photo22} description={'SER TR 2000/ TE 20'} />
        <CustomImage src={photo23} description={'SE TR 500/ TE 20'} />
        <CustomImage src={photo24} description={'SER TR 500/ TE 20'} />
      </div>
      <Text text={'Сравнение амплитуд SE и SER с разным TR:'} />
      <img src={graph} className={`${styles.photo} ${styles.photo2}`} />
      <Text
        text={
          'Используя данную последовательность, для получения необходимой интенсивности, можно затрачивать меньшее время, тем самым сокращая время исследования пациента.'
        }
      />
    </div>
  );
};

export default Services;
