import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-nouvelle-cmd-clt-frs',
  templateUrl: './nouvelle-cmd-clt-frs.component.html',
  styleUrls: ['./nouvelle-cmd-clt-frs.component.scss']
})
export class NouvelleCmdCltFrsComponent implements OnInit {
  origin = '';
  @Output()
  saveClickEvent = new EventEmitter();
  @Output()
  cancelClickEvent = new EventEmitter();
  constructor(
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin= data['origin'];
    });
  }

  saveClick():void {
    this.saveClickEvent.emit();
  }
  cancelClick():void {
    this.cancelClickEvent.emit();
  }

}
