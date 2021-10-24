import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

export const ItemCount = ({ count, modify, max }) => {
  const addOne = () => {
    if (count < max) {
      modify(count + 1);
    }
  };

  const subOne = () => {
    if (count > 0) {
      modify(count - 1);
    }
  };

  return (
    <>
      <div>
        <ButtonGroup>
          <Button
            variant="outline-dark"
            onClick={addOne}
            disabled={count === max}
          >
            +
          </Button>
          <Button
            variant="outline-dark"
            onClick={subOne}
            disabled={count === 0}
          >
            -
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};
