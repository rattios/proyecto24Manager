import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { FormGroup, FormArray, FormBuilder, Validators  } from '@angular/forms';


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
      	this.http.get('http://apimanappger.internow.com.mx/api/public/datos')
           .subscribe((data)=> {
           	   console.log(data);
           	   this.sliderF=data;
           	   this.sliderF=this.sliderF.slider;
           	   console.log(this.sliderF);
               this.loading=false;
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
        this.sliderForm.patchValue({img: 'http://vivomedia.com.ar/cuetociasrl/uploads/'+this.uploadFile.generatedName });
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
