import 'next-intl';
import zh from '@/i18n/locales/zh.json';

type Messages = typeof zh;

declare module 'next-intl' {
  interface IntlMessages extends Messages {}
}
