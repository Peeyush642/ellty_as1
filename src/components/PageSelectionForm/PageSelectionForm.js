import React, { useState } from "react";
import styles from "./PageSelectionForm.module.css";
// import tick from "./assets/tick.svg";

const PageSelectionForm = ({ totalPages }) => {
  const [checkedPages, setCheckedPages] = useState([]);
  const [allChecked, setAllChecked] = useState(false);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleCheckboxChange = (page) => {
    setCheckedPages((prev) =>
      prev.includes(page) ? prev.filter((p) => p !== page) : [...prev, page]
    );
  };

  const handleAllCheckboxChange = () => {
    setAllChecked(!allChecked);
    setCheckedPages(!allChecked ? pages : []);
  };

  return (
    <div className={styles.pageSelectionForm}>
      <label className={styles.allPagesSelector} htmlFor="allPagesSelector">
        All pages
        <input
          className={`${styles.checkBoxInput} ${allChecked && styles.checked}`}
          type="checkbox"
          id="allPagesSelector"
          checked={allChecked}
          onChange={handleAllCheckboxChange}
        />
      </label>
      <hr className={styles.hr} />
      <div className={styles.pageSelectorContainer}>
        {pages.map((page) => (
          <label
            key={page}
            htmlFor={`pageSelector${page}`}
            className={styles.pageSelector}
          >
            Page {page}
            <input
              className={`${styles.checkBoxInput} ${
                checkedPages.includes(page) && styles.checked
              }`}
              type="checkbox"
              id={`pageSelector${page}`}
              checked={checkedPages.includes(page)}
              onChange={() => handleCheckboxChange(page)}
            />
          </label>
        ))}
      </div>
      <hr className={styles.hr} />
      <div className={styles.submitButtonContainer}>
        <button className={styles.submitButton}>Done</button>
      </div>
    </div>
  );
};

export default PageSelectionForm;
