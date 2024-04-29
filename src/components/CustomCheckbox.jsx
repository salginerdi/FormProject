import { useField } from "formik";

// eslint-disable-next-line react/prop-types
const CustomCheckbox = ({...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
     <div className="checkbox">
      <input
        {...field}
        {...props}
        className={meta.error ? "input-error" : ""}
      />
      <span>&nbsp;Kullanım koşullarını kabul ediyorum</span>
     </div>

      {meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};

export default CustomCheckbox;
