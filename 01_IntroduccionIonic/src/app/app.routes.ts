import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./Paginas/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'accion-shet',
    loadComponent: () => import('./Paginas/accion-shet/accion-shet.page').then( m => m.AccionShetPage)
  },
  {
    path: 'alerta',
    loadComponent: () => import('./Paginas/alerta/alerta.page').then( m => m.AlertaPage)
  },
  {
    path: 'acordion',
    loadComponent: () => import('./Paginas/acordion/acordion.page').then( m => m.AcordionPage)
  },
  {
    path: 'avatar',
    loadComponent: () => import('./Paginas/avatar/avatar.page').then( m => m.AvatarPage)
  },
  {
    path: 'botones',
    loadComponent: () => import('./Paginas/botones/botones.page').then( m => m.BotonesPage)
  },
  {
    path: 'lista',
    loadComponent: () => import('./Paginas/lista/lista.page').then( m => m.ListaPage)
  },
  {
    path: 'tarjetas',
    loadComponent: () => import('./Paginas/tarjetas/tarjetas.page').then( m => m.TarjetasPage)
  },
  {
    path: 'checkbox',
    loadComponent: () => import('./Paginas/checkbox/checkbox.page').then( m => m.CheckboxPage)
  },
  {
    path: 'ionchip',
    loadComponent: () => import('./Paginas/ionchip/ionchip.page').then( m => m.IonchipPage)
  },
  {
    path: 'list-side',
    loadComponent: () => import('./Paginas/list-side/list-side.page').then( m => m.ListSidePage)
  },
  {
    path: 'itemdivider',
    loadComponent: () => import('./Paginas/itemdivider/itemdivider.page').then( m => m.ItemdividerPage)
  },
  {
    path: 'modal',
    loadComponent: () => import('./Paginas/modal/modal.page').then( m => m.ModalPage)
  },
  {
    path: 'loadin',
    loadComponent: () => import('./Paginas/loadin/loadin.page').then( m => m.LoadinPage)
  },
  {
    path: 'range',
    loadComponent: () => import('./Paginas/range/range.page').then( m => m.RangePage)
  },
  {
    path: 'buscar',
    loadComponent: () => import('./Paginas/buscar/buscar.page').then( m => m.BuscarPage)
  },
  {
    path: 'segment',
    loadComponent: () => import('./Paginas/segment/segment.page').then( m => m.SegmentPage)
  },
  
  
  
];
