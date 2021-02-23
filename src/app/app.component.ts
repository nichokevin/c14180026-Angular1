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

  b1=0;
  k1="";

  b2=0;
  k2="";

  updateU1() {
    if(this.b1==1) {
      if(this.k1=="1") {
        this.item[(this.b1-1).toString()].kolom1="1";
      }
      else if (this.k1=="2") {
        this.item[this.b1-1].kolom2="1";
      }
      else if (this.k1=="3") {
        this.item[this.b1-1].kolom3="1";
      }
      else if (this.k1=="4") {
        this.item[this.b1-1].kolom4="1";
      }
      else if (this.k1=="5") {
        this.item[this.b1-1].kolom5="1";
      }
    }
    
    if(this.b1==2) {
      if(this.k1=="1") {
        this.item[this.b1-1].kolom1="1";
      }
      else if (this.k1=="2") {
        this.item[this.b1-1].kolom2="1";
      }
      else if (this.k1=="3") {
        this.item[this.b1-1].kolom3="1";
      }
      else if (this.k1=="4") {
        this.item[this.b1-1].kolom4="1";
      }
      else if (this.k1=="5") {
        this.item[this.b1-1].kolom5="1";
      }
    }

    if(this.b1==3) {
      if(this.k1=="1") {
        this.item[this.b1-1].kolom1="1";
      }
      else if (this.k1=="2") {
        this.item[this.b1-1].kolom2="1";
      }
      else if (this.k1=="3") {
        this.item[this.b1-1].kolom3="1";
      }
      else if (this.k1=="4") {
        this.item[this.b1-1].kolom4="1";
      }
      else if (this.k1=="5") {
        this.item[this.b1-1].kolom5="1";
      }
    }
    if(this.b1==4) {
      if(this.k1=="1") {
        this.item[this.b1-1].kolom1="1";
      }
      else if (this.k1=="2") {
        this.item[this.b1-1].kolom2="1";
      }
      else if (this.k1=="3") {
        this.item[this.b1-1].kolom3="1";
      }
      else if (this.k1=="4") {
        this.item[this.b1-1].kolom4="1";
      }
      else if (this.k1=="5") {
        this.item[this.b1-1].kolom5="1";
      }
    }
    if(this.b1==5) {
      if(this.k1=="1") {
        this.item[this.b1-1].kolom1="1";
      }
      else if (this.k1=="2") {
        this.item[this.b1-1].kolom2="1";
      }
      else if (this.k1=="3") {
        this.item[this.b1-1].kolom3="1";
      }
      else if (this.k1=="4") {
        this.item[this.b1-1].kolom4="1";
      }
      else if (this.k1=="5") {
        this.item[this.b1-1].kolom5="1";
      }
    }
  }

    updateU2() {
    if(this.b2==1) {
      if(this.k2=="1") {
        this.item[(this.b2-1).toString()].kolom1="1";
      }
      else if (this.k2=="2") {
        this.item[this.b2-1].kolom2="1";
      }
      else if (this.k2=="3") {
        this.item[this.b2-1].kolom3="1";
      }
      else if (this.k2=="4") {
        this.item[this.b2-1].kolom4="1";
      }
      else if (this.k2=="5") {
        this.item[this.b2-1].kolom5="1";
      }
    }
    
    if(this.b2==2) {
      if(this.k2=="1") {
        this.item[this.b2-1].kolom1="1";
      }
      else if (this.k2=="2") {
        this.item[this.b2-1].kolom2="1";
      }
      else if (this.k2=="3") {
        this.item[this.b2-1].kolom3="1";
      }
      else if (this.k2=="4") {
        this.item[this.b2-1].kolom4="1";
      }
      else if (this.k2=="5") {
        this.item[this.b2-1].kolom5="1";
      }
    }

    if(this.b2==3) {
      if(this.k2=="1") {
        this.item[this.b2-1].kolom1="1";
      }
      else if (this.k2=="2") {
        this.item[this.b2-1].kolom2="1";
      }
      else if (this.k2=="3") {
        this.item[this.b2-1].kolom3="1";
      }
      else if (this.k2=="4") {
        this.item[this.b2-1].kolom4="1";
      }
      else if (this.k2=="5") {
        this.item[this.b2-1].kolom5="1";
      }
    }
    if(this.b2==4) {
      if(this.k2=="1") {
        this.item[this.b2-1].kolom1="1";
      }
      else if (this.k2=="2") {
        this.item[this.b2-1].kolom2="1";
      }
      else if (this.k2=="3") {
        this.item[this.b2-1].kolom3="1";
      }
      else if (this.k2=="4") {
        this.item[this.b2-1].kolom4="1";
      }
      else if (this.k2=="5") {
        this.item[this.b2-1].kolom5="1";
      }
    }
    if(this.b2==5) {
      if(this.k2=="1") {
        this.item[this.b2-1].kolom1="1";
      }
      else if (this.k2=="2") {
        this.item[this.b2-1].kolom2="1";
      }
      else if (this.k2=="3") {
        this.item[this.b2-1].kolom3="1";
      }
      else if (this.k2=="4") {
        this.item[this.b2-1].kolom4="1";
      }
      else if (this.k2=="5") {
        this.item[this.b2-1].kolom5="1";
      }
    }
  }

}
