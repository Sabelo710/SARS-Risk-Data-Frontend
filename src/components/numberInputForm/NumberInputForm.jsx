import { useForm } from "react-hook-form";

import "./css/numberInputForm.css";

const NumberInputForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="number-input-form">
      <div className="form-group">
        <label className="form-label" htmlFor="numbers">
          Enter comma-separated numbers:
        </label>
        <input
          className="form-input"
          id="numbers"
          {...register("numbers", {
            required: "This field is required",
            validate: (value) => {
              const numbers = value.split(",");
              return (
                numbers.every((num) => !isNaN(parseFloat(num.trim()))) ||
                "Enter numberic values only"
              );
            },
          })}
          placeholder="e.g. 3, 1.5, -2, 4"
        />
        {errors.numbers && <p className="error">{errors.numbers.message}</p>}
      </div>
      <button type="submit" className="submit-button">
        Sort Numbers
      </button>
    </form>
  );
};

export default NumberInputForm;
