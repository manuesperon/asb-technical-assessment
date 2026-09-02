import React, { FC, useState } from "react";
import * as styles from "./CardRegistrationForm.module.scss";
import classNames from "classnames";

interface CardDetails {
  cardNumber: string;
  cvc: string;
  expiry: string;
}

interface CardRegistrationFormProps {
  onSubmit: (values: CardDetails) => void;
}

export const CardRegistrationForm: FC<CardRegistrationFormProps> = ({
  onSubmit,
}) => {
  const [values, setValues] = useState<CardDetails>({
    cardNumber: "",
    cvc: "",
    expiry: "",
  });

  const handleChange =
    (field: keyof CardDetails) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [field]: e.target.value });
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form className={styles.cardRegistrationForm} onSubmit={handleSubmit}>
      <div className={classNames(styles.field, styles.ccNumberField)}>
        <label htmlFor="cardNumber">Credit card number</label>
        <input
          id="cardNumber"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          autoComplete="cc-number"
          maxLength={19}
          value={values.cardNumber}
          onChange={handleChange("cardNumber")}
        />
      </div>

      <div className={styles.cvcExpireFieldsContainer}>
        <div className={styles.field}>
          <label htmlFor="cvc">CVC</label>
          <input
            id="cvc"
            name="cvc"
            type="text"
            inputMode="numeric"
            autoComplete="cc-csc"
            maxLength={4}
            value={values.cvc}
            onChange={handleChange("cvc")}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="expiry">Expiry</label>
          <input
            id="expiry"
            name="expiry"
            type="text"
            inputMode="numeric"
            autoComplete="cc-exp"
            placeholder="MM/YY"
            value={values.expiry}
            onChange={handleChange("expiry")}
          />
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
