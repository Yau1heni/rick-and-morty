import styles from './empty-card-list.module.css'

export const EmptyCardList = () => {
  return (
    <div className={styles.emptyCardList}>
      Such characters don't exist...
    </div>
  );
};
