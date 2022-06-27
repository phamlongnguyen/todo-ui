import styled from '@emotion/styled';
import SelectUnstyled, {
  selectUnstyledClasses,
} from '@mui/base/SelectUnstyled';
import OptionUnstyled, {
  optionUnstyledClasses,
} from '@mui/base/OptionUnstyled';
import { MultiSelectUnstyled, PopperUnstyled } from '@mui/base';
import React from 'react';

const StyledButton = styled('button')(
  () => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 200px;
  border: 1px solid  #CDD2D7;
  border-radius: 0.75em;
  margin: 0.5em;
  padding: 10px;
  text-align: left;
  line-height: 1.5;
  color: #10151a;

  &:hover {
    background:#E7EBF0;
    border-color: #B2BAC2;
  }

  &.${selectUnstyledClasses.focusVisible} {
    outline: 3px solid #DAECFF;
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }

  & img {
    margin-right: 10px;
  }
  `,
);

const StyledListbox = styled('ul')(
  () => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 10px 0;
  min-width: 200px;
  max-height: 400px;
  background: #fff;
  border: 1px solid #CDD2D7;
  border-radius: 0.75em;
  color: #1A2027;
  overflow: auto;
  outline: 0px;
  `,
);

const StyledOption = styled(OptionUnstyled)(
  () => `
  list-style: none;
  padding: 8px;
  border-radius: 0.45em;
  cursor: default;
  display:flex;
  align-items: center;
  margin: 5px 0px;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: #DAECFF;
    color: #003A75;
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: #E7EBF0;
    color: #1A2027;
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: #DAECFF;
    color: #003A75;
  }

  &.${optionUnstyledClasses.disabled} {
    color: #B2BAC2;
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: #E7EBF0;
    color: #1A2027;
  }

  & img {
    margin-right: 10px;
  }
  `,
);
const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };
  return props.isMultiple ? (
    <MultiSelectUnstyled {...props} ref={ref} components={components} />
  ) : (
    <SelectUnstyled {...props} ref={ref} components={components} />
  );
});
function Select({
  options = [],
  preifx = 'name',
  onChange = () => {},
  defaultValue,
  isMultiple = false,
}) {
  return (
    <CustomSelect
      defaultValue={defaultValue}
      onChange={onChange}
      isMultiple={isMultiple}
    >
      {options.map((c) => (
        <StyledOption key={c.id} value={c.id} label={c[preifx]}>
          {typeof c.icon === 'string' ? (
            <img
              loading="lazy"
              width="20"
              src={c.icon}
              alt={`Flag of ${c[preifx]}`}
            />
          ) : (
            <div className="mr-4"> {c.icon}</div>
          )}
          {c[preifx]}
        </StyledOption>
      ))}
    </CustomSelect>
  );
}

export default Select;
