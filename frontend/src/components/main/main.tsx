import React, { useEffect, useState } from 'react';
import APIService from '../../services/APIService';
import { TypeAdvantages } from '../../types';

import s from './main.module.scss';

const Main: React.FC = () => {
  const [advantageItems, setAdvantageItems] = useState<TypeAdvantages[]>([]);

  useEffect(() => {
    fetchAdvantages();
  }, []);

  const fetchAdvantages = async () => {
    try {
      const response = await APIService.getAdvantages();
      setAdvantageItems(response.data);
    } catch (error) {
      console.log('Ошибка при получении контента преимуществ:', error);
    }
  };

  return (
    <main className={s.main}>
        <div className={s.trip_container}>
          <div className={s.title}>
            <p className={s.top_title}>Путешествие</p>
            <p className={s.bottom_title}>на красную планету</p>
          </div>
          <button className={s.start}>Начать путешествие</button>
        </div>
        <div className={s.advantages_container}>
          {advantageItems.map((item, index) => (
            <div key={item.id} className={`${s.advantage_item} ${s[`advantage_item_${index + 1}`]}`}>
              <span className={s.top_line}>{item.top_line}</span>
              <span className={s.center_line}>{item.center_line}</span>
              <span className={s.bottom_line}>{item.bottom_line}</span>
            </div>
          ))}
        </div>
    </main>
  );
};

export default Main;