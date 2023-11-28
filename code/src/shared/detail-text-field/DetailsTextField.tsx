import "./DetailsTextField.scss"

type DetailFieldProps = {
  label?: string | JSX.Element;
  value?: any;
  renderType?: "DATE" | "DATE" | "MONEY" | "BOOLEAN" | "PERCENTAGE" | "DAY" | "ITEMS" | "CHIP_ITEMS";
  className?: string;
  children?: React.ReactNode;
};

const formatCurrency = (value?: number, IsWrapNegativeWithBracket = true) => {
  if (value == null)
    return "";

  const nf = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  let formattedValue = nf.format(value);

  if (value < 0 && IsWrapNegativeWithBracket) {
    formattedValue = `(${nf.format(Math.abs(value))})`;
  }

  return formattedValue;
}

const DetailItem = ({
  label,
  value,
  renderType,
  className,
  children
}: DetailFieldProps) => {

  let content = null;

  const ItemLabel = () => <>{label}</>;

  if (!renderType) {
    content = ((value ?? "") !== "") ? value : "...";
  } else {
    switch (renderType) {
      case "money":
        content = ((value ?? "") !== "") ? formatCurrency(parseFloat(value.toString())) : "...";
        break;
      case "boolean":
        content = (value ?? false) ? "Yes" : "No";
        // content = value == null ? "..." : (value === true) ? "Yes" : "No";
        break;
      case "percentage":
        content = ((value ?? "") !== "") ? `${value}%` : "...";
        break;
      case "day":
        content = ((value ?? "") !== "") ? `${value} ${parseInt(value.toString()) > 1 ? "Days" : "Day"}` : "...";
        break;
      case "items":
        content =
          ((value as string[]).length > 0)
            ? (value as string[]).map((valueItem, index) => (
              <div key={index}>
                {valueItem.length ? value : "..."}
              </div>
            ))
            : "...";

        break;
      case "chipItems":
        content = ((value as string[]).length > 0)
          ? (value as string[]).map((valueItem, index) => {
            if (valueItem.length > 0) {
              return (
                <div
                  key={index}
                  className="mgr-sm mb-1 mt-1 float-left"
                >
                  {/* <Chip className='fs-14 default-font-family' size='small' label={valueItem} style={{ marginBottom: '0px' }} /> */}
                </div>
              );
            } else {
              return "...";
            }
          })
          : "...";

        break;
      default:
        content = (value ?? "") ?? "...";
        break;
    }
  }
  return (
    <div className={`${className} detail-item`}>
      <div className="detail-item-label"><ItemLabel /></div>

      <div className="detail-item-value">
        {
          (value !== undefined && !children) &&
          <>
            {content}
          </>
        }
        {
          children &&
          <>
            {children}
          </>
        }
      </div>


    </div>
  );
};

export default DetailItem;