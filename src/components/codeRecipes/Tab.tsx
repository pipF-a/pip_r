'use client'

import Styles from '@/components/codeRecipes/Tab.module.scss'
import { useState } from 'react';

export const Tab = () => {
  const [checkboxes, setCheckboxes] = useState({
    typeA: true,
    typeB: false,
  });

  const handleCheckboxChange = (id) => (event) => {
    setCheckboxes((prevCheckboxes) => {
      const newCheckboxes = { ...prevCheckboxes, [id]: event.target.checked };

      if (id === 'typeA' && event.target.checked) {
        newCheckboxes.typeB = false;
      } else if (id === 'typeB' && event.target.checked) {
        newCheckboxes.typeA = false;
      }

      return newCheckboxes;
    });
  };

  return (
    <>
      <div className='mr-auto'>
        <input
          type="radio"
          id="typeA"
          checked={checkboxes.typeA}
          onChange={handleCheckboxChange('typeA')}
          className={Styles.tabCheck}
          name='tab_item'
        />
        <label htmlFor="typeA" className={Styles.tabLabel}>A</label>

        <input
          type="radio"
          id="typeB"
          checked={checkboxes.typeB}
          onChange={handleCheckboxChange('typeB')}
          className={Styles.tabCheck}
          name='tab_item'
        />
        <label htmlFor="typeB" className={Styles.tabLabel}>B</label>
      </div>
      <div className={Styles.tabContent} id="typeA_content" style={{ display: checkboxes.typeA ? 'block' : 'none' }}>
        <div className={Styles.tabHead}>
          <p className="">たいぷえー</p>
        </div>
      </div>
      <div className={Styles.tabContent} id="typeB_content" style={{ display: checkboxes.typeB ? 'block' : 'none' }}>
        <div className={Styles.tabHead}>
          <p className="">たいぷびー</p>
        </div>
      </div>
    </>
  );
};