import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angulr";
  item = [
    {id:"1",
    baris: "*",
    kolom1: "*",
    kolom2: "*",
    kolom3: "*",
    kolom4: "*",
    kolom5: "*"},

    { id:"2",
    baris: "*",
    kolom1: "*",
    kolom2: "*",
    kolom3: "*",
    kolom4: "*",
    kolom5: "*"},

    { id:"3",
      baris: "*",
    kolom1: "*",
    kolom2: "*",
    kolom3: "*",
    kolom4: "*",
    kolom5: "*"},

    {id:"4",
    baris: "*",
    kolom1: "*",
    kolom2: "*",
    kolom3: "*",
    kolom4: "*",
    kolom5: "*"},

    { id:"5",
    baris: "*",
    kolom1: "*",
    kolom2: "*",
    kolom3: "*",
    kolom4: "*",
    kolom5: "*"}
  ];

  b1="";
  k1="";

  b2="";
  k2="";

  update() {
    let itemindex = this.item.findIndex(element => element.id = this.b1);
    
    if(this.k1=="1") {
      this.item[itemindex].kolom1="1";
    }
    else if (this.k1=="2") {
      this.item[itemindex].kolom2="1";
    }
  }
  values = '';
  onKey(event: any) {
    this.values += event.target.value + '|';
  }
}
