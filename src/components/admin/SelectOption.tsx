export const SelectOption = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <option value={value} className="bg-light-gray">
    {label}
  </option>
);
