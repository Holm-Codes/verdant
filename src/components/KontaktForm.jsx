import styles from './KontaktForm.module.css';

const ContactForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.contactFormContainer}>
      <div className={styles.contactTextContainer}>
        <h2 className={styles.contactFormTitle}>KONTAKT OS NU</h2>
        <p className={styles.contactFormDescription}>
          Kontakt os nu og lad os hjælpe dig med at skabe en bæredygtig hjemmeside, der styrker din forretning.
        </p>
      </div>

      <div className={styles.formWrapper}>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="fuldeNavn" className={styles.formLabel}>
              Fulde navn:
            </label>
            <input
              type="text"
              id="fuldeNavn"
              name="fuldeNavn"
              className={styles.formInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="firmaNavn" className={styles.formLabel}>
              Firma navn:
            </label>
            <input
              type="text"
              id="firmaNavn"
              name="firmaNavn"
              className={styles.formInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="besked" className={styles.formLabel}>
              Kort om hvad vi kan hjælpe med:
            </label>
            <textarea
              id="besked"
              name="besked"
              className={styles.formTextarea}
            ></textarea>
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.formCheckboxLabel}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className={styles.formCheckboxInput}
              />
              Jeg accepterer Vertant's vilkår og betingelser. Jeg er klar over, at min kontaktinformation vil blive brugt til at kontakte mig om mit forespørgsel.
            </label>
          </div>
          <button type="submit" className={styles.formSubmitButton}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default KontaktForm;