import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'Dashboard',
        icon: 'nb-home',
        link: '/pages/dashboard',
        home: true
    },
    {
        title: 'OPCIONES',
        group: true
    },
    {
        title: 'Trazabilidad Logs',
        icon: 'nb-compose',
        link: '/pages',
        children: [
            {
                title: 'Correos',
                link: '/pages/consultas/logs'
            },
            {
                title: 'Notificaciones Push',
                link: '/pages/consultas/push'
            }
        ]
    }
];