import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { FormGroup, FormArray, FormBuilder, Validators  } from '@angular/forms';

declare const $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

	private data:any;
	public data2:any;
	public socios:any;
	public productList:any;
	public loading=false;
	public sliderForm: FormGroup;
	public sliderF:any;
	public i:any;

	constructor(private http: HttpClient, private builder: FormBuilder) {
	  	this.sliderForm = this.builder.group({
            slider: this.builder.array([this.slider()])
	    })
	}

	slider(){
        return this.builder.group({
            pos: [""],
            img: [""]
        })
    }

	ngOnInit() {
	  	this.loading=true;
      	this.http.get('http://apimanappger.internow.com.mx/api/public/slider')
           .subscribe((data)=> {
           	   console.log(data);
           	   this.sliderF=data;
           	   this.sliderF=this.sliderF.slider;
           	   console.log(this.sliderF);
           	   console.log(this.sliderF.length);
               this.loading=false;

               const control= <FormArray>this.sliderForm.controls["slider"];

               for (var i = 0; i < this.sliderF.length-1; i++) {
            		control.push(this.slider());
            	}

               for (var i = 0; i < this.sliderF.length; i++) {
            		(<FormArray>this.sliderForm.controls['slider']).at(i).patchValue({img: this.sliderF[i].img });
            		(<FormArray>this.sliderForm.controls['slider']).at(i).patchValue({pos: i+1 });
            	}
            });
	}

	agregar(){
        const control= <FormArray>this.sliderForm.controls["slider"];
        var index=control.value.length-1;
        if (false) {
            
        }else{
            control.push(this.slider());
        }
    }

    remover(i){
        const control= <FormArray>this.sliderForm.controls["slider"];
        var index=control.value.length-1;
        control.removeAt(index);
    }

    guardar(item){
    	console.log(JSON.stringify(item.value.slider));
    	var send={
    		slider:JSON.stringify(item.value.slider)
    	};
    	console.log(send);
        this.http.put('http://apimanappger.internow.com.mx/api/public/datos/1',send)
         .toPromise()
         .then(
           data => { // Success
             console.log(data);
             this.showNotification('top','center','Actualizado con exito',2);
             this.loading=false;
             this.reset();
           },
           msg => { // Error
             console.log(msg);
             this.showNotification('top','center','Ha ocurrido un error' + JSON.stringify(msg.error),4);
             this.loading=false;
             this.reset();
        });
    }

    reset(){
    	this.loading=true;
      	this.http.get('http://apimanappger.internow.com.mx/api/public/slider')
           .subscribe((data)=> {
           	   console.log(data);
           	   this.sliderF=data;
           	   this.sliderF=this.sliderF.slider;
           	   console.log(this.sliderF);
           	   console.log(this.sliderF.length);
               this.loading=false;

               this.sliderForm = this.builder.group({
		            slider: this.builder.array([this.slider()])
			    })
               const control= <FormArray>this.sliderForm.controls["slider"];

               for (var i = 0; i < this.sliderF.length-1; i++) {
            		control.push(this.slider());
            	}

               for (var i = 0; i < this.sliderF.length; i++) {
            		(<FormArray>this.sliderForm.controls['slider']).at(i).patchValue({img: this.sliderF[i].img });
            		(<FormArray>this.sliderForm.controls['slider']).at(i).patchValue({pos: i+1 });
            	}
            });
    }

    showNotification(from, align, mensaje,colors){
          const type = ['','info','success','warning','danger'];

          const color = colors;
          
          $.notify({
              icon: "notifications",
              message: mensaje

          },{
              type: type[color],
              timer: 4000,
              placement: {
                  from: from,
                  align: align
              }
          });
    }
    setI(i){
    	console.log(i);
    	this.i=i;
    }

  	uploadFile: any;
    hasBaseDropZoneOver: boolean = false;
    options: Object = {
      url: 'http://apimanappger.internow.com.mx/upload.php'
    };
    sizeLimit = 2000000;
	handleUpload(data): void {

      if (data && data.response) {
        data = JSON.parse(data.response);
        this.uploadFile = data;
        this.loading=false;
        //this.sliderForm.patchValue({img: 'http://apimanappger.internow.com.mx/uploads/'+this.uploadFile.generatedName });
      	(<FormArray>this.sliderForm.controls['slider']).at(this.i).patchValue({img: 'http://apimanappger.internow.com.mx/uploads/'+this.uploadFile.generatedName});
      	console.log(this.sliderForm);
      }
    }
   
    fileOverBase(e:any):void {
      console.log('t1');
      this.hasBaseDropZoneOver = e;
    }
   
    beforeUpload(uploadingFile): void {
      this.loading=true;
      console.log('t2');
      if (uploadingFile.size > this.sizeLimit) {
        uploadingFile.setAbort();
        alert('File is too large');

      }
    }

}
