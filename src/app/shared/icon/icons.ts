/**
 * The only icons the site uses, imported individually so the bundle contains
 * just these SVG paths instead of the whole Font Awesome icon font.
 * Icons: Font Awesome Free 6 by Fonticons, Inc. (https://fontawesome.com), CC BY 4.0.
 */
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import {
  faArrowRight,
  faArrowTrendUp,
  faAward,
  faBars,
  faBookBookmark,
  faBuilding,
  faBullseye,
  faChartLine,
  faChartPie,
  faCheck,
  faChevronRight,
  faCircleCheck,
  faCircleQuestion,
  faClock,
  faClockRotateLeft,
  faEnvelope,
  faFileInvoiceDollar,
  faHandshake,
  faLandmark,
  faLayerGroup,
  faLocationArrow,
  faLocationDot,
  faMapLocationDot,
  faMapPin,
  faPaperPlane,
  faPhone,
  faPhoneVolume,
  faShieldHalved,
  faShop,
  faStar,
  faUser,
  faUserCheck,
  faUserDoctor,
  faUsers,
  faUserTie,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ALL: IconDefinition[] = [
  faArrowRight,
  faArrowTrendUp,
  faAward,
  faBars,
  faBookBookmark,
  faBuilding,
  faBullseye,
  faChartLine,
  faChartPie,
  faCheck,
  faChevronRight,
  faCircleCheck,
  faCircleQuestion,
  faClock,
  faClockRotateLeft,
  faEnvelope,
  faFileInvoiceDollar,
  faHandshake,
  faLandmark,
  faLayerGroup,
  faLocationArrow,
  faLocationDot,
  faMapLocationDot,
  faMapPin,
  faPaperPlane,
  faPhone,
  faPhoneVolume,
  faShieldHalved,
  faShop,
  faStar,
  faUser,
  faUserCheck,
  faUserDoctor,
  faUsers,
  faUserTie,
  faXmark,
  faWhatsapp,
];

export interface IconPath {
  width: number;
  height: number;
  path: string;
}

/** Icon name (e.g. 'phone', 'whatsapp') -> SVG data. */
export const ICONS: Record<string, IconPath> = Object.fromEntries(
  ALL.map(({ iconName, icon: [width, height, , , svgPath] }) => [
    iconName,
    { width, height, path: Array.isArray(svgPath) ? svgPath.join(' ') : svgPath },
  ]),
);
