import PropTypes from "prop-types";

const StyledButton = ({ children, maxWidth, isOutline }) => {
  return (
    <>
      {isOutline ? (
        <button
          className="p-2 border border-primary text-tprimary w-full h-full rounded-md min-w-[70px] hover:bg-primary font-semibold transition-all duration-200"
          style={{ maxWidth: maxWidth }}
        >
          {children}
        </button>
      ) : (
        <button
          className="p-2 bg-primary text-tprimary w-full h-full rounded-md min-w-[70px] hover:bg-primary/80 font-semibold transition-all duration-200"
          style={{ maxWidth: maxWidth }}
        >
          {children}
        </button>
      )}
    </>
  );
};

StyledButton.propTypes = {
  maxWidth: PropTypes.string,
  isOutline: PropTypes.bool,
  children: PropTypes.node,
};

export default StyledButton;
