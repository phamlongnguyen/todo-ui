import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AvTimerOutlinedIcon from '@mui/icons-material/AvTimerOutlined';
import PanoramaOutlinedIcon from '@mui/icons-material/PanoramaOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import GroupWorkOutlinedIcon from '@mui/icons-material/GroupWorkOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import ScreenshotMonitorOutlinedIcon from '@mui/icons-material/ScreenshotMonitorOutlined';
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';

export const MENU_NAV_BAR = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: <DashboardOutlinedIcon className="text-inherit" />,
  },
  {
    label: 'Real-time Tracking',
    href: '/real-time-tracking',
    icon: <AvTimerOutlinedIcon className="text-inherit" />,
  },
  {
    label: 'Screenshots',
    href: '/screenshots',
    icon: <PanoramaOutlinedIcon className="text-inherit" />,
  },
  {
    label: 'Employees',
    href: '/employees',
    icon: <PeopleAltOutlinedIcon className="text-inherit" />,
  },
  {
    label: 'Projects Tracking',
    href: '/projects-tracking',
    icon: <WorkOutlineOutlinedIcon className="text-inherit" />,
  },
  {
    label: 'Teams',
    href: '/teams',
    icon: <GroupWorkOutlinedIcon className="text-inherit" />,
  },
  {
    label: 'Time and Attendance',
    href: '/time-and-attendance',
    icon: <EventNoteOutlinedIcon className="text-inherit" />,
  },
  {
    label: 'Apps and Websites',
    href: '/apps-and-websites',
    icon: <ScreenshotMonitorOutlinedIcon className="text-inherit" />,
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: <SettingsOutlinedIcon className="text-inherit" />,
  },
];

export const PRIORITY_LIST = {
  1: {
    label: 'Highest',
    icon: <DoubleArrowRoundedIcon className="-rotate-90 text-[#F67452]" />,
  },
  2: {
    label: 'High',
    icon: (
      <KeyboardArrowDownRoundedIcon className="rotate-180 text-[#F78F73]" />
    ),
  },
  3: {
    label: 'Medium',
    icon: <DragHandleRoundedIcon className="text-[#F8AB04]" />,
  },
  4: {
    label: 'Low',
    icon: <KeyboardArrowDownRoundedIcon className="text-[#2B65FF]" />,
  },
  5: {
    label: 'Lowest',
    icon: <DoubleArrowRoundedIcon className="rotate-90 text-[#3284FF]" />,
  },
};
