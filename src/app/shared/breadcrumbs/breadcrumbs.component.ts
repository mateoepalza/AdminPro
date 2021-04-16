import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  titulo: string;
  tituloSubs: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {
    
    console.log( this.route.snapshot.children[0].data);

    // this method load the name of the page
    this.tituloSubs = this.getDataRuta().subscribe(({ titulo }) => {
      // update our property
      this.titulo = titulo;
      // change the name of the title in the tab
      document.title = `AdminPro - ${titulo}`
    })
;
  }

  ngOnInit(): void {
  }
  
  ngOnDestroy(){
    this.tituloSubs.unsubscribe();
  }

  getDataRuta() {
    // We use this because we want to get the data that is sent in the "pages-routing.module.ts"
    return this.router.events.pipe(
      // first we filter if the data is of type ActivationEnd
      filter(data => data instanceof ActivationEnd),
      // we filter that the firschild element should be null
      filter((data: ActivationEnd) => data.snapshot.firstChild == null),
      // we extract the value that we need
      map((data: ActivationEnd) => data.snapshot.data)
    )
  }
}
