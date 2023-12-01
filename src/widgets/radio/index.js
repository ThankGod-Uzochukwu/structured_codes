import React, { useState } from 'react';
import { CheckBox } from 'react-native-elements';

const RadioCheck = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <CheckBox
      checked={isSelected}
      onPress={() => setSelection(!isSelected)}
      containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
      textStyle={{ fontWeight: 'normal' }}
    />
  );
};

export default RadioCheck;
