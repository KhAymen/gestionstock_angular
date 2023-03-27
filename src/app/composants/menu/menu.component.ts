import {Component, OnInit} from '@angular/core';
import {Menu} from "./menu";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuProperties: Array<Menu> = [{
    id: '1',
    titre: 'Tableau de bord',
    icon: 'fas fa-chart-line',
    url: '',
    sousMenu: [
      {
        id: '11',
        titre: 'Vue d\'ensemble',
        icon: 'fas fa-chart-pie',
        url: '',
      }, {
        id: '12',
        titre: 'Statistiques',
        icon: 'fas fa-chart-bar',
        url: 'statistiques',
      }]
  },
    {
      id: '2',
      titre: 'Articles',
      url: 'articles',
      icon: 'fas fa-boxes',
      sousMenu: [
        {
          id: '21',
          titre: 'Articles',
          url: 'articles',
          icon: 'fas fa-boxes',
        },
        {
          id: '22',
          titre: 'Mouvement du stock',
          url: 'mvtstk',
          icon: 'fab fa-stack-overflow',
        }
      ]
    },
    {
      id: '3',
      titre: 'Clients',
      url: '',
      icon: 'fas fa-users',
      sousMenu: [
        {
          id: '31',
          titre: 'Clients',
          url: 'clients',
          icon: 'fas fa-users',
        },
        {
          id: '32',
          titre: 'Commandes clients',
          url: 'commandesclient',
          icon: 'fas fa-shopping-basket',
        }
      ]
    },
    {
      id: '4',
      titre: 'Fournisseurs',
      url: '',
      icon: 'fas fa-users',
      sousMenu: [
        {
          id: '41',
          titre: 'Fournisseurs',
          url: 'fournisseurs',
          icon: 'fas fa-users',
        },
        {
          id: '42',
          titre: 'Commandes fournisseurs',
          url: 'commandesfournisseur',
          icon: 'fas fa-truck',
        }
      ]
    },
    {
      id: '5',
      titre: 'Paramétrages',
      url: '',
      icon: 'fas fa-cogs',
      sousMenu: [
        {
          id: '51',
          titre: 'Categories',
          url: 'categories',
          icon: 'fas fa-tools',
        },
        {
          id: '52',
          titre: 'Utilisateurs',
          url: 'utilisateurs',
          icon: 'fas fa-users-cog',
        }
      ]
    }
  ];

  private lastSelectedMenu: Menu | undefined;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  navigate(menu: Menu): void {
    if (this.lastSelectedMenu) {
      this.lastSelectedMenu.active = false;
    }
    menu.active = true;
    this.router.navigate([menu.url]);
    this.lastSelectedMenu = menu;
  }

}
