import 'next-intl';
import zh from '@/i18n/locales/zh.json';

type Messages = typeof zh;

declare module 'next-intl' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface IntlMessages extends Messages {}
}
