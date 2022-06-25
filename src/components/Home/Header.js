import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import TBreadcrumbs from '../common/TBreadcrumbs';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import TemplateBlock from './TemplateBlock';
import { useMemo } from 'react';

const TitlePage = styled(Typography)(() => ({
  fontSize: '2rem',
  fontWeight: 'bold',
  paddingTop: '1rem',
}));

const RingHover = styled('div')(() => ({
  '&:hover': {
    backgroundColor: '#655BDC',
    svg: { color: '#FFFFFF' },
  },
}));

function Header() {
  const blocksInfo = useMemo(() => {
    return [
      {
        label: 'Total time on Project',
        icon: <WorkOutlineOutlinedIcon className="h-4 w-4" />,
        value: (
          <div className="flex">
            <Typography variant="h5" className="font-semibold ">
              03:39
            </Typography>
            <sup className="pl-1 text-3xs">h</sup>
          </div>
        ),
      },

      {
        label: 'Earnings',
        icon: <LocalAtmOutlinedIcon className="h-4 w-4" />,
        value: (
          <div className="flex">
            <sup className="pr-1 text-3xs">$</sup>
            <Typography variant="h5" className="font-semibold ">
              2,409.20
            </Typography>
          </div>
        ),
      },
      {
        label: 'Costs',
        icon: <AccountBalanceWalletOutlinedIcon className="h-4 w-4" />,
        value: (
          <div className="flex">
            <sup className="pr-1 text-3xs">$</sup>
            <Typography variant="h5" className="font-semibold ">
              1,209.20
            </Typography>
          </div>
        ),
      },
      {
        label: 'Productivity',
        icon: <ShowChartOutlinedIcon className="h-4 w-4" />,
        value: (
          <div className="flex items-end">
            <div className="flex mr-2 text-[#445464]">
              <Typography variant="h5" className="font-semibold ">
                93,57
              </Typography>
              <sup className="pl-1 text-3xs">%</sup>
            </div>
            <Typography
              variant="body2"
              className="font-semibold text-[#35AC8C] flex"
            >
              <ArrowDropUpIcon /> 2,37%
            </Typography>
          </div>
        ),
      },
    ];
  }, []);

  return (
    <div>
      <div className="flex justify-between sm:items-center  flex-col sm:flex-row">
        <div>
          <TBreadcrumbs
            data={[
              { label: 'WorkPlus', href: '/' },
              { label: 'Dashboard', href: '/dashboard' },
            ]}
          />
          <div className="flex items-center overflow-auto">
            <TitlePage
              variant="h1"
              component="h1"
              gutterBottom
              className="md:text-xl text-base whitespace-nowrap"
            >
              Design System
            </TitlePage>
            <Typography
              variant="subtitle2"
              gutterBottom
              component="div"
              className="m-0 mt-3 ml-6 text-primary font-semibold xs:block hidden"
            >
              Edit
            </Typography>
          </div>
        </div>
        <div className="flex items-center xs:justify-end justify-center ">
          <Typography
            variant="subtitle2"
            component="div"
            className="m-0 mr-6 text-primary font-semibold xs:hidden block"
          >
            Edit
          </Typography>
          <RingHover className="cursor-pointer border-solid border-primary border-[1px] rounded-full p-2 flex items-center h-fit w-fit ">
            <NotificationsNoneOutlinedIcon className=" h-6 w-6 text-primary " />
          </RingHover>
          <div className="flex items-center ml-3 text-gray-400 rounded-2xl bg-gray-100 lg:px-6 lg:py-2 px-3 py-3 ">
            <DateRangeOutlinedIcon />
            <div className="ml-2 text-sm lg:block hidden ">
              <Typography
                variant="body2"
                component="div"
                className="m-0  font-semibold"
              >
                TotalTime
              </Typography>
              <Typography
                variant="body2"
                component="div"
                className="m-0  font-semibold"
              >
                Calendar is not available
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-auto pb-2">
        <div className="text-[#35AC8C] flex items-center mr-6  ">
          <FlashOnIcon />
          <Typography
            variant="body2"
            className="font-semibold ml-1 whitespace-nowrap"
          >
            Active Project
          </Typography>
        </div>
        <div className="text-gray-400 flex items-center mr-6  ">
          <PersonOutlineOutlinedIcon />
          <Typography variant="body2" className="font-semibold ml-1">
            4
          </Typography>
          <Typography variant="body2" className=" ml-1">
            assignees
          </Typography>
        </div>
        <div className="text-gray-400 flex items-center mr-6  ">
          <AccountBalanceWalletOutlinedIcon />
          <Typography variant="body2" className=" ml-1">
            Budget:
          </Typography>
          <Typography
            variant="body2"
            className="font-semibold ml-1 whitespace-nowrap"
          >
            32 hours
          </Typography>
        </div>
      </div>
      <div className="w-full flex flex-wrap">
        {blocksInfo.map((e, index) => {
          return (
            <div
              key={index}
              className={`w-full xl:w-1/4 md:w-1/2 text-[#445464] py-2 ${
                !index
                  ? 'md:pr-2 pr-0'
                  : index === blocksInfo.length - 1
                  ? 'xl:pl-2 pr-0 text-blue-500'
                  : 'xl:px-2 px-0'
              } ${index % 2 === 0 ? 'md:pr-2' : 'md:pl-2'}`}
            >
              <TemplateBlock {...e}>{e.value}</TemplateBlock>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
