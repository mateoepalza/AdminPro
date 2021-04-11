import { Injectable } from '@angular/core';

/**
 * Los servicios sirven para ayudar a los componentes a ser lo más
 * sencillos posibles
 */
@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private theme = document.querySelector('#theme');
  //
  // get all the <a> elements
  links: NodeListOf<Element>;

  constructor() {
    // Carga el tema seleccionado anteriormente
    this.loadTheme();
  }

  /**
   * Carga el tema seleccionado previamente
   */
  loadTheme() {
    let url = localStorage.getItem('theme')
    if (!url) {
      url = "./assets/css/colors/default.css"
    }
    this.theme.setAttribute('href', url);
  }

  /**
   * Este metodo cambia el tema de la página
   * @param color es el nombre del archivo que de tema que se debe cargar
   */
  changeTheme(color: string) {

    // set the item
    const url = `./assets/css/colors/${color}.css`;
    this.theme.setAttribute('href', url);

    // save in localStorage
    localStorage.setItem('theme', url);

    // update the check icon
    this.checkCurrentTheme();
  }

  /**
   * This method removes the "working" class, and adds the "working" class
   * to the element that has the current theme
   */
  checkCurrentTheme() {
    // get all items
    const links = document.querySelectorAll(".selector");
    
    links.forEach(element => {
      // remove working 
      element.classList.remove('working');
      // get the name of the file
      const btnTheme = element.getAttribute('data-theme');
      // construct the theme url
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      // get the current theme
      const currentTheme = this.theme.getAttribute('href');

      // compare both links 
      if (btnThemeUrl === currentTheme) {
        // add the class
        element.classList.add('working');
      }
    })

  }

}
