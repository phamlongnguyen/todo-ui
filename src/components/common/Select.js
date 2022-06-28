import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useEffect } from 'react';
import { Avatar, Box, Chip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const SelectCus = styled(Select)(({ multiple }) => ({
  minHeight: 20,
  width: 'fit-content',
  backgroundColor: '#EFEFEF',
  borderRadius: 10,
  marginLeft: 10,
  '>div': {
    display: 'flex',
    flexWrap: 'wrap',
    padding: multiple ? '8px' : '5px',
    minWidth: '100px',
  },
}));

const MenuItemCus = styled(MenuItem)(({ multiple }) => ({
  height: '50px',
}));

function TSelect({
  options = [],
  preifx = 'name',
  onChange = () => {},
  defaultValue,
  isMultiple = false,
}) {
  const [personName, setPersonName] = React.useState([]);

  useEffect(() => {
    setPersonName(
      isMultiple && typeof defaultValue !== 'object' ? [] : defaultValue,
    );
  }, [defaultValue, isMultiple]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
    onChange(value);
  };
  return (
    <SelectCus
      displayEmpty
      multiple={isMultiple}
      value={personName}
      onChange={handleChange}
      MenuProps={MenuProps}
      renderValue={(selected) => {
        const newSelectd =
          typeof selected === 'object'
            ? selected.map((e) => options.find((el) => el.id === e))
            : options.find((e) => e.id === selected);
        return (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {typeof selected === 'object' ? (
              newSelectd?.map?.((value) => (
                <Chip
                  key={value.id}
                  avatar={<Avatar alt="Natacha" src={value.icon} />}
                  label={value[preifx]}
                  variant="outlined"
                />
              ))
            ) : (
              <div className={`flex items-center `}>
                {typeof newSelectd.icon === 'string' ? (
                  <img
                    loading="lazy"
                    width="30"
                    height="30"
                    src={newSelectd.icon}
                    alt={`Flag of ${newSelectd[preifx]}`}
                    className="rounded-full"
                  />
                ) : (
                  <div className="mx-2 translate-y-1"> {newSelectd.icon}</div>
                )}
                <Typography variant="subtitle2" className="ml-2">
                  {newSelectd[preifx]}
                </Typography>
              </div>
            )}
          </Box>
        );
      }}
    >
      {options.map((c) => (
        <MenuItemCus key={c.id} value={c.id}>
          <div className={`flex items-center ${isMultiple && 'sm:my-0 my-2 '}`}>
            {typeof c.icon === 'string' ? (
              <img
                loading="lazy"
                width="30"
                height="30"
                src={c.icon}
                alt={`Flag of ${c[preifx]}`}
                className="rounded-full"
              />
            ) : (
              <div className="mx-2 translate-y-1"> {c.icon}</div>
            )}
            <Typography variant="subtitle2" className="ml-2">
              {c[preifx]}
            </Typography>
          </div>
        </MenuItemCus>
      ))}
    </SelectCus>
  );
}

export default TSelect;
