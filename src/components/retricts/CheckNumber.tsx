type ValueProps = {
  value: number;
};

type PositiveNumberType = ValueProps & {
  //* We Can restrict other props to pass when value in positive
  isPositive?: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeNumberType = ValueProps & {
  //* We Can restrict other props to pass when value in negative
  isNegative?: boolean;
  isPositive?: never;
  isZero?: never;
};
type ZeroNumberType = ValueProps & {
  //* We Can restrict other props to pass when value in zero
  isZero?: boolean;
  isPositive?: never;
  isNegative?: never;
};

type NumberType = PositiveNumberType | NegativeNumberType | ZeroNumberType;

const CheckNumber = ({ value, isPositive, isNegative, isZero }: NumberType) => {
  return (
    <div>
      Value: {value}
      {isPositive && "positive"}
      {isNegative && "negative"}
      {isZero && "zero"}
    </div>
  );
};

export default CheckNumber;
