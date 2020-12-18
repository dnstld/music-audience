import React, {
  useState,
} from 'react';

import {
  Container
} from './styles';

function Checkbox({children, ...rest}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' ||  e.type === 'click') {
      setIsChecked(!isChecked);
    }
  }

  return (
    <Container>
      <input
        type="checkbox"
        value="value"
        id="input-checkbox"
        checked={isChecked}
        onChange={handleKeyDown}
        onKeyPress={handleKeyDown}
        onClick={handleKeyDown}
        {...rest}
      />
      <label htmlFor="input-checkbox"></label>
      <p>
        {children}
      </p>
    </Container>
  );
}

export default Checkbox;