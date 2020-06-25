import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

export default class RepLogCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantityInputError: "",
    };
    this.quantityInput = React.createRef();
    this.itemSelect = React.createRef();
    this.itemOptions = [
      { id: "camera", text: "Camera" },
      { id: "phone", text: "Phone" },
      { id: "Laptop", text: "Laptop" },
    ];
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const { onAddRepLog } = this.props;
    const quantityInput = this.quantityInput.current;
    const itemSelect = this.itemSelect.current;
    //console.log(e.target.elements.namedItem('reps').value);
    console.log(
      itemSelect.options[itemSelect.selectedIndex].value,
      quantityInput.value
    );
    if (quantityInput.value <= 0) {
      this.setState({
        quantityInputError: "Please enter a value greater than 0",
      });
      return;
    }
    onAddRepLog(
      itemSelect.options[itemSelect.selectedIndex].text,
      quantityInput.value
    );
    quantityInput.value = "";
    itemSelect.selectedIndex = 0;
    this.setState({
      quantityInputError: "",
    });
  }

  render() {
    const { quantityInputError } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-group">
          <label className="control-label required">What did you lift?</label>
          <select
            ref={this.itemSelect}
            className="form-control"
            required="required"
          >
            <option value="" selected="selected">
              What did you lift?
            </option>
            {this.itemOptions.map((option) => {
              return (
                <option value={option.id} key={option.id}>
                  {option.text}
                </option>
              );
            })}
          </select>
        </div>
        <div className={`form-group ${quantityInputError ? "has-error" : ""}`}>
          <label className="control-label required">How many times?</label>
          <input
            type="number"
            id="rep_log_reps"
            ref={this.quantityInput}
            className="form-control"
            required="required"
            placeholder="How many times?"
          />
          {quantityInputError && (
            <span className="help-block">{quantityInputError}</span>
          )}
        </div>
        <Button type="submit" className="btn-primary">
          Submit<span className="fa fa-plus-circle"></span>
        </Button>
      </form>
    );
  }
}
RepLogCreator.propTypes = {
  onAddRepLog: PropTypes.func.isRequired,
  // validationErrorMessage: PropTypes.string.isRequired,
  // itemOptions: PropTypes.array.isRequired,
};
