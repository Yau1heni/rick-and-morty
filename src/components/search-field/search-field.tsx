import {ChangeEvent, FC, useEffect, useRef} from "react";
import {getSignature} from "@/utils";
import styles from "./search-field.module.css";
import {useDebounce} from "@/hooks";

type SearchFieldProps = {
  value: string
  onChange: (value: string) => void;
  isLoading: boolean;
  quantity?: number;
}

export const SearchField: FC<SearchFieldProps> = (props) => {
  const {onChange, value, isLoading,  quantity = 0} = props
  const inputRef = useRef<HTMLInputElement>(null)
  const debouncedValue = useDebounce(value)
  const signature = getSignature(quantity, debouncedValue)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, []);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value)
  }

  return (
    <div className={styles.searchField}>
      <input placeholder={'Search characters...'}
             type="text"
             value={value}
             className={styles.input}
             onChange={onChangeHandler}
             ref={inputRef}/>
      {!isLoading && debouncedValue.length !== 0 && <span className={styles.bottomSignature}>{signature}</span>}
    </div>
  );
};
