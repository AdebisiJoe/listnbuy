import { Component, OnInit,ViewChild , ContentChild, HostBinding,ElementRef} from '@angular/core';
import { IonSlides,IonCheckbox } from '@ionic/angular';
import { faMotorcycle,faCar,faBicycle } from '@fortawesome/free-solid-svg-icons';

import { Camera,CameraResultType,CameraSource,Photo } from '@capacitor/camera';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Platform } from '@ionic/angular';
import { SellerService } from 'src/app/api/seller.service';
SellerService

const IMAGE_DIR = 'stored-images';

interface LocalFile {
  name: string;
  path: string;
  data: string;
}


@Component({
  selector: 'app-sellupload',
  templateUrl: './sellupload.page.html',
  styleUrls: ['./sellupload.page.scss'],
})
export class SelluploadPage implements OnInit {


  faBicycle=faBicycle;
  activeState = 'Vehicles';
  @ViewChild('mainSlides', { static: true }) slides: IonSlides;
   value:boolean=true;
   only_cars:boolean=true;
   cars_and_bikes:boolean=true;
   general_market:boolean=true;
   checkedIdx=0;
   optionsData:any;
   slideOpts = {
    initialSlide: 0,
    speed: 400
  };

     // get access to the IonCheckbox element
  @ContentChild(IonCheckbox) checkbox: IonCheckbox;
  @ViewChild('file', { static: false }) public file: ElementRef;
  @ViewChild('file2', { static: false }) public file2: ElementRef;
  @ViewChild('file3', { static: false }) public file3: ElementRef;

  @HostBinding('class.checkbox-checked') isChecked: boolean;

  states = [
    {'name':'Vehicles','icon':'car-sport-outline'},
    {'name':'Bikes','icon':'bicycle-outline'},
    {'name':'Spare Parts','icon':'cog-outline'},
    {'name':'General Market','icon':'cart-outline'},
  ];
  
  

  setStateAsActive(state:string) {
    this.activeState = state;
    console.log(this.activeState)
    this.value=!this.value;
  }


  private platform: Platform;

  constructor(platform: Platform,private sellerService:SellerService) { 
    this.platform = platform;
  }

  ngOnInit() {
    this.getOptionsData();
  }

  public goBack() {
    this.slides.slidePrev();
  }

  public goToNext(){
    this.slides.slideNext();
  }

  public async getOptionsData(){
     this.optionsData= await this.sellerService.getAdvertsDataOptions();
     console.log(this.optionsData);
  }
  
  public onCoverImagesSelect(): void {
     const fileArray: Array<File> = this.file.nativeElement.files;

     for (var i = 0; i < this.file.nativeElement.files.length; i++) {
        
        var file =this.file.nativeElement.files[i];
        
        let img:HTMLImageElement = document.createElement("img");
        var reader = new FileReader();
        reader.onloadend = function() {
            img.style.width='50px'
            img.style.height='50px';
            img.src = reader.result as string;
            
        }
        reader.readAsDataURL(file);
        var down =document.getElementById('addcoverimage').appendChild(img);

     }
     
     console.log(fileArray);
  }

  public onOtherImagesSelect(): void {
      const fileArray: Array<File> = this.file2.nativeElement.files;
      for (var i = 0; i < this.file2.nativeElement.files.length; i++) {
        
        var file =this.file2.nativeElement.files[i];
        
        let img:HTMLImageElement = document.createElement("img");
        var reader = new FileReader();
        reader.onloadend = function() {
            img.style.width='50px'
            img.style.height='50px';
            img.src = reader.result as string;
            
        }
        reader.readAsDataURL(file);
        var down =document.getElementById('addotherimages').appendChild(img);

     }
     
     console.log(fileArray);
  }

  public onVideoSelect(): void {
    const fileArray: Array<File> = this.file3.nativeElement.files;
    
    for (var i = 0; i < this.file3.nativeElement.files.length; i++) {
      
      var file =this.file3.nativeElement.files[i];
      var reader = new FileReader();
    
      reader.readAsDataURL(file);
      

      if (/^video/.test( file.type)){ // only video file
        var reader = new FileReader(); // instance of the FileReader
        reader.readAsDataURL(file); // read the local file
        reader.onloadend = function(){ // set video data as background of div
              
          let blobURL = URL.createObjectURL(file);
          document.querySelector("video").style.display = 'block';
          document.querySelector("video").src = blobURL;

          }
       }

   }
   
    
    console.log(fileArray);
  }




  async selectImage(){
    const image = await Camera.getPhoto(
      {
        quality:90,
        allowEditing:false,
        resultType:CameraResultType.Uri,
        source:CameraSource.Camera
      }
    )

    console.log(image);
    if(image){
      this.saveImage(image);
    }
  }

  async saveImage(photo: Photo){
    const base64Data='';
    const fileName= new Date().getTime()+'.jpeg';
    const savedFile = await Filesystem.writeFile({
      directory:Directory.Data,
      path:`${IMAGE_DIR}/${fileName}`,
      data:base64Data
    });

    console.log('saved',savedFile);
  }

 async readAsBase64(photo :Photo){
    // "hybrid" will detect Cordova or Capacitor
    if (this.platform.is('hybrid')) {
      // Read the file into base64 format
      const file = await Filesystem.readFile({
        path: photo.path
      });

      return file.data;
    }
    else {
      // Fetch the photo, read as a blob, then convert to base64 format
      const response = await fetch(photo.webPath);
      const blob = await response.blob();

      return await this.convertBlobToBase64(blob) as string;
    }
 }

 
convertBlobToBase64 = (blob:Blob) =>new Promise((resolve,reject)=>{
  const reader= new FileReader;
  reader.onerror=reject;

  reader.onload =() =>{
    resolve(reader.result);
  }
  reader.readAsDataURL(blob);
})





onBtnClick = () => {
  /*Collecting node-element and performing click*/
 // this.file.current.click();

  this.file.nativeElement
}

}

